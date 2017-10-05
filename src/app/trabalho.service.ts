import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Trabalho} from "./Trabalho.interface";


@Injectable()
export class TrabalhoService {


    constructor(private http: HttpClient) {
    }


    getTrabalhos(): Observable<any>{
       return this.http.get('http://127.0.0.1:8000/api/trabalhos');

    }


    saveTrabalho(trabalho: Trabalho): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/trabalho', trabalho , {headers: headers})
    }


    updateTrabalho(id: number, trabalho: Trabalho){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/trabalho/'+id, trabalho, {headers: headers});

    }


    deleteTrabalho(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/trabalho/'+id);
    }

}

