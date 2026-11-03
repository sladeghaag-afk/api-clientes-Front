import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment.development';

@Component({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  selector: 'app-cadastro-clientes',
  styleUrl: './cadastro-clientes.css',
  templateUrl: './cadastro-clientes.html',
})
export class CadastroClientes {

  //Inicializar o HttpClient
    private http = inject(HttpClient);

   //formulario reativo para capturar dados do cliente

   formCadastro = new FormGroup({
   nome : new FormControl('',[Validators.required, Validators.minLength(6)]),
   cpf : new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{11}$/)]),
   email : new FormControl('',[Validators.required, Validators.email])    
   });


   //função para capturar os dados do formulário
   cadastrarCliente(){
    //Requisição POST para cadastrar o cliente
    this.http.post(environment.apiUrl + '/clientes', this.formCadastro.value)
    .subscribe((response: any) =>{
         alert(response.mensagem);
         this.formCadastro.reset();

    });
   }


}
