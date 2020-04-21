import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { CategoryList } from './../../components';
import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CategoryList />, div);
  });
  