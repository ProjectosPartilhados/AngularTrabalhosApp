import {Component, Input, OnInit} from '@angular/core';
import {Trabalho} from '../Trabalho.interface';
import {TrabalhoService} from "../trabalho.service";

@Component({
    selector: 'app-trabalho',
    templateUrl: './trabalho.component.html',
    styleUrls: ['./trabalho.component.css']
})
export class TrabalhoComponent implements OnInit {


    @Input('trabalho') trabalho: Trabalho;
    mostrar: boolean;




    constructor(private trabalhoService: TrabalhoService) {
        this.mostrar = true;
    }

    ngOnInit() {
    }

    onRemove(){
       this.trabalhoService.deleteTrabalho(this.trabalho.id).subscribe(
           resultado => console.log(resultado)
       );
       this.mostrar = false;
    }
}
