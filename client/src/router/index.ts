import { createElement, FC } from "react";

export interface RouterMetaData {
  path: string;
  children: FC;
  exact?: boolean; // 完全一致かどうか
}

const DummyComponent = () => createElement('h1', {}, 'hello dummy router');
const DummyComponent2 = () => createElement('h1', {}, 'hello dummy router 2');

// RouterPropsを逆算しても可
export const routing: RouterMetaData[] = [
  {
    path: '/',
    children: DummyComponent,
    exact: true,
  },
  {
    path: '/hoge',
    children: DummyComponent2,
  },
];