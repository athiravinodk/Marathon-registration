import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { HeaderComponent } from './header/header.component';
import { UserService } from './shared/users.service';
import { FormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthService } from './shared/auth.service';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RegistrationListComponent,
    HeaderComponent,
    AdminLoginComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
