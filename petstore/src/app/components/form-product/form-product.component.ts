import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { type_product } from '../../types/product';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-product',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent {
  productForm: FormGroup;

  constructor(private apiService: ApiService, private router: Router) {
    this.productForm = new FormGroup({
      'nome': new FormControl(null, [Validators.required]),
      'capa': new FormControl(null, [Validators.required, Validators.maxLength(125)]),
      'preco': new FormControl(null, [Validators.required]),
      'avaliacoes': new FormControl(null, [Validators.required]),
      'marca': new FormControl(null, [Validators.required]),

    })
  }

  onSubmit(form: FormGroup) {

    if (this.productForm.valid) {
      this.apiService.addProduct(form.value).subscribe((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: 'Produto adicionado com sucesso.',
          timer: 2500,
          showConfirmButton: false,
        });
        this.productForm.reset()
      })

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
