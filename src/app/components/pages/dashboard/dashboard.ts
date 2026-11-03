import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Component({
  imports: [
    CommonModule,
  ],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {

  //Inicializar o HttpClient
  private http = inject(HttpClient);

  //quantidade de clientes cadastrados (null enquanto carrega)
  quantidadeClientes = signal<number | null>(null);

  //executa ao abrir o dashboard
  ngOnInit() {
    //Requisição GET para buscar os clientes e contar
    this.http.get<any[]>(environment.apiUrl + '/clientes')
      .subscribe((response) => {
        this.quantidadeClientes.set(response.length);
      });
  }

}