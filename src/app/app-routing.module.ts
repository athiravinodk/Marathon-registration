import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'registration-list', component: RegistrationListComponent },
  { path: '', redirectTo:'form',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
