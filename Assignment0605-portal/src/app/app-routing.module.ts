import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './customers/login/login.component';
import { ProfileComponent } from './customers/profile/profile.component';
import { RegisterComponent } from './customers/register/register.component';


const routes: Routes = [
  {path:"/",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
