import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/User/user.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  ngAfterViewInit(): void {}

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    console.log("ngOnInit");
  }

  // onSearch() {
  //  // this.router.navigate(['/auction'], { queryParams: { searchQuery: btoa(JSON.stringify(this.searchQuery)) } });
  // }
}
