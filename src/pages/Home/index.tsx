import React, { FC, useEffect, useState } from 'react';

import { Categories, PizzaBlock, Sort } from 'components';
import { PizzasType, ReturnComponentType } from 'types';

export const Home: FC = (): ReturnComponentType => {
  const [items, setItems] = useState<PizzasType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://617826619c328300175f5e53.mockapi.io/items')
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
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={name => console.log(name)}
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <Sort
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
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
