import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";
import { AdminHomeComponent } from "./pages/admin/admin-home/admin-home.component";
import { AdminDashBoardComponent } from "./pages/admin/admin-dash-board/admin-dash-board.component";
import { CreateMapRouteComponent } from "./pages/admin/create-map-route/create-map-route.component";
const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "admin",
    component: AdminHomeComponent,
    children: [
      { path: "", component: CreateMapRouteComponent }
      // { path: "", component: AdminDashBoardComponent }
    ]
  }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
