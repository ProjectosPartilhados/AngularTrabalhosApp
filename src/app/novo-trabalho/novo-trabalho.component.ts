import {Component, Input, OnInit} from '@angular/core';
import {Trabalho} from "../Trabalho.interface";
import {TrabalhoService} from "../trabalho.service";


@Component({
  selector: 'app-novo-trabalho',
  templateUrl: './novo-trabalho.component.html',
  styleUrls: ['./novo-trabalho.component.css']
})
export class NovoTrabalhoComponent implements OnInit {


    trabalho: Trabalho = {
        id: 0,
        titulo: '',
        resumo: '',
        referencias: ''
    }

  constructor(private trabalhoService: TrabalhoService) { }

  ngOnInit() {
  }


    onSalvar(evento: MouseEvent){
        this.trabalhoService.saveTrabalho(this.trabalho).subscribe(
            resultado => console.log(resultado)
        );


    }







}
