import {Character} from '../models/character';
import {CHARACTERS} from '../mocks/mock-characters';
import { ResponseItem } from '../models/responseitem';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class CharacterService {

  private apiUrl = 'http://localhost:8080/characters';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<ResponseItem> {
     return this.http.get<ResponseItem>(this.apiUrl);
  }

  getCharacter(id: string): Observable<Character> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Character>(url);
  }
}