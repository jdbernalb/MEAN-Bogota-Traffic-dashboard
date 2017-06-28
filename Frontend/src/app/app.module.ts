import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { MyFirstCmpntComponent } from './my-first-cmpnt/my-first-cmpnt.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { StreetService } from "app/street.service";
@NgModule({
  declarations: [
    AppComponent,
    MyFirstCmpntComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule.forRoot(), 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5_SwR4FePB1SzZ7Mo2wsb_zmpb-vEW1Y'
    })
  ],
  providers: [StreetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
