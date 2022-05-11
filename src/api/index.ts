import { instance } from 'api/apiConfig';
import { ResponseType } from 'api/types';

export const pizzasAPI = {
  getPizzas() {
    return instance.get<ResponseType>('db.json');
  },
};
