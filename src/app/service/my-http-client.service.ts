import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {Token} from "../model/token";
import {TokenService} from "./token.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MyHttpClientService {

  token: string = "";
  baseUrl: string = "http://localhost:8080";
  apiBaseUrl: string = "/api/v1";

  constructor(private http: HttpClient, private tokenService: TokenService, private router: Router) {
    this.token = tokenService.getToken();
  }


  get(url: string): any {
    return this.http.get(this.baseUrl + url);
  }






  getPrivate(url: string): any {
    return this.http.get(this.baseUrl + this.apiBaseUrl + url,
      {headers: new HttpHeaders({"Authorization": "Bearer " + this.token})})
      .pipe(
        catchError((error) => {
          if (error.status !== 200) {
            this.tokenService.destroyToken();
            this.router.navigate(['/oauth']).then(r => console.log(r));
          }
          return throwError(error);
        })
      );
  }

  getTokens(code: string): Observable<boolean> {
    return this.http.get<Token>("http://localhost:8080/auth/callback?code=" + code,
      {observe: 'response'}).pipe(map((response: HttpResponse<Token>) => {
      if (response.status == 200 && response.body != null) {
        this.token = response.body.token;
        this.tokenService.saveToken(this.token);
        return true;
      } else {
        return false;
      }
    }));
  }


}
