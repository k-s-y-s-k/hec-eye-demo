import { createElement } from 'react';
import { render } from 'react-dom';
import { hoge } from '~/constants/';

const elApp = document.getElementById('app');
if (elApp == null) throw new Error('#app elementが存在しません。');

render(createElement('h1', {}, hoge), elApp);
