import { Component, OnInit, OnDestroy, Input, ElementRef } from "@angular/core";
import { NgcmModalService } from "./custom-model-com.service";

@Component({
  selector: "ngcm-modal",
  templateUrl: "./custom-model-com.component.html",
  styleUrls: ["./custom-model-com.component.scss"]
})
export class NgcmModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Input() title: string = "Dialog modal";
  @Input() okBtnText: string = "OK";
  @Input() closeBtnText: string = "close";
  @Input() classlist: string = "";
  @Input() modelWidth: number = 400;
  @Input() OkEnable: boolean = true;
  @Input() footerText: string = "";
  @Input() bodyCenter: boolean = false;
  @Input() closeButton: boolean = true;

  @Input() msg: string = "";

  private element: any;
  preTemplateDialog = false;
  key: string = "";
  constructor(private modalService: NgcmModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    let modal = this;
    // ensure id attribute exists
    if (!this.id) {
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener("click", function (e: any) {
      if (e.target.className === "ngcm-modal") {
        modal.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }


  open(title: string = "", msg: string = "", key: string = ""): void {

    if (this.id == "dynamicMsgDialog") {
      // this.bodyCenter = true;
      this.title = title;
      this.msg = msg;
      this.preTemplateDialog = true;
      this.key = key;
    }

    this.title = title.length > 0 ? title : this.title;
    this.msg = msg.length > 0 ? msg : this.msg;
    this.key = key.length > 0 ? key : this.key;

    this.element.style.display = "block";

    document.body.classList.add("ngcm-modal-open");

    const modelViewElement = this.element.children[0];

    modelViewElement.children[0].style.width = this.modelWidth + "px";
    // modelViewElement.classList.add('show');

    setTimeout(() => {
      modelViewElement.classList.remove("m-hide");
      modelViewElement.classList.add("m-show");
    }, 1);

  }

  // close modal
  close(): void {
    const modelViewElement = this.element.children[0];
    modelViewElement.classList.remove("m-show");
    modelViewElement.classList.add("m-hide");

    // this.element.children[0].classList.remove('m-show');
    // this.element.children[0].classList.add('m-hide');
    setTimeout(() => {
      this.element.style.display = "none";
      document.body.classList.remove("ngcm-modal-open");
    }, 400);
  }
  closeTag = "close";
  closeModal(tag: string) {
    this.modalService.close(this.id, tag, this.key);
  }
}
