import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string = '';
  public password: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }

  onLogin(): void {
    this.authService.loginEmailUser(this.email, this.password)
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('error ', err.message));
  }


  onLoginGoogle(): void {
    
    this.authService.loginGoogleUser()
      .then((res) => {
        this.onLoginRedirect();

      }).catch(err => console.log('error ', err.message));


  }
  onLoginFacebook(): void {
    this.authService.loginFacebookUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('error ', err.message));
  }

  onLogout() {
    this.authService.logoutUser();
  }

  ngOnInit() {
  }

  onLoginRedirect(): void {
    this.router.navigate(['admin/list-books']);
  }

}
