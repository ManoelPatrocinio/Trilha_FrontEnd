import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cadastro-suinos',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './cadastro-suinos.component.html',
  styleUrl: './cadastro-suinos.component.css'
})
export class CadastroSuinosComponent {
  registerForm: FormGroup= new FormGroup({});

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private rotas: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      'user_email': [null, [Validators.required, Validators.email, Validators.minLength(10)]],
      'user_password': [null, [Validators.required, Validators.minLength(4), Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,}$/)]],

    })
  }
  onSubmit(form:FormGroup) {
    this.authService.loginUser(form.value.user_email, form.value.user_password).subscribe(
      () => { },
      // Lidar com erros
      (error) => {
        console.error('Erro durante o login:', error);
      }
    );
  }
}
