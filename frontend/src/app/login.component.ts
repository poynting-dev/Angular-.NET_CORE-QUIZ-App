import { Component } from "@angular/core";
import { Form, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {

    form 

    constructor(protected auth: AuthService, protected fb: FormBuilder) {
        this.form = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

}