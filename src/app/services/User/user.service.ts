import { Injectable } from "@angular/core";
import { AppUser, APP_CONST_apiKey } from "src/app/models/AppUser";
import { SheredDataService } from "../SheredData/shered-data.service";
import { APP_CONST_apiOrigin } from "src/environments/environment";
import {
  HttpRequest,
  HttpHeaders,
  HttpEvent,
  HttpClient
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  appUser: AppUser;

  constructor(
    private sheredDataService: SheredDataService,
    private httpClient: HttpClient
  ) {
    this.sheredDataService.currentMessage.subscribe(
      appUser => (this.appUser = appUser)
    );
  }
  getMyProfileLocal(): any {
    return this.appUser.authUser.user;
  }
  async getRoutes(userToken: string): Promise<any> {
    try {
      const resData: any = await this.httpClient
        .post(
          APP_CONST_apiOrigin +
            "/getUserProfileForEdit?apiKey=" +
            APP_CONST_apiKey,
          {
            userToken: userToken
          }
        )
        .toPromise();
      return resData.resData;
    } catch (err) {
      throw err;
    }
  }
  uploadImage(
    fieldName: string,
    api: string,
    file: File,
    imageCat: number,
    refId: number
  ): Observable<HttpEvent<{}>> {
    try {
      let headers = new HttpHeaders({
        Authorization: "Bearer " + this.appUser.authUser.authToken
      });

      const fd = new FormData();
      fd.append("imageCat", "" + imageCat);
      fd.append("refId", "" + refId);
      fd.append(fieldName, file, file.name);

      const reqObj = new HttpRequest(
        "POST",
        APP_CONST_apiOrigin + api + "?apiKey=" + APP_CONST_apiKey,
        fd,
        {
          headers: headers,
          reportProgress: true
        }
      );
      return this.httpClient.request(reqObj);
    } catch (err) {
      throw err;
    }
  }
}
