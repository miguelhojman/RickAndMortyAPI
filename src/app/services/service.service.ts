import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private pageUrl: string = 'https://rickandmortyapi.com/api/character/?page=';
  private baseUrl: string = 'https://rickandmortyapi.com/api/character';

  constructor(private httpService: HttpClient) {}

  public getAllCharacters(page: number): Observable<any> {
    return this.httpService.get<any>(`${this.pageUrl}${page}`);
  }
  public getCharacterById(id: number): Observable<any> {
    return this.httpService.get<any>(`${this.baseUrl}/${id}`);
  }
}
