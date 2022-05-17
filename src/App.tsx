import React, { useState } from 'react';

import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';

import { Header } from 'components';
import { Cart, Home, NotFound } from 'pages';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="App">
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
