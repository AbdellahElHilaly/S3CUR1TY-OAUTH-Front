import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './view/shared/layout/login-form/login-form.component';
import {PublicContentComponent} from "./view/pages/public-content/public-content.component";
import {NavigationComponent} from "./view/shared/layout/navigation/navigation.component";
import {GuestComponent} from "./view/module/user/guest/guest.component";
import {AdminComponent} from "./view/module/user/admin/admin.component";
import {SuperAdminComponent} from "./view/module/user/super-admin/super-admin.component";
import {NotFoundComponent} from "./view/pages/not-found/not-found.component";
import {SideBarComponent} from "./view/shared/layout/side-bar/side-bar.component";
import {ProfileComponent} from "./view/module/user/profile/profile.component";
import {MatIconModule} from "@angular/material/icon";
import {MatFabButton} from "@angular/material/button";
import { NotifyComponent } from './view/shared/layout/notify/notify.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PublicContentComponent,
    NavigationComponent,
    GuestComponent,
    AdminComponent,
    SuperAdminComponent,
    NotFoundComponent,
    SideBarComponent,
    ProfileComponent,
    NotifyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    MatIconModule,
    MatFabButton

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
