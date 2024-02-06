import {Component, OnInit} from '@angular/core';
import {MyHttpClientService} from "./service/my-http-client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenService} from "./service/token.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'S3CUR1TY-Front';
  notificationMessage: string | undefined;

  constructor(private http: MyHttpClientService, private  route : ActivatedRoute, private router: Router,private tokenService: TokenService) {
  }

  ngOnInit() {
  }


}
