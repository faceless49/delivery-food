import React, { FC, useEffect, useState } from 'react';

import { Categories, PizzaBlock, Sort } from 'components';
import { SortPropertyEnum, SortType } from 'redux/types/types';
import { PizzasType, ReturnComponentType } from 'types';

export const Home: FC = (): ReturnComponentType => {
  const [items, setItems] = useState<PizzasType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const [categoryId, setCategoryId] = useState<number>(0);
  const [sortType, setSortType] = useState<SortType>({
    name: 'популярности',
    sortProperty: SortPropertyEnum.RATING_DESC,
  });

  useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-magic-numbers
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    fetch(`https://617826619c328300175f5e53.mockapi.io/items?${order}&sortBy=${sortBy}`)
      .then(res => {
        res.json();
      })
      .then(arr => {
        // @ts-ignore
        setItems(arr);
        setIsLoading(false);
      });
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(id: number) => setCategoryId(id)}
        />
        <Sort value={sortType} onChangeSort={(item: SortType) => setSortType(item)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? // eslint-disable-next-line @typescript-eslint/no-magic-numbers,react/no-array-index-key
            [...new Array(6)].map((_, i) => <div key={i}>Loading...</div>) // TODO: Skeleton
          : items.map(({ id, imageUrl, name, types, sizes, price }) => (
              <PizzaBlock
                key={id}
                id={id}
                imageUrl={imageUrl}
                name={name}
                types={types}
                sizes={sizes}
                price={price}
              />
            ))}
      </div>
    </div>
  );
};
