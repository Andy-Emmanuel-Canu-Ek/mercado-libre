import { Model } from 'api/BaseServices/declarations';

export interface Item extends Model {
  id: number;
}

export interface Suggest extends Model {
  q: string;
  match_start: number;
  match_end: number;
}

export interface Suggests extends Model {
  q: string;
  suggested_queries: Suggest[];
}
