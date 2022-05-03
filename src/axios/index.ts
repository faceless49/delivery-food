import { instance } from 'axios/apiConfig';
import { ResponseType } from 'axios/types';

export const pizzasAPI = {
  getPizzas() {
    // @ts-ignore
    return instance.get<ResponseType>('db.json');
  },
};
