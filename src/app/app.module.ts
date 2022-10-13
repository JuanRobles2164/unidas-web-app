import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { LoginFormComponentComponent } from './login-form-component/login-form-component.component';
import { RegisterFormComponentComponent } from './register-form-component/register-form-component.component';
import { SearchBarFormComponentComponent } from './search-bar-form-component/search-bar-form-component.component';
import { CheckboxListFormComponentComponent } from './checkbox-list-form-component/checkbox-list-form-component.component';
import { CalendarRangeFormComponentComponent } from './calendar-range-form-component/calendar-range-form-component.component';
import { ListViewElementsFormComponentComponent } from './list-view-elements-form-component/list-view-elements-form-component.component';
import { DetailsComponentComponent } from './details-component/details-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponentComponent,
    RegisterFormComponentComponent,
    SearchBarFormComponentComponent,
    CheckboxListFormComponentComponent,
    CalendarRangeFormComponentComponent,
    ListViewElementsFormComponentComponent,
    DetailsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
