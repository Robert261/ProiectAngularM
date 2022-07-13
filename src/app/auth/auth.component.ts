import { Component } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

    isLogged: boolean = true;

    minLengthPass: number = 15;
  
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required, Validators.minLength(this.minLengthPass)])
    hide = true;
  
    onSwitchMode() {
        this.isLogged = !this.isLogged;
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
        form.reset();
    }

    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'Trebuie sa introduci un email';
      }
  
      return this.email.hasError('email') ? 'Email invalid' : '';
    }
  
    getPasswordMessage() {
      if (this.password.validator?.length)
      {
        return 'Parola trebuie să conțină minimum 15 caractere';
      }

        return;
    }
  }
  