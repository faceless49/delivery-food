import { FiltersActionsType } from 'redux/actions/filters';

type InititialStateType = {
  category: number;
  sortBy: string;
};

const initialState = {
  category: 0,
  sortBy: 'popular',
};

export const filters = (
  state: InititialStateType = initialState,
  action: FiltersActionsType,
): InititialStateType => {
  switch (action.type) {
    case 'SET_SORT_BY': {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    default:
      return state;
  }
};
