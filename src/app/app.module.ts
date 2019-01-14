import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./pages/home/home.component";
import { SheredDataService } from "./services/SheredData/shered-data.service";
import { UserService } from "./services/User/user.service";
import { routingModule } from "./app.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatIconModule,
  MatSidenavModule,
  MatRippleModule,
  MatListModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatSnackBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatRadioModule,
  MatChipsModule
} from "@angular/material";

import { RealtimeSocketService } from "./services/realtimeSocket/realtime-socket.service";
import { TickerService } from "./services/ticker/ticker.service";
import { NgcmModalComponent } from "./components/shared/custom-model-com/custom-model-com.component";
import { NgcmModalService } from "./components/shared/custom-model-com/custom-model-com.service";
import { AdminDashBoardComponent } from "./pages/admin/admin-dash-board/admin-dash-board.component";
import { MySnackBarService } from "./services/mySnackBar/my-snack-bar.service";
import { AdminHomeComponent } from "./pages/admin/admin-home/admin-home.component";
import { CreateMapRouteComponent } from './pages/admin/create-map-route/create-map-route.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgcmModalComponent,
    AdminDashBoardComponent,
    AdminHomeComponent,
    CreateMapRouteComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    routingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatIconModule,
    MatSidenavModule,
    MatRippleModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatRadioModule,
    MatChipsModule
  ],
  providers: [
    HttpClientModule,
    SheredDataService,
    MySnackBarService,
    NgcmModalService,
    TickerService,
    UserService,
    RealtimeSocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
