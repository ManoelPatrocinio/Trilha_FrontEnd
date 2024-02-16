import { Component } from '@angular/core';
import { FormUsuarioComponent } from '../../components/form-usuario/form-usuario.component';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [FormUsuarioComponent],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {

}
