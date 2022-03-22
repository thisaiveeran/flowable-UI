import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {

  public colors: string[] = [
    'yellow',
    'green',
    'blue',
    'ping'
  ];
}
