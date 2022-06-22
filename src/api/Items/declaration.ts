import { Model } from 'api/BaseServices/declarations';

export interface Item extends Model {
  id: number;
}
export interface ResponseDescriptionItem extends Model {
  text?: string;
  plain_text?: string;
}
export interface ResponseItems extends Model {
  query: string;
  results: Item[];
}
export interface Suggest extends Model {
  q: string;
  match_start: number;
  match_end: number;
}

export interface ResponseSuggests extends Model {
  q: string;
  suggested_queries: Suggest[];
}
