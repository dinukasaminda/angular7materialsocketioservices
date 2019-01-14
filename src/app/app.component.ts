import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, NavigationEnd } from "@angular/router";
import { AppUser } from "./models/AppUser";
import { SheredDataService } from "./services/SheredData/shered-data.service";
import { UserService } from "./services/User/user.service";
import { RealtimeSocketService } from "./services/realtimeSocket/realtime-socket.service";
import { forkJoin, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { APP_CONST_socketOrigin } from "src/environments/environment";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  appUser = new AppUser();

  translationLoaded = false;

  public onRouteReady = new BehaviorSubject<number>(0);
  public onProfileReady = new BehaviorSubject<number>(0);

  ActiveRouteName: string = "";
  constructor(
    realtimeSocket: RealtimeSocketService,
    private sheredDataService: SheredDataService,
    private userService: UserService,
    router: Router
  ) {
    router.events.subscribe(val => {
      // see also
      if (val instanceof NavigationEnd) {
        this.onRouteReady.next(1);
        this.onRouteReady.complete();
      }
      if (this.ActiveRouteName != router.url) {
        this.ActiveRouteName = router.url;
        window.scrollTo(0, 0);
      }
    });

    forkJoin(this.onRouteReady, this.onProfileReady)
      .pipe(
        map(([first, profileReady]) => {
          return { first, profileReady };
        })
      )
      .subscribe((v: any) => {
        console.log("gggggggggggggggggggggggggggggg");
        this.translationLoaded = true;
        setTimeout(() => {
          realtimeSocket.init(APP_CONST_socketOrigin);
        }, 200);
      });
  }

  ngOnInit(): void {
    this.sheredDataService.currentMessage.subscribe(
      appUser => (this.appUser = appUser)
    );

    if (this.loginInit()) {
      // this.getProfile();
    } else {
      this.appUser.appState = 200;
      this.onProfileReady.next(1);
      this.onProfileReady.complete();
    }
  }

  loginInit() {
    var lsdata: any = localStorage.getItem("user");

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
    // this.userService
    //   .getMyProfile()
    //   .then(res => {
    //     console.log("Usre Logged.");
    //     this.appUser.authUser.userState = 2;
    //     this.appUser.authUser.user = res.data.user;
    //     this.appUser.appData = res.data.appData;
    //     this.appUser.appState = 200;
    //     this.onProfileReady.next(1);
    //     this.onProfileReady.complete();
    //     console.log(res);
    //   })
    //   .catch(() => {
    //     this.appUser.appState = 200;
    //     this.onProfileReady.next(1);
    //     this.onProfileReady.complete();
    //   });
  }
  ngAfterViewInit(): void {}
  SignOut() {
    localStorage.setItem("user", "");
    location.href = "/";
  }
}
