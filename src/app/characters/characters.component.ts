import {Character} from '../shared/models/character';
import {ResponseItem} from '../shared/models/responseitem';
import {CharacterService} from '../shared/services/character.service';
import {MessageService} from '../shared/services/message.service';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  responseItem: ResponseItem;

  characters: Character[];

  selectedCharacter: Character = {
    id: '',
    firstName: '',
    lastName: '',
    description: '',
  };

  constructor(private characterService: CharacterService, public messageService: MessageService) {}

  onSelect(character: Character): void {
    this.selectedCharacter = character;
  }

  saveCharacter(): void {
    this.characterService.updateCharacter(this.selectedCharacter)
      .subscribe();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(responseItem => this.responseItem = responseItem);
  }

  getCharacter(id: string): void {
    this.characterService.getCharacter(id)
      .subscribe(character => this.selectedCharacter = character);
  }

  ngOnInit() {
    this.getCharacters();
  }

}
