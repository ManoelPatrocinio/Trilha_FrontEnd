import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
 // Importe o serviço de autenticação

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.loginUser(this.email, this.password).subscribe(
      () => {},
      // Lidar com erros
      (error) => {
        console.error('Erro durante o login:', error);
      }
    );
  }
}
