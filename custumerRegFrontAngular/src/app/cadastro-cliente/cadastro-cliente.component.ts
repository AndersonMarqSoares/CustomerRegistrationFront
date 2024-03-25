import { ClienteService } from './../cliente.service';
import { Component } from '@angular/core';
import { Cliente } from './cliente.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class CadastroClienteComponent {
  clienteForm!: FormGroup;
  cliente: Cliente = new Cliente(0, '', '', '', []);

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService) {}

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      endereco: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.clienteForm.valid) {
      console.log('Dados do cliente:', this.clienteForm.value);

      this.clienteForm.reset();
    }
  }

  cadastrarCliente(): void {
    this.clienteService.cadastrarCliente(this.cliente).subscribe(
      response => {
        console.log('Cliente cadastrado com sucesso:', response);
        alert('Cliente cadastrado com sucesso.');
        this.cliente = new Cliente(0, '', '', '', []);
      },
      error => {
        console.error('Erro ao cadastrar cliente:', error);
        alert('Erro ao cadastrar cliente. Verifique os dados e tente novamente.');
      }
    );
  }
}
