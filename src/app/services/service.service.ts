import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private id: number = 0;
  private baseUrl: string = 'https://rickandmortyapi.com/api/character';
  //private oneUrl: string = `https://rickandmortyapi.com/api/character/${this.id}`;

  constructor(private httpService: HttpClient) {}

  @Output() disparador: EventEmitter<any> = new EventEmitter();

  public getAllCharacters(): Observable<any> {
    return this.httpService.get<any>(this.baseUrl);
  }
  public getCharacterById(id: number): Observable<any> {
    return this.httpService.get<any>(`${this.baseUrl}/${id}`);
  }
}
