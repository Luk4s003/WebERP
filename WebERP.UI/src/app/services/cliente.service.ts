import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  public getClientes() : Cliente[] {
    let cliente = new Cliente();
    cliente.id
    cliente.nome = "Lukas",
    cliente.cpf = "358243002863",
    cliente.email = "rlukas082@gmail.com",
    cliente.telefone = "11987996846",
    cliente.dataNascimento = '2003-04-09',
    cliente.dataCadastro = '2022-12-01';

    return [cliente];
  }
}
