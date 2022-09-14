import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_url = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  createUser(userData: any): Observable<any|null> {
      return this.http.post(`${this.api_url}/register/`, userData)
  }

  loginUser(loginData: any) {
      return this.http.post(`${this.api_url}/login/`, loginData)
  }

  resetUserPassword(resetData: any) {
      return this.http.post(`${this.api_url}/request_password_reset/`, resetData, httpOptions)
  }

  newUserPassword(newData: any) {
      return this.http.patch(`${this.api_url}/password_reset/<str:encoded_pk>/<str:token>/`, newData, httpOptions)
  }


}
