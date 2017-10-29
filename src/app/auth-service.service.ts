import { Injectable } from '@angular/core';
import {HttpClient, } from '@angular/common/http';
import {User} from './user';
// import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import  'rxjs/add/operator/map';


@Injectable()
export class AuthServiceService {

  constructor(private httpClient: HttpClient) {

  }


   signUp(user: User){
      const headers: Headers = new Headers({'Content-Type': 'Application/json', 'X-Request-With': 'XMLHttpRequest'});
      return this.httpClient.post('http://127.0.0.1:8000/api/users/signup',user, headers);
    }


    signIn(user: User){
        const headers: Headers = new Headers({'Content-Type': 'Application/json', 'X-Request-With': 'XMLHttpRequest'});
        return this.httpClient.post('http://127.0.0.1:8000/api/users/signin', user, headers);
            // .map(
            //     (response: Response) =>
            //     {
            //
            //         const token = response;
            //         // const base64URL = token.split('.')[1];
            //         // const base64 = base64URL.replace('-', '+').replace('_', '/')
            //         return {
            //             token: token,
            //             // decoded: JSON.parse(window.atob(base64))
            //         }
            //     }
            // );
            // .do(
            //     (dataToken)  => {
            //         localStorage.setItem('token', dataToken['token']);
            //     }
            // );
    }



}
