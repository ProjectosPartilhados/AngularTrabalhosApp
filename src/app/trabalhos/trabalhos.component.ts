import { Component, OnInit } from '@angular/core';
import {Trabalho} from '../Trabalho.interface';
import {TrabalhoService} from '../trabalho.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-trabalhos',
  templateUrl: './trabalhos.component.html',
  styleUrls: ['./trabalhos.component.css']
})
export class TrabalhosComponent implements OnInit {

  trabalhos: Trabalho [];


  constructor(private trabalhoService: TrabalhoService) {

  }

  ngOnInit() {
      this.getTrabalhos();
  }

  getTrabalhos(){
    this.trabalhoService.getTrabalhos().subscribe(
  resultado => {
            this.trabalhos = resultado['trabalhos'];
        }
    );
  }


}
