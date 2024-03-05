import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService,AuthService]
})
export class AppComponent {
  title = 'myStore';
}
