import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers:[ConfirmationService]
})
export class UsuarioComponent implements OnInit {

  public usuarios: Usuario[]
  constructor(private usuarioService:UsuarioService,
    private confirmationService:ConfirmationService) { }

  ngOnInit(): void {
    this.listaUsuario()
  }

  public listaUsuario(){
    this.usuarioService.listaUsuario().subscribe(
      response => {
        this.usuarios = response
      },
      error => {
        alert("Erro")
      }
    )
  }

  public deletar(id:string){
    this.confirmationService.confirm({
      message: "Deseja apagar?",
      accept: () => {
        this.usuarioService.delete(id).subscribe(
          response => {
            this.listaUsuario()
          })
      }
    })
  }
}
