import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { NgFor, NgIf } from '@angular/common';
import { type_suino_peso } from '../../types/type_suino';

@Component({
  selector: 'app-register-peso',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf,NgFor,RouterLink],
  templateUrl: './register-peso.component.html',
  styleUrl: './register-peso.component.css'
})
export class RegisterPesoComponent {

}
