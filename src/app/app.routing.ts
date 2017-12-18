import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { CategoriesComponent } from './categories/categories.component';

const appRoutes: Routes = [
  {
    path: "",
    component: SplashComponent
  },
  {
    path: "clothing",
    component: CategoriesComponent
  },
  {
    path: "shoes-accessories",
    component: CategoriesComponent
  },
  {
    path: "furniture",
    component: CategoriesComponent
  },
  {
    path: "grooming",
    component: CategoriesComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
