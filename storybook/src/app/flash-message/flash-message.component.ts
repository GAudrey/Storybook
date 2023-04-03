import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.css']
})
export class FlashMessageComponent {
  @Input("heading") declare title: string;
  @Input("msg") declare msg: string;
  @Input("type") declare type: string;

  get heading(){
    return this.title || "Message";
  }

  getColor(type:string){
    return type ? type : "message";
  }
}
