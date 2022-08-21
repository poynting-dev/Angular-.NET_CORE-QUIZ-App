import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http"
import { Router } from "@angular/router";

export interface AuthenticatedResponse{
    token: string;
  }

@Injectable()
export class AuthService {

    constructor(protected http: HttpClient, protected router: Router) {}

    get isAuthenticated() {
        return !!localStorage.getItem('token')
    }

    register(credentials) {
        console.log("HELLO");
        this.http.post<AuthenticatedResponse>("http://localhost:5233/api/Account", credentials, {
        headers: new HttpHeaders({ "Content-Type": "application/json"})
      })
      .subscribe({
        next: (response: AuthenticatedResponse) => {
            this.authenticate(response) 
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })
    }

    login(credentials) {
        this.http.post<AuthenticatedResponse>("http://localhost:5233/api/Account/login", credentials, {
        headers: new HttpHeaders({ "Content-Type": "application/json"})
      })
      .subscribe({
        next: (response: AuthenticatedResponse) => {
            this.authenticate(response)
          },
          error: (err: HttpErrorResponse) => console.log(err)
      })
    }

    authenticate(response) {
        const token = response.token;
        console.log(token);
        localStorage.setItem("token", token); 
        this.router.navigate(['/']);
    }

    logout() {
        localStorage.removeItem('token');
    }
}