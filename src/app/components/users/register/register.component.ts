import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public email: string = '';
  public password: string = '';

  uploadPercent:Observable<number>;
  urlImage:Observable<string>;


  constructor(private router: Router, private authService: AuthService, private angularStorage: AngularFireStorage) { }

  ngOnInit() {
  }

  onUpload(e) {
    console.log('subir ', e.target.files[0]);
//guardar una imagen en firebase
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `upload/profile_id${id}`;
    const ref = this.angularStorage.ref(filePath);
    const task = this.angularStorage.upload(filePath, file);
//mostrar el porcentaje
    this.uploadPercent=task.percentageChanges();
task.snapshotChanges().pipe(finalize(()=> this.urlImage =ref.getDownloadURL())).subscribe();


  }

  onAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.router.navigate(['admin/list-books']);
      }).catch(err => console.log('err ', err.message));
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

  onLoginRedirect(): void {
    this.router.navigate(['admin/list-books']);
  }

}
