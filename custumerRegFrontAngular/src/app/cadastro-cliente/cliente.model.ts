import { Telefone } from './telefone.model';

export class Cliente {
  id: number;
  nome: string;
  endereco: string;
  bairro: string;
  telefones: Telefone[];

  constructor(id: number, nome: string, endereco: string, bairro: string, telefones: Telefone[]) {
    this.id = id;
    this.nome = nome;
    this.endereco = endereco;
    this.bairro = bairro;
    this.telefones = telefones;
  }

  validarNome(): boolean {
    return this.nome.length > 10;
  }
}
