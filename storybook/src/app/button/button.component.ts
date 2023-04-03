import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input("theme") declare theme: string;
  @Input("disabled") declare disabled: string;

  getColor(theme: string) {
    return theme ? theme : "default";
  }
}
