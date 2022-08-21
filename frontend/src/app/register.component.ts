import { Component } from "@angular/core";
import { Form, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
    templateUrl: './register.component.html'
})

export class RegisterComponent {

    form 

    constructor(protected auth: AuthService, protected fb: FormBuilder) {
        this.form = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

}