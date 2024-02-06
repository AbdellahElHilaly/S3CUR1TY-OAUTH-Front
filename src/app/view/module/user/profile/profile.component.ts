import {Component, OnInit} from '@angular/core';
import {UserInfo} from "../../../../model/user-info";
import {MyHttpClientService} from "../../../../service/my-http-client.service";
import {Router} from "@angular/router";
import {TokenService} from "../../../../service/token.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  userInfo?: any;
  isLogged: boolean = false;

  constructor(private http: MyHttpClientService, private router: Router,private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.http.getPrivate("/user/profile").subscribe((data: UserInfo) => {
      this.userInfo = data;
      this.isLogged = true;
      this.router.navigate(['/profile']).then(r => console.log(r));
    });
  }

}
