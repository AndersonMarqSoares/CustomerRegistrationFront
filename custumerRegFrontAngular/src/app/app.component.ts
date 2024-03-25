import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
   imports: [
    CommonModule,
    CadastroClienteComponent
  ],
  providers: [],
})
export class AppComponent {
  title = 'Cadastro de Clientes Totvs';
}
