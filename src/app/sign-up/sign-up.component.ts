import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthServiceService} from "../auth-service.service";
import {User} from "../user";
import {concatMapTo} from "rxjs/operator/concatMapTo";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
  }


  onSignUp(formulario: NgForm){
    const user: User = new User();
    user.email = formulario.value.email;
    user.password = formulario.value.password;
    user.nome = formulario.value.nome;

    this.authService.signUp(user).subscribe(
        resultado => console.log(resultado),
        error => console.log(error),
        function () {
            console.log("Requisicao completada")
        }

    );
  }

}
