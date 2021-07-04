import { createElement, FC } from 'react';
import Index from '~/components/container';

export interface RouterMetaData {
  path: string;
  children: FC;
  exact?: boolean; // 完全一致かどうか
}

const DummyComponent2 = () => createElement('h1', {}, 'hello dummy router 2');

// RouterPropsを逆算しても可
export const routing: RouterMetaData[] = [
  {
    path: '/',
    children: Index,
    exact: true,
  },
  {
    path: '/hoge',
    children: DummyComponent2,
  },
];
