import { UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from "../service/token.service";
import {Injectable} from "@angular/core";
import {NotifyService} from "../service/notify.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router, private tokenService: TokenService,private notifyService: NotifyService) {}

  canActivate(): Observable<boolean | UrlTree> {
    if (this.tokenService.tokenExists()) {
      return new Observable<boolean | UrlTree>((observer) => {
        observer.next(true);
      });
    }

    return new Observable<boolean | UrlTree>((observer) => {
      this.notifyService.showMessage('You need to login');
      this.router.navigate(['/oauth']).then(r => console.log(r));
      observer.next(false);
    });
  }
}
