import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterService } from './shared/services/character.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './shared/services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [AppComponent, CharacterService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
