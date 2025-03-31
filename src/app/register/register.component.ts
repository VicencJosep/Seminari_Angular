import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  username = '';
  password = '';
  occupation = '';

  constructor(private http: HttpClient) {}

  register() {
    if (!this.username || !this.password || !this.occupation) {
      alert('Por favor, complete todos los campos');
      return;
    }

    const workerData = {
      username: this.username,
      password: this.password,
      occupation: this.occupation,
    };

    console.log("workerdata", workerData);


    this.http.post('http://localhost:4000/api/workers', workerData).subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response);
        alert('Registro exitoso');
      },
      error: (error) => {
        console.error('Error al registrar:', error);
        alert('Hubo un error al registrar. Inténtelo de nuevo.');
      },
    });
  }
}
