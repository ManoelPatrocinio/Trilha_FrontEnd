import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feb06';
  camposChaves: string[] = []
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(`https://restcountries.com/v3.1/all`).subscribe(
      resData => {
        console.log('API response data: ', resData[0].name );
        this.camposChaves = resData ? Object.keys(resData[0].name) : [];
        this.camposChaves.push('capital', 'region')
        console.log('this.camposChaves: ', this.camposChaves);

      }
    )
  }


}
