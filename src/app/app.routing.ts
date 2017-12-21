import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

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
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "product/:id",
    component: ProductsComponent
  },
  {
    path: "user/:id",
    component: UserComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
