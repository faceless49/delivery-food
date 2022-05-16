import React, { useEffect, useState } from 'react';

import './scss/app.scss';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

import { Header } from 'components';
import { Cart, Home, NotFound } from 'pages';
import { PizzasType, ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  const [pizzas, setPizzas] = useState<PizzasType[]>([]);

  useEffect(() => {
    axios
      .get('https://617826619c328300175f5e53.mockapi.io/items')
      .then(({ data }) => setPizzas(data));
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={pizzas} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
