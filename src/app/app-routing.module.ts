import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
import { JuniorsComponent } from './juniors/juniors.component';
import { KidsComponent } from './kids/kids.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { SeniorsComponent } from './seniors/seniors.component';

const routes: Routes = [
{path: 'home' , component: HomeComponent},
{path: 'about' , component: AboutComponent},
{path: 'login' , component: LoginComponent},
{path: 'signup' , component: RegisterComponent},
{path: 'kids' , component: KidsComponent },
{path: 'seniors' , component: SeniorsComponent},
{path: 'juniors' , component: JuniorsComponent},
{path: 'contact' , component: ContactComponent},
{path: 'forget' , component: ForgetpasswordComponent},
{path: '' , component: HomeComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
