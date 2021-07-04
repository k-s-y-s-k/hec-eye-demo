/**
 * routing管理系コンテキスト
 */
import { createElement, FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RouterMetaData } from '~/router';

export const RoutingMiddleware: FC = ({ children }) => createElement(BrowserRouter, {}, children);

export const ApplyRouting: FC<{ routes: RouterMetaData[] }> = ({ routes }) => {
  const routings = routes.map((router) => createElement(Route, { ...router, key: router.path }), []);
  return createElement(Switch, {}, routings);
};
