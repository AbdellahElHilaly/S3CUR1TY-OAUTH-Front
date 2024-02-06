import {Component, Input} from '@angular/core';
import {NotifyService} from "../../../../service/notify.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrl: './notify.component.css'
})
export class NotifyComponent {

  message$: Observable<string | undefined>;

  constructor(private notifyService: NotifyService) {
    this.message$ = this.notifyService.message$;
  }
}
