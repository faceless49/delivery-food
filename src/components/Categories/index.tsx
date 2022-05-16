import React, { FC } from 'react';

import { ReturnComponentType } from 'types';

type CategoriesProps = {
  value: number;
  onChangeCategory: (id: number) => void;
};

export const Categories: FC<CategoriesProps> = ({
  onChangeCategory,
  value,
}): ReturnComponentType => {
  const categories = ['Все', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul role="menu">
        {categories.map((name, index) => (
          <li
            className={value === index ? 'active' : ''}
            role="menuitem"
            onClick={() => onChangeCategory(index)}
            onKeyDown={() => onChangeCategory(index)}
            key={`${name}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
