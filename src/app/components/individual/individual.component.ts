import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css'],
})
export class IndividualComponent {
  datos: any[] = [];
  constructor(private servicio: ServiceService) {}

  ngOnInit(): void {
    this.servicio.disparador.subscribe((data) => {
      this.servicio.getCharacterById(data).subscribe((data2) => {
        this.datos = data2;
        console.log(this.datos);
      });
    });
  }
}
