import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBookComponent } from './components/admin/list-book/list-book.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { Pages404Component } from './components/pages404/pages404.component';

//firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AngularFireAuth } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    DetailsBookComponent,
    HeroComponent,
    HomeComponent,
    ModalComponent,
    NavbarComponent,
    OffersComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    Pages404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
