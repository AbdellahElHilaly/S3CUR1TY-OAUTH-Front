import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {MyHttpClientService} from '../service/my-http-client.service';
import {RoleService} from '../service/role.service';
import {NotifyService} from "../service/notify.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorityGuard {

  constructor(private rolesService: RoleService, private router: Router, private http: MyHttpClientService
  ,private notifyService: NotifyService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    const requiredRoles: string[] = route.data['requiredRoles'];
    const requiredPermissions: string[] = route.data['requiredPermissions'];

    return this.http.getPrivate("/user/authorities").pipe(
      map((result: string[]) => {
        if (this.rolesService.hasAuthority(result, requiredRoles, requiredPermissions)) {
          return true;
        } else {
          this.notifyService.showMessage('You do not have the required permissions');
          return false;
        }
      }),
      catchError(() => {
        console.error('Error fetching user authorities');
        return of(false);
      })
    );
  }
}
