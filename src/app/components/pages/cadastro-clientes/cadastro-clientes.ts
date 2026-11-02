import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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

   //formulario reativo para capturar dados do cliente

   formCadastro = new FormGroup({
   nome : new FormControl('',[Validators.required, Validators.minLength(6)]),
   cpf : new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{11}$/)]),
   email : new FormControl('',[Validators.required, Validators.email])    
   });


   //função para capturar os dados do formulário
   cadastrarCliente(){
    console.log(this.formCadastro.value);
   }


}
