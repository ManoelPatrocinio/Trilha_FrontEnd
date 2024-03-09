import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register-peso',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './register-peso.component.html',
  styleUrl: './register-peso.component.css'
})
export class RegisterPesoComponent {
  SuinoPesoForm: FormGroup= new FormGroup({});
  suinoId:string = ""

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private rotas: Router,private rota: ActivatedRoute) { }

  ngOnInit(): void {
    this.suinoId = this.rota.snapshot.params['id']
    this.SuinoPesoForm = this.formBuilder.group({
      'DataPeso': [null, [Validators.required]],
      'peso': [null, [Validators.required]],
     

    })
  }
  onSubmit(form:FormGroup) {
    const DataPeso = {
      ...form.value,
      suidoBrinco: this.suinoId
    }
    this.apiService.cadastroPesoSuino(DataPeso).subscribe(responseData => {
      console.log(responseData);
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Peso adicionado com sucesso.',
        timer:2500,
        showConfirmButton: false,
      });
      this.SuinoPesoForm.reset()
    });
  }
}
