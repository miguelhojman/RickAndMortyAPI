import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { take } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css'],
})
export class IndividualComponent implements OnInit {
  name: string = '';
  gender: string = '';
  status: string = '';
  species: string = '';
  image: string = '';
  id: number = 0;
  constructor(
    private servicio: ServiceService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recuperarId();

    this.servicio.getCharacterById(this.id).subscribe((data2) => {
      this.name = data2.name;
      this.gender = data2.gender;
      this.status = data2.status;
      this.species = data2.species;
      this.image = data2.image;
    });
  }

  recuperarId() {
    this.router.queryParams.pipe(take(1)).subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
    });
  }
}
