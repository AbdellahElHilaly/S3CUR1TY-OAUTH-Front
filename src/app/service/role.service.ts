import {Injectable} from '@angular/core';
import {NotifyService} from "./notify.service";


@Injectable({
  providedIn: 'root'
})

export class RoleService {




  hasAuthority(authorities: Array<String>, requiredRoles: Array<String>, requiredPermissions: Array<String>): boolean {
    if (requiredRoles.length > 0) {
      return this.hasRole(this.extractRoles(authorities), requiredRoles);
    } else {
      return this.hasPermission(this.extractPermissions(authorities), requiredPermissions);
    }
  }

  extractPermissions(authorities: Array<String>): Array<String> {
    return authorities.filter(auth => !auth.startsWith('ROLE_'));
  }

  extractRoles(authorities: Array<String>): Array<String> {
    return authorities.filter(auth => auth.startsWith('ROLE_'));
  }


  private hasRole(roles: Array<String>, requiredRoles: Array<String>) {
    return  requiredRoles.some(role => roles.includes(role));
  }

  private hasPermission(permissions: Array<String>, requiredPermissions: Array<String>) {
    return  requiredPermissions.some(permission => permissions.includes(permission));
  }


}
