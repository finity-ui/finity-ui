import React from 'react';
import * as ReactDOM from 'react-dom';
import { Spinner } from '../src/Spinner';

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Spinner />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
