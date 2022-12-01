import { Component } from '@angular/core';
import { Cliente } from './models/cliente';
import { ClienteService } from './services/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebERP.UI';
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit() : void {
    this.clientes = this.clienteService.getClientes();
    console.log(this.clientes);
  }
}
