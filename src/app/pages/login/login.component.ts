import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formLogin: FormGroup;

    constructor(
        private userService: UserService,
        private router: Router
    ) {
        this.formLogin = new FormGroup({
            email: new FormControl(),
            password: new FormControl()
        })
    }

    ngOnInit(): void {
    }

    onSubmit() {
        this.userService.login(this.formLogin.value)
            .then((response: any) => {
                console.log(response);
                this.router.navigate(['/home']);
            })
            .catch((error: any) => console.log(error));
    }

    onClick() {
        this.userService.loginWithGoogle()
            .then((response: any) => {
                console.log(response);
                this.router.navigate(['/home']);
            })
            .catch((error: any) => console.log(error))
    }

}
