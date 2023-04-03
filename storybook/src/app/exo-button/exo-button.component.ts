import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exo-button',
  templateUrl: './exo-button.component.html',
  styleUrls: ['./exo-button.component.css']
})
export class ExoButtonComponent {
  @Input("theme") declare theme: string;
  @Input("disabled") declare disabled: string;
  @Input("radius") declare radius: number;
  @Input("shadowDistance") declare shadowDistance: number;
  @Input("shadowColor") declare shadowColor: string;
  @Input("dark") declare darkText: boolean;
  @Input("bgc") declare color: string;

  getColor(theme: string) {
    return theme ? theme : "default";
  }

  getBoxShadow(sD: number, sC: string) {
    return `0 ${sD}px ${sD}px 0 ${sC}`;
  }
}
