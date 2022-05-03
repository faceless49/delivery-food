import React, { FC } from 'react';

import { Categories, PizzaBlock, Sort } from 'components';
import { PizzasType, ReturnComponentType } from 'types';

type HomePage = {
  items: PizzasType[];
};

export const Home: FC<HomePage> = ({ items }): ReturnComponentType => (
  <div className="container">
    <div className="content__top">
      <Categories
        onClickItem={name => console.log(name)}
        items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
      />
      <Sort items={['популярности', 'цене', 'алфавиту']} />
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
      {items.map(({ id, imageUrl, name, types, sizes, price }) => (
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
