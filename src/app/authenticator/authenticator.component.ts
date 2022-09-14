import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.css']
})
export class AuthenticatorComponent implements OnInit {
  state = AuthenticationCompState.LOGIN;

  constructor(private authService: AuthService, private bottomSheetRef: MatBottomSheetRef) { }

  ngOnInit(): void {
    
  }
  message!: string;
  token!: string;
  error:string = "incorrect username/password";
  onLogin(loginUsername: HTMLInputElement, loginPassword: HTMLInputElement) {
    let loginData = {
      username: loginUsername.value,
      password: loginPassword.value
    }
    this.authService.loginUser(loginData).subscribe(
      (data: any) => {
        this.token = data.token;
        this.bottomSheetRef.dismiss();
      }, (errorRes) => {
        errorRes = this.error;
        alert(errorRes);
      }
    );
  }

  onRegisterClick(
    registerUsername: HTMLInputElement,
    registerEmail: HTMLInputElement,
    registerPassword: HTMLInputElement,
    registerConfirmPassword: HTMLInputElement
  ) {
    let registerData = {
      username: registerUsername.value,
      email: registerEmail.value,
      password: registerPassword.value,
      password2: registerConfirmPassword.value}
    this.authService.createUser(registerData).subscribe(
        response => {
            // alert('User ' + registerData.username + ' has been created!');
            // registerUsername.value = "";
            // registerEmail.value = "";
            // registerPassword.value = "";
            // registerConfirmPassword.value = "";
            this.bottomSheetRef.dismiss();
        }
    );
    
  }

  onResetClick(resetEmail: HTMLInputElement) {
      let payload = {
        email: resetEmail.value,
      }
      //backend set up, need to set up email for reset link
      this.authService.resetUserPassword(payload).subscribe(
          response => {
              alert('Password reset link has been sent to ' + payload.email + 
                    ' Please check your email and reset your password.');
              resetEmail.value = "";
              this.bottomSheetRef.dismiss()
          }
      )
    

  }

  onForgotPasswordClick() {
    this.state = AuthenticationCompState.FORGOT_PASSWORD;
  }

  onCreateAccountClick() {
    this.state = AuthenticationCompState.REGISTER;
  }

  onLoginClick() {
    this.state = AuthenticationCompState.LOGIN;
  }

  isLoginState() {
    return this.state == AuthenticationCompState.LOGIN;
  }

  isRegisterState() {
    return this.state == AuthenticationCompState.REGISTER;
  }

  isForgotPasswordState() {
    return this.state == AuthenticationCompState.FORGOT_PASSWORD;
  }

  getStateText() {
    switch(this.state) {
      case AuthenticationCompState.LOGIN:
        return "Login";
      case AuthenticationCompState.REGISTER:
        return "Register";
      case AuthenticationCompState.FORGOT_PASSWORD:
        return "Forgot Password";
    }
  }
}

export enum AuthenticationCompState {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD
}
