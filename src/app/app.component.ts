import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ApiService } from './services/api.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule, NavbarComponent,CarouselComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService, AuthService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class AppComponent {
  title = 'petstore';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.autoLogin();
  }
}
