import axios from 'axios';
import { SuggestParams } from 'shared/types/items';
import BaseService from '../BaseServices';
import { Item, Suggest, Suggests } from './declaration';

export class ItemsService extends BaseService {
  protected items: string = 'items';
  protected autosuggest: string = 'autosuggest';

  async searchAutosuggest({ q, showFilters = true, limit = 6 }: SuggestParams): Promise<Suggest[]> {
    try {
      const params = { q, showFilters, limit };
      const response = await axios.get<Suggests>(`${this.url}/${this.autosuggest}`, { params });
      const { data: axiosData } = response;
      return axiosData.suggested_queries as Suggest[];
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async find(): Promise<Item[]> {
    try {
      const response = await axios.get<Item[]>(`${this.url}/${this.items}`);
      const { data: axiosData } = response;
      return axiosData as Item[];
    } catch (error) {
      throw this.handleError(error);
    }
  }
}

const service = new ItemsService();
export default service;
