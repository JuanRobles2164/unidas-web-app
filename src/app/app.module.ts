import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponentComponent } from './login-form-component/login-form-component.component';
import { RegisterFormComponentComponent } from './register-form-component/register-form-component.component';
import { SearchBarFormComponentComponent } from './search-bar-form-component/search-bar-form-component.component';
import { CheckboxListFormComponentComponent } from './checkbox-list-form-component/checkbox-list-form-component.component';
import { CalendarRangeFormComponentComponent } from './calendar-range-form-component/calendar-range-form-component.component';
import { ListViewElementsFormComponentComponent } from './list-view-elements-form-component/list-view-elements-form-component.component';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BackgroundComponent } from './background/background.component';
import { PageContentComponent } from './page-content/page-content.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { DataGatheringViewComponent } from './data-gathering-view/data-gathering-view.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { AddressFormComponentComponent } from './address-form-component/address-form-component.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes : Routes = [
  {path: '', component: LoginFormComponentComponent},
  {path: 'register', component: RegisterFormComponentComponent},
  {path: 'data_gathering', component: DataGatheringViewComponent},
  {path: 'list', component: ListViewComponent},
  {path: 'details', component: DetailsViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponentComponent,
    RegisterFormComponentComponent,
    SearchBarFormComponentComponent,
    CheckboxListFormComponentComponent,
    CalendarRangeFormComponentComponent,
    ListViewElementsFormComponentComponent,
    DetailsComponentComponent,
    TopBarComponent,
    BackgroundComponent,
    PageContentComponent,
    LoginFormComponent,
    RegisterViewComponent,
    ListViewComponent,
    DataGatheringViewComponent,
    DetailsViewComponent,
    AddressFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
