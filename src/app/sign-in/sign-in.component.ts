import{ Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../auth-service.service";
import {NgForm} from "@angular/forms";
import {User} from "../user";
import {error} from "util";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private  authService: AuthServiceService) { }

  ngOnInit() {
  }

    onSignIn(formulario: NgForm){
      const user: User = new User();
      user.email = formulario.value.email;
      user.password = formulario.value.password;


      this.authService.signIn(user)
          .map(function (response: Response) {
              console.log('Mapping')
              console.log(response.json())
          })
          .finally(() => console.log('Finally'))
          .subscribe(
          resultado => {
              console.log(resultado)

              const token = resultado['token'];
              const base64URL = token.split('.')[1];
              const base64 = base64URL.replace('-', '+').replace('_', '/');
              console.log((window.atob(base64)));


              localStorage.setItem('token',resultado['token'])
              // return {
              //     token: token,
              //     decoded: JSON.parse(window.atob(base64))
              // }
          },
          error => console.log(error),
          function () {
              console.log("Requisicao completada")
          }
      );
  }

}
