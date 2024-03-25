export interface Telefone {
  id: number;
  numero: string;
}

export interface Cliente {
  id: number;
  nome: string;
  endereco: string;
  bairro: string;
  telefones: Telefone[];
}
