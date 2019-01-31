import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule ,FormBuilder,Validator ,FormArray} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioComponent } from './radio/radio.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { GetRadioComponent } from './get-radio/get-radio.component';
import { GetTextComponent } from './get-text/get-text.component';

@NgModule({
  declarations: [
    AppComponent,
    RadioComponent,
    TextAreaComponent,
    GetRadioComponent,
    GetTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
