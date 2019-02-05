import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormComponent } from './profile-form/profile-form.component';
import {RoutingModule} from './routing/routing.module';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    StrikethroughDirective,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

