import { Component, OnInit } from '@angular/core';
import { MatFormField } from '@angular/material/form-field'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
  hide = true;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onNewPasswordClick(newPassword: HTMLInputElement) {
    let newPasswordData = {
      password: newPassword.value,
    }
    this.authService.newUserPassword(newPasswordData).subscribe(
      response => {
        alert("Password reset")
      }
    )

  }

}
