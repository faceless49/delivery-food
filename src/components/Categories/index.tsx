import React, { FC, useState } from 'react';

import { Nullable, ReturnComponentType } from 'types';

type CategoriesProps = {
  items: string[];
  onClickItem: (name: string) => void;
};

export const Categories: FC<CategoriesProps> = ({
  items,
  onClickItem,
}): ReturnComponentType => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const onSelectItem = (index: number | null): Nullable<void> => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul role="menu">
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => onSelectItem(null)}
          onKeyDown={() => onSelectItem(null)}
          role="menuitem"
        >
          Все
        </li>
        {items.map((name, index) => (
          <li
            className={activeItem === index ? 'active' : ''}
            role="menuitem"
            onClick={() => onSelectItem(index)}
            onKeyDown={() => onClickItem(name)}
            key={`${name}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
