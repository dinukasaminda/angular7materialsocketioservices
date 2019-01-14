import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/services/admin/admin.service";
import { NgcmModalService } from "src/app/components/shared/custom-model-com/custom-model-com.service";
import { MySnackBarService } from "src/app/services/mySnackBar/my-snack-bar.service";
import { AppUser } from "src/app/models/AppUser";
import { SheredDataService } from "src/app/services/SheredData/shered-data.service";

@Component({
  selector: "app-admin-home",
  templateUrl: "./admin-home.component.html",
  styleUrls: ["./admin-home.component.scss"]
})
export class AdminHomeComponent implements OnInit {
  appUser = new AppUser();

  adminLogged = false;
  adminlogin = {};
  constructor(
    private sheredDataService: SheredDataService,
    private adminService: AdminService,
    private ngcmModalService: NgcmModalService,
    private mySnackBarService: MySnackBarService
  ) {}

  ngOnInit() {
    this.sheredDataService.currentMessage.subscribe(
      appUser => (this.appUser = appUser)
    );
  }

  loginInit() {
    var lsdata: any = localStorage.getItem("adminUser");

    if (lsdata != undefined && lsdata != null && lsdata.length > 0) {
      lsdata = JSON.parse(lsdata);
      if (lsdata != undefined && lsdata.authToken != undefined) {
        this.appUser.authUser.authToken = lsdata.authToken;
        this.appUser.authUser.type = lsdata.type;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getProfile() {
    // this.adminService
    //   .getMyProfile()
    //   .then(res => {
    //     console.log("Usre Logged.");
    //     this.appUser.authUser.userState = 2;
    //     this.appUser.authUser.user = res.data.user;
    //     this.appUser.appState = 200;
    //     // this.onProfileReady.next(1);
    //     // this.onProfileReady.complete();
    //     console.log(res);
    //     this.isDataLoaded = true;
    //   })
    //   .catch(() => {
    //     this.appUser.appState = 200;
    //     this.isDataLoaded = true;
    //     //this.sheredService.openSnackBar("Server Not responding", "Error");
    //   });
  }
  logoutAdmin() {
    localStorage.setItem("adminUser", "");
    location.href = "/";
  }
  ngOnDestroy(): void {}
  openLoginAdminModel() {
    this.ngcmModalService.open("adminLogin");
  }
}
