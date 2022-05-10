import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';


@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  public usuario:Usuario = new Usuario()
  constructor() { }

  ngOnInit(): void {
  }

  public salvar(){
      console.log(this.usuario)
      alert("Dados salvos")
  }
}
