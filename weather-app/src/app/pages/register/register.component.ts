import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegister } from 'src/app/models/userRegister.model';
import { comparePassword } from '../utils/customValidators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public userRegisterForm: FormGroup
  public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.userRegisterForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.maxLength(30)]],
      email: ['', [Validators.required,  Validators.pattern(/[^ @]*@[^ @]*/)]],
      password: ['', [Validators.required,  Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
      confirmPassword: ['', [Validators.required,  Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
    },
    {
      validator: comparePassword('password', 'confirmPassword')
    })
    this.submitted = false
  }

  onSubmit() {
      this.submitted = true
      if (this.userRegisterForm.valid) {
        const newUser: UserRegister = {
          name: this.userRegisterForm.get('name')?.value,
          lastName: this.userRegisterForm.get('lastName')?.value,
          email: this.userRegisterForm.get('email')?.value,
          password: this.userRegisterForm.get('password')?.value,
          confirmPassword: this.userRegisterForm.get('confirmPassword')?.value
        }
        console.log(newUser)
          //Reseteamos los campos
          this.userRegisterForm.reset()
          this.submitted = false 
      }
  }

}


