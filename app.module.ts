import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {TextFieldModule} from '@angular/cdk/text-field';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';


import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { SlokamModule } from './slokam/slokam.module';
@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,SlokamModule,

    FormsModule,ReactiveFormsModule,HttpClientModule, MatNativeDateModule,MatIconModule,MatButtonModule,MatInputModule,BrowserAnimationsModule,
    TextFieldModule,MatFormFieldModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
