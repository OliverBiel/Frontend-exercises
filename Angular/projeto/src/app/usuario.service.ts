import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario{
    let usuario = new Usuario()
    usuario.nome = 'Nataniel'
    usuario.email = 'nataniel@gmail.com'

    return usuario
  }

  public listaUsuario():Usuario[]{
    return [
      {
        nome: 'Rodolfo 1',
        email: 'rodolfo1@gmail.com'
      },
      {
        nome: 'Rodolfo 2',
        email: 'rodolfo2@gmail.com'
      },
      {
        nome: 'Rodolfo 3',
        email: 'rodolfo3@gmail.com'
      },
      {
        nome: 'Rodolfo 3',
        email: 'rodolfo3@gmail.com'
      },
      {
        nome: 'Rodolfo 4',
        email: 'rodolfo4@gmail.com'
      },
    ]
  }
}
