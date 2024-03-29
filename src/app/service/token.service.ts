import {Injectable} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private cookieService: CookieService) {
  }


  getToken(): string {
    return this.cookieService.get("token");
  }

  saveToken(token: string) {
    this.cookieService.set("token", token);
  }

  destroyToken() {
    this.cookieService.delete("token");
  }

  tokenExists() {
    return this.cookieService.check("token");
  }
}
