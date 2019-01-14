import { Injectable, EventEmitter } from "@angular/core";
import { SheredDataService } from "../SheredData/shered-data.service";
import { AppUser } from "src/app/models/AppUser";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class AdminService {
  appUser: AppUser;
  constructor(
    private sheredDataService: SheredDataService,
    private httpClient: HttpClient
  ) {
    this.sheredDataService.currentMessage.subscribe(
      appUser => (this.appUser = appUser)
    );
    // }

    // async getUserProfile(userId: number): Promise<DataResponse> {
    //   try {
    //     let headers = new HttpHeaders({ Authorization: "Bearer " + this.appUser.authUser.authToken });
    //     const resData: any = await this.httpClient
    //       .get(`${APP_CONST_apiOrigin}/admin/Users/id/${userId}?apiKey=${APP_CONST_apiKey}`, {
    //         headers: headers
    //       }).toPromise();
    //     return resData;
    //   }
    //   catch (err) {
    //     throw err;
    //   }

    // }
  }
}
