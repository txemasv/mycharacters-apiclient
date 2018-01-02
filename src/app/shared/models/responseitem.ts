import { Character } from './character';
export class ResponseItem {
  count: number;
  limit: number;
  page: number;
  next: string;
  previous: string;
  characters: Character[];
}
