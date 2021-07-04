import { createElement, FC } from 'react';
import { render } from 'react-dom';
import { ApplyRouting, RoutingMiddleware } from './contexts/RoutingContext';
import { UserMiddleware } from './contexts/UserContext';
import { routing } from './router';

/**
 * middleware登録部分
 */
const middlewares: FC[] = [UserMiddleware, RoutingMiddleware];
const MainApp = createElement(ApplyRouting, { routes: routing });

/**
 * Global実行
 */
const main = () => {
  const App: FC = () => MainApp;
  const elApp = document.getElementById('app');
  if (elApp == null) throw new Error('#app elementが存在しません。');
  const content = middlewares.reduce((prev, next) => createElement(next, {}, prev), createElement(App));
  render(content, elApp);
};

main();
