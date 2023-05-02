import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterHomeComponent } from './components/footer-home/footer-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ActualizarComponent } from './pages/admin/actualizar/actualizar.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AgregarComponent } from './pages/admin/agregar/agregar.component';
import { BienvenidoComponent } from './pages/admin/bienvenido/bienvenido.component';
import { ProductsAdminComponent } from './pages/admin/products-admin/products-admin.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { BienvenidoUserComponent } from './pages/user/bienvenido-user/bienvenido-user.component';
import { ProductsUserComponent } from './pages/user/products-user/products-user.component';
import { SidebarUserComponent } from './pages/user/sidebar-user/sidebar-user.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import {MatListModule} from '@angular/material/list';
import { authInterceptorProviders } from './services/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    FooterHomeComponent,
    NavbarComponent,
    SliderComponent,
    HomeComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    ProfileComponent,
    ActualizarComponent,
    AdminDashboardComponent,
    AgregarComponent,
    BienvenidoComponent,
    ProductsAdminComponent,
    SidebarComponent,
    BienvenidoUserComponent,
    ProductsUserComponent,
    SidebarUserComponent,
    UserDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    MatToolbarModule,
    MatMenuModule,
    NgbCarousel,
    MatListModule,
    HttpClientModule,
    NgbModule,
    MatIconModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
