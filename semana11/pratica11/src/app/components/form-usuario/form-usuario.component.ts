import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './form-usuario.component.html',
  styleUrl: './form-usuario.component.css'
})
export class FormUsuarioComponent {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      'user_fistName': new FormControl(null, [Validators.required, Validators.maxLength(12),Validators.pattern(/^\S{1,12}$/)]),
      'user_fullName': new FormControl(null, [Validators.required, Validators.maxLength(25),this.validateFullName.bind(this)]),
      'user_password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,}$/)]),
      'user_email': new FormControl(null, [Validators.required, Validators.email, Validators.minLength(10)]),
      'user_phone': new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(14),Validators.pattern(/^\(\d{2}\)\d{5}-\d{4}$/)]),
      'user_address': new FormControl(null, [Validators.required, this.validateFullName.bind(this)]),
      'user_birthday': new FormControl(null, [Validators.required]),
      'user_gender': new FormControl(null, [Validators.required]),
      'user_profession': new FormControl(null, [Validators.required]),
    })
  }

  // personality validators
  validateFullName(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value && value.trim().split(' ').length < 2) {
      return { invalidFullName: true };
    }
    return null;
  } 

  //end - personality validators

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Formulário enviado com sucesso!', this.userForm.value);
    } else {
      console.error('Por favor, corrija os erros no formulário.');
    }
  }

}
