import {Component, OnInit} from '@angular/core';
import {MyHttpClientService} from "../../../service/my-http-client.service";
import {Message} from "../../../model/message";

@Component({
  selector: 'app-public-content',
  templateUrl: './public-content.component.html',
  styleUrl: './public-content.component.css'
})
export class PublicContentComponent implements OnInit {
  content: string = "";

  constructor(private  http: MyHttpClientService) {
  }

  ngOnInit(): void {
    this.http.get("/public").subscribe((data:Message) => {
      this.content = data.message;
    });
  }

}
