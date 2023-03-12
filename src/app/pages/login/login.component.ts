import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserService } from '../../core/services/user.service';
import { RegisterComponent } from '../register/register.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formLogin: FormGroup;
form: any;

    constructor(
        private userService: UserService,
        private router: Router,
        private modalCtrl:ModalController,
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

    async register(){
        const modal = await this.modalCtrl.create({
          component:RegisterComponent,
          cssClass:"modal-full-right-side"
        });
    
        modal.onDidDismiss().then(async(response)=>{
          try {
            if(response.role=='ok'){
              await this.userService.register(response.data);
              this.router.navigate(['folder/Home'], {replaceUrl:true});
            }
            
          } catch (error) {
            console.log(error);
      
          }
        });
        modal.present();
      }
}
