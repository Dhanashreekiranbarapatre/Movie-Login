import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddComponent } from './add/add.component';

export const routes: Routes = [
    {path:'',component:LoginPageComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'signup',component:SignupPageComponent},
    {path:'movielist',component:MovieListComponent},
    {path:'add',component:AddComponent}
];
