import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-suino',
  templateUrl: './cadastro-suino.component.html',
  styleUrls: ['./cadastro-suino.component.css']
})
export class CadastroSuinoComponent implements OnInit {
  cadastroForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      brincoAnimal: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      brincoPai: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      brincoMae: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      dataNascimento: ['', Validators.required],
      dataSaida: ['', Validators.required],
      status: ['Ativo', Validators.required],
      sexo: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value);
      //  enviar os dados para o backend ou fazer o que for necessário com eles
    } else {
      alert('Por favor, preencha o formulário corretamente.');
    }
  }
}


