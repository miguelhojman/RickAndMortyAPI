import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Location } from '@angular/common';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css'],
})
export class IndividualComponent implements OnInit {
  id: number = 0;
  name: string = '';
  gender: string = '';
  status: string = '';
  species: string = '';
  image: string = '';
  origin: string = '';
  location: string = '';
  created: string = '';

  constructor(
    private servicio: ServiceService,
    private router: ActivatedRoute,
    private loc: Location
  ) {}

  ngOnInit(): void {
    this.recuperarId();
    this.servicio.getCharacterById(this.id).subscribe((data2) => {
      this.name = data2.name;
      this.gender = data2.gender;
      this.status = data2.status;
      this.species = data2.species;
      this.image = data2.image;
      this.origin = data2.origin.name;
      this.location = data2.location.name;
      this.created = data2.created;
    });
  }
  recuperarId(): void {
    this.router.queryParams.pipe(take(1)).subscribe((params) => {
      this.id = params['id'];
    });
  }
  onGoBack(): void {
    this.loc.back();
    // window.history.back(); otra forma de hacerlo
  }
}
