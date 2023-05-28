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

  constructor(private servicio: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.traerPersonajes();
  }
  traerPersonajes() {
    this.servicio.getAllCharacters().subscribe((data) => {
      this.personajes = data.results;
    });
  }
  individuo(id: number) {
    this.router.navigate(['/individual'], {
      queryParams: { id: id },
    });
  }
}
