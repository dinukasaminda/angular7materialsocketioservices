import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { UserService } from "src/app/services/User/user.service";
import { HttpEventType } from "@angular/common/http";
import { APP_CONST_IMG_COMMON } from "src/environments/environment";

@Component({
  selector: "app-image-upload",
  templateUrl: "./image-upload.component.html",
  styleUrls: ["./image-upload.component.scss"]
})
export class ImageUploadComponent implements OnInit {
  @Input()
  imageCategory: number = 0;

  @Input()
  refId: number = 0;

  @Input()
  imageWidth: number = 200;

  @Input()
  imageHeight: number = 180;

  @Output()
  ImageUploaded: EventEmitter<any> = new EventEmitter<any>();

  progressVisible = false;
  uploadPresntage = 0;
  imageSrc: any = null;
  selectedFile: File = null;
  //placeHolderImage= 'http://placehold.it/180x180';

  constructor(private userService: UserService) {}

  ngOnInit() {}

  onFileSelected(event: any) {
    console.log(event);
    this.selectedFile = event.target.files[0];
    this.readURL();
  }
  async onUpload() {
    this.progressVisible = true;
    let api = APP_CONST_IMG_COMMON;

    this.userService
      .uploadImage(
        "myImage",
        api,
        this.selectedFile,
        this.imageCategory,
        this.refId
      )
      .subscribe(event => {
        if (event.type == HttpEventType.UploadProgress) {
          this.uploadPresntage = Math.floor((event.loaded * 100) / event.total);
          console.log(this.uploadPresntage + "%");
        } else if (event.type == HttpEventType.Response) {
          this.progressVisible = false;
          console.log(event.status);
          console.log(event.body);
          const resData: any = event.body || {};
          this.ImageUploaded.emit(resData.resData);
          this.selectedFile = null;
        }
      });
  }
  readURL(): void {
    if (this.selectedFile != null) {
      const reader = new FileReader();
      reader.onload = e => (this.imageSrc = reader.result);

      reader.readAsDataURL(this.selectedFile);
    }
  }
}
