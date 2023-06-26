import React from 'react';
import ReactDOM from 'react-dom';
import ItemCard from './ItemCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});