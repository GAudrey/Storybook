import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlashMessageComponent } from './flash-message/flash-message.component';
import { ButtonComponent } from './button/button.component';
import { ExoButtonComponent } from './exo-button/exo-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashMessageComponent,
    ButtonComponent,
    ExoButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
