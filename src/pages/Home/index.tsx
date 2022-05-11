import React, { FC, useState } from 'react';

import { Categories, PizzaBlock, Sort } from 'components';
import { PizzasType, ReturnComponentType } from 'types';

type HomePage = {
  items: PizzasType[];
};

export const Home: FC<HomePage> = ({ items }): ReturnComponentType => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
