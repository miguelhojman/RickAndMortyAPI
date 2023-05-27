import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { MainComponent } from './components/main/main.component';
import { IndividualComponent } from './components/individual/individual.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'individual', component: IndividualComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
