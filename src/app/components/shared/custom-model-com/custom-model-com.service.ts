import { Injectable, EventEmitter } from "@angular/core";
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { getNewUniqueTimeKey } from 'src/app/utils/utils';

@Injectable({
  providedIn: "root"
})
export class NgcmModalService {

  constructor() { }
  private modals: any[] = [];

  add(modal: any) {
    console.log("NgcmModalService.add");
    // add modal to array of active modals
    this.modals.push(modal);
  }

  remove(id: string) {
    // remove modal from array of active modals
    this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id: string, title: string = "", msg: string = "", key = "") {
    // open modal specified by id
    if (id == "dynamicMsgDialog") {

      let modal: any = this.modals.filter(x => x.id === id)[0];
      modal.open(title, msg, key);
    } else {
      let modal: any = this.modals.filter(x => x.id === id)[0];
      modal.open();
    }

  }

  openDialogOkEvent(id: string, title: string = "", msg: string = ""): Observable<any> {
    // open modal specified by id
    let key = getNewUniqueTimeKey();
    if (id == "dynamicMsgDialog") {

      let modal: any = this.modals.filter(x => x.id === id)[0];
      modal.open(title, msg, key);
    } else {
      let modal: any = this.modals.filter(x => x.id === id)[0];
      modal.open(title, msg, key);
    }
    return this.onModalClose.pipe(
      filter((v: any) => {
        return v.key == key && v.tag == 'ok';
      })
    );
  }
  public onModalClose: EventEmitter<any> = new EventEmitter<any>();
  close(id: string, tag: string, key: string) {
    // close modal specified by id
    let modal: any = this.modals.filter(x => x.id === id)[0];
    modal.close();
    this.onModalClose.emit({ id, tag, key });
  }
}
