import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css'],
})
export class IndividualComponent implements OnInit {
  name!: String;
  gender!: String;
  status!: String;
  species!: String;
  image!: String;
  constructor(private servicio: ServiceService) {}

  ngOnInit(): void {
    this.servicio.disparador.subscribe((data) => {
      this.servicio.getCharacterById(data).subscribe((data2) => {
        this.name = data2.name;
        this.gender = data2.gender;
        this.status = data2.status;
        this.species = data2.species;
        this.image = data2.image;
      });
    });
  }
}
