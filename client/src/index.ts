import { createElement } from 'react';
import { render } from 'react-dom';

const elApp = document.getElementById('app');
if (elApp == null) throw new Error('#app elementが存在しません。');

render(createElement('h1', {}, "hello react"), elApp);
