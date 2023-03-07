import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormComponent } from './form/form.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { AuthGuard } from './shared/auth.guard';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'registration-list', component: RegistrationListComponent, canActivate:[AuthGuard]},
  { path: '', redirectTo:'form',pathMatch:'full' },
  { path: 'admin-login', component: AdminLoginComponent},
  { path: 'weather' , component: WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
