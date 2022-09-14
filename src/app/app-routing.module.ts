import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewPasswordComponent } from './new-password/new-password.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: '**', component: HomeComponent},
    {path: 'password_reset/<str:encoded_pk>/<str:token>/', component: NewPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
