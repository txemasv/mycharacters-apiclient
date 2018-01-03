import {Character} from '../models/character';
import {CHARACTERS} from '../mocks/mock-characters';
import {ResponseItem} from '../models/responseitem';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {MessageService} from './message.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CharacterService {

  private apiUrl = 'http://localhost:8080/characters';

  constructor(private messageService: MessageService, private http: HttpClient) {}

  getCharacters(): Observable<ResponseItem> {
    this.messageService.add('CharacterService: getCharactersList');
    return this.http.get<ResponseItem>(this.apiUrl);
  }

  getCharacter(id: string): Observable<Character> {
    this.messageService.add('CharacterService: getCharacter');
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Character>(url);
  }

  updateCharacter(character: Character): Observable<any> {
    this.messageService.add('CharacterService: updateCharacter');
    return this.http.put(this.apiUrl, character, httpOptions);
  }
}
