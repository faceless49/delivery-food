import React, { createContext, useMemo, useState } from 'react';

import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';

import { Header } from 'components';
import { Cart, Home, NotFound } from 'pages';
import { ReturnComponentType } from 'types';

type SearchContextType = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};
export const SearchContext = createContext<SearchContextType>({
  searchValue: '',
  setSearchValue: () => {},
});

export const App = (): ReturnComponentType => {
  const [searchValue, setSearchValue] = useState<string>('');

  const value = useMemo(() => ({ searchValue, setSearchValue }), [searchValue]);

  return (
    <div className="wrapper">
      <SearchContext.Provider value={value}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
};
