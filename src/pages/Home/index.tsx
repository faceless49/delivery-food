import React, { FC, useContext, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { SearchContext } from 'App';
import { Categories, PizzaBlock, Sort } from 'components';
import { Pagination } from 'components/Pagination';
import { setCategoryId } from 'redux/slices/filterSlice';
import { RootState } from 'redux/store';
import { Nullable, PizzasType, ReturnComponentType } from 'types';

export const Home: FC = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const categoryId = useSelector<RootState, number>(state => state.filter.categoryId);
  const sortType = useSelector<RootState, string>(
    state => state.filter.sort.sortProperty,
  );

  const [items, setItems] = useState<PizzasType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { searchValue } = useContext(SearchContext);

  const onClickCategory = (id: number): Nullable<void> => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'asc' : 'desc';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-magic-numbers
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://617826619c328300175f5e53.mockapi.io/items?page=${currentPage}&limit=4&${category}${search}&order=${order}&sortBy=${sortBy}`,
    )
      .then(res => res.json())
      .then(arr => {
        // @ts-ignore
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map(({ id, imageUrl, name, types, sizes, price }) => (
    <PizzaBlock
      key={id}
      id={id}
      imageUrl={imageUrl}
      name={name}
      types={types}
      sizes={sizes}
      price={price}
    />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? (
          <div>Loading...</div> // [...new Array(6)].map((_, i) => <div key={i}>Loading...</div>) // TODO: Skeleton
        ) : (
          pizzas
        )}
      </div>
      <Pagination onChangePage={number => setCurrentPage(number)} />
    </div>
  );
};
