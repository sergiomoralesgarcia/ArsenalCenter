import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formReg: FormGroup;

  constructor(
    private userService: UserService
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.register(this.formReg.value)
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error));
  }

  hasFormError(error: string){
    return this.formReg?.errors && Object.keys(this.formReg.errors).filter(e=>e==error).length==1;
  }
  
  errorsToArray(errors: {}){
    if(errors && !('required' in errors))
      return [Object.keys(errors)[0]];
    else
      return [];
  } 

}
