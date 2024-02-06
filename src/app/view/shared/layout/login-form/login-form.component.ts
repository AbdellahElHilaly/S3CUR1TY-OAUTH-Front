import {Component, OnInit} from '@angular/core';
import {MyHttpClientService} from "../../../../service/my-http-client.service";
import {TokenService} from "../../../../service/token.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {


  url: string = "";
  constructor(private  route : ActivatedRoute, private router: Router, private http: MyHttpClientService, private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.http.get("/auth/url").subscribe((data: any) => {
      this.url = data.url;
    });

    if (this.tokenService.tokenExists()) {
      this.router.navigate(['/private']).then(r => console.log(r));
    } else {
      this.goToOauth();
    }
  }



  private goToOauth() {
    this.route.queryParams.subscribe(params => {
      if(params['code'] != undefined){
        this.http.getTokens(params['code']).subscribe(result => {
          if(result){
            this.router.navigate(['/profile']).then(r => console.log(r));
          }else {
            alert("Error");
          }
        });
      }
    });
  }

  tokenExists(): boolean {
    return this.tokenService.tokenExists();
  }

  openUrlInNewWindow(): void {
    window.open(this.url, '_blank');
  }

  openUrlInSameWindow(): void {
    window.location.href = this.url;
  }

}
