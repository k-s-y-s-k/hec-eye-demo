import { createElement, FC } from 'react';
import { render } from 'react-dom';
import { hoge } from '~/constants/';
import { UserMiddleware } from './contexts/UserContext';

/**
 * middleware登録部分
 */
const middlewares: FC[] = [UserMiddleware];

/**
 * MainApp
 */
const MainApp = createElement('h1', {}, hoge);

/**
 * Global実行
 */
const main = () => {
  const App: FC = () => MainApp;
  const buzz = middlewares.reduce((prev, next) => createElement(next, {}, prev), createElement(App));

  const elApp = document.getElementById('app');
  if (elApp == null) throw new Error('#app elementが存在しません。');
  render(buzz, elApp);
};

main();