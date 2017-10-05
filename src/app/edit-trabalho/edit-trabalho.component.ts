import {Component, Input, OnInit} from '@angular/core';
import {Trabalho} from "../Trabalho.interface";
import {TrabalhoService} from "../trabalho.service";

@Component({
  selector: 'app-edit-trabalho',
  templateUrl: './edit-trabalho.component.html',
  styleUrls: ['./edit-trabalho.component.css']
})
export class EditTrabalhoComponent implements OnInit {

  @Input('trabalho') trabalho: Trabalho;

  constructor(private trabalhoService: TrabalhoService) { }

  ngOnInit() {
  }


  onEdit(){
      this.trabalhoService.updateTrabalho(this.trabalho.id, this.trabalho).subscribe(
          resultado => console.log(resultado)
      );
  }

}
