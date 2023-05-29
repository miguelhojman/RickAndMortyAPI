import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent {
  personajes: any[] = [];
  page: number = 1;
  paginasTotales: number[] = [];

  constructor(private servicio: ServiceService, private router: Router) {}

  ngOnInit(): void {
    for (let i = 0; i < 42; i++) {
      this.paginasTotales[i] = i + 1;
    }
    //this.page=1; para que vuelva a cargar la 1??
    this.traerPersonajes();
  }
  traerPersonajes() {
    this.servicio.getAllCharacters(this.page).subscribe((data) => {
      this.personajes = data.results;
    });
  }
  idIndividuo(id: number) {
    this.router.navigate(['/individual'], {
      queryParams: { id: id },
    });
  }
  traerPagina(item: number) {
    console.log(item);
    this.page = item;
    this.traerPersonajes();
  }
}
