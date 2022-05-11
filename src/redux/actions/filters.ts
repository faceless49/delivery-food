export const setSortBy = (filter: string) =>
  ({
    type: 'SET_SORT_BY',
    payload: filter,
  } as const);
export const setCategory = (catIndex: number) =>
  ({
    type: 'SET_CATEGORY',
    payload: catIndex,
  } as const);

export type FiltersActionsType =
  | ReturnType<typeof setSortBy>
  | ReturnType<typeof setCategory>;
