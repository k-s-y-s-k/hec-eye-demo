/**
 * Userの管理系コンテキスト
 */
import { createElement, FC, useCallback } from 'react';
import { fetchLoginByIdAndPassword, fetchUserMetaData } from '~/utils/api/login';
import { createStateContext } from '~/utils/store/createStateContext';

/**
 * TODO: userデータのコンテキストを既存のHecEyeから引っ張ってくる
 */

export interface UserData {
  name?: string;
  messages?: string[];
}
const userStateContext = createStateContext<UserData>({});

export const UserMiddleware: FC = ({ children }) => {
  // TODO: user fetch apiの定義
  return createElement(userStateContext.Provider, { value: {} }, children);
};

// 主なロジック
/**
 * @returns hec-eyeのユーザーデータを取得するコンテキスト
 */
export const useGetUserValue = () => {
  const [userValue] = userStateContext.useContextState();
  return userValue;
};

/**
 * @returns ユーザーのログインを行う関数を返却する
 */
export const useLogin = () => {
  const [, setValue] = userStateContext.useContextState();
  // TODO: ログインあとのCookieなり、LocalStorageなりのキャッシュを考える
  return useCallback(
    (id: string, passowrd: string) => {
      fetchLoginByIdAndPassword(id, passowrd)
        .then((userHash) => {
          return fetchUserMetaData(userHash.hash);
        })
        .then((userData) => {
          setValue(userData);
        });
    },
    [setValue]
  );
};
