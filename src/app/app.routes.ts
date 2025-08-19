import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then( m => m.SignupPage)
  },{
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full',
  },
  {
    path: 'otp',
    loadComponent: () => import('./otp/otp.page').then( m => m.OtpPage)
  },
  {
    path: 'mpin',
    loadComponent: () => import('./mpin/mpin.page').then( m => m.MpinPage)
  },
  {
    path: 'details',
    loadComponent: () => import('./details/details.page').then( m => m.DetailsPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
];
