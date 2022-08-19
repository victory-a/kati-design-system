import React from 'react';
import ReactDOM from 'react-dom';

import { Color, Text } from '@ds.e/react';

import '@ds.e/scss/lib/Utilities.css';

ReactDOM.render(
  <>
    <Color hexCode='#000'></Color>
    <Text size='lg'>This is some text</Text>
  </>,
  document.querySelector('#root')
);
