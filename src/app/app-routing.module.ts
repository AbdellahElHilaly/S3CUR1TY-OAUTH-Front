import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {PublicContentComponent} from "./view/pages/public-content/public-content.component";
import {GuestComponent} from "./view/module/user/guest/guest.component";
import {AdminComponent} from "./view/module/user/admin/admin.component";
import {SuperAdminComponent} from "./view/module/user/super-admin/super-admin.component";
import {ProfileComponent} from "./view/module/user/profile/profile.component";
import {LoginFormComponent} from "./view/shared/layout/login-form/login-form.component";
import {AuthGuard} from "./guard/auth.guard";
import {AuthorityGuard} from "./guard/rol.guard";


const routes: Routes = [
  { path: 'public', component: PublicContentComponent },
  { path: 'guest', component: GuestComponent },
  { path: 'admin', component: AdminComponent },

{
  path: 'super-admin',
  component: SuperAdminComponent,
  canActivate: [ AuthGuard, AuthorityGuard],
  data: { requiredRoles: ['ROLE_SUPER_ADMIN'], requiredPermissions: [] }
},

  { path: 'profile', component: ProfileComponent ,canActivate: [AuthGuard]},
  { path: 'oauth', component: LoginFormComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
