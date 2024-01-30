import {Component, OnInit} from '@angular/core';
import {MyHttpClientService} from "./my-http-client.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'S3CUR1TY-Front';

  componentToShow: string = "public";

  constructor(private http: MyHttpClientService, private  route : ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(params['code'] != undefined){
        this.http.getTokens(params['code']).subscribe(result => {
          if(result){
            this.componentToShow = "private";
          }else {
            this.componentToShow = "public";
          }
        });
      }
    });
  }


}
