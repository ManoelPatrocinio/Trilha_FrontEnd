import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-form-atendimento',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './form-atendimento.component.html',
  styleUrl: './form-atendimento.component.css'
})
export class FormAtendimentoComponent {
  formAtendimento: FormGroup;

  constructor(private apiService: ApiService) {
    this.formAtendimento = new FormGroup({
      'user_fullName': new FormControl(null, [Validators.required, Validators.maxLength(90), this.validateFullName.bind(this)]),
      'user_email': new FormControl(null, [Validators.required, Validators.email, Validators.minLength(10)]),
      'user_phone': new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(14), Validators.pattern(/^\(\d{2}\)\d{5}-\d{4}$/)]),
      'user_address': new FormControl(null, [Validators.required, this.validateFullName.bind(this)]),
      'atend_type_pet': new FormControl(null, [Validators.required]),
      'atend_name_pet': new FormControl(null, [Validators.required]),
      'atend_age_pet': new FormControl(null, [Validators.required]),
      'atend_date': new FormControl(null, [Validators.required]),
      'atend_hour': new FormControl(null, [Validators.required]),
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
    if (this.formAtendimento.valid) {
      // Swal.fire({
      //   title: 'Sucesso!',
      //   icon: 'success',
      //   showConfirmButton: false,
      //   timer: 2000
      // })

      const jsonUserData = {
  
        user_fullName: this.formAtendimento.get('user_fullName')?.value,
        user_email: this.formAtendimento.get('user_email')?.value,
        user_phone: this.formAtendimento.get('user_phone')?.value,
        user_address: this.formAtendimento.get('user_address')?.value,
        atend_type_pet: this.formAtendimento.get('atend_type_pet')?.value,
        atend_name_pet: this.formAtendimento.get('atend_name_pet')?.value,
        atend_age_pet: this.formAtendimento.get('atend_age_pet')?.value,
        atend_date: this.formAtendimento.get('atend_date')?.value,
        atend_hour: this.formAtendimento.get('atend_hour')?.value,
      };

      this.apiService.addAtendimento(jsonUserData);
      this.formAtendimento.reset();

    } else {
      Swal.fire({
        title: 'Error !',
        icon: 'error',
        text: 'Oppss... Houve um error ao enviar o formulário, verifique os  campos e tente novamente.',
        showConfirmButton: true,

      })
      console.error('Por favor, corrija os erros no formulário.');
    }
  }
}
