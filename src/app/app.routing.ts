import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';

const appRoutes: Routes = [
  {
    path: "",
    component: SplashComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
