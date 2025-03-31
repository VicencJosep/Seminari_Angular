import { Routes } from '@angular/router';
import {RegisterComponent} from './register/register.component';

export const routes: Routes = [
    {path: 'register-component', component: RegisterComponent},
    { path: '',   redirectTo: '/user-component', pathMatch: 'full' },
];
