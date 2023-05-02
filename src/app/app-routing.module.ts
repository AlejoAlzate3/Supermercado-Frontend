import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { BienvenidoComponent } from './pages/admin/bienvenido/bienvenido.component';
import { AdminGuard } from './services/admin.guard';
import { ProductsAdminComponent } from './pages/admin/products-admin/products-admin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { UserGuard } from './services/user.guard';
import { BienvenidoUserComponent } from './pages/user/bienvenido-user/bienvenido-user.component';
import { ProductsUserComponent } from './pages/user/products-user/products-user.component';
import { ProductsComponent } from './pages/products/products.component';
import { AgregarComponent } from './pages/admin/agregar/agregar.component';
import { ActualizarComponent } from './pages/admin/actualizar/actualizar.component';


const routes: Routes = [
  {
    path: 'home',
    component : HomeComponent,
    pathMatch: 'full'
  },
  {
    title: 'Productos',
    path: 'products',
    component : ProductsComponent,
  },
  {
    title: 'Detalles del Producto',
    path: 'products-details/:id',
    component : ProductsDetailsComponent,
  },
  {
    title: 'Iniciar Sesión',
    path: 'login',
    component : LoginComponent,
    pathMatch: 'full'
  },
  {
    title: 'Registrarse',
    path: 'signup',
    component : SignupComponent,
    pathMatch: 'full'
  },
  {
    title: 'Administrador',
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        title: 'Bienvenido',
        path: '',
        component: BienvenidoComponent
      },
      {
        title: 'Gestion Productos',
        path: 'products-admin',
        component: ProductsAdminComponent
      },
      {
        title: 'Agregar Producto',
        path: 'agregar',
        component: AgregarComponent,
      },
      {
        title: 'Editar Producto',
        path: 'actualizar/:id',
        component: ActualizarComponent
      },
      {
        title: 'Perfil',
        path: 'profile',
        component: ProfileComponent
      },
    ]
  },
  {
    title: 'Usuario',
    path: 'user',
    component: UserDashboardComponent,
    canActivate: [UserGuard],
    children: [
      {
        title: 'Bienvenido',
        path: '',
        component: BienvenidoUserComponent
      },
      {
        title: 'Perfil',
        path: 'profile',
        component: ProfileComponent
      },
      {
        title: 'Productos',
        path: 'products-user',
        component: ProductsUserComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
