import { UserLogin } from './../../models/userRegister.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { comparePassword } from '../../pages/utils/customValidators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //Inicializacion del formulario
  public userLoginForm: FormGroup;
  public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }
  //Inicialización del form builder
  initForm(): void {
    this.userLoginForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20),  Validators.minLength(6),]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
          Validators.minLength(6),
          Validators.maxLength(25),
        ],
      ],
    }
    );
    this.submitted = false
  }

  onSubmit() {
    this.submitted = true
    if(this.userLoginForm.valid) {
      const user: UserLogin = {
        name: this.userLoginForm.get('name')?.value,
        password: this.userLoginForm.get('password')?.value
      }
      console.log(user)
       //Reseteamos los campos
      this.userLoginForm.reset()
      this.submitted = false 
    }
  }
}


