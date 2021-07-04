import { createContext, createElement, Dispatch, FC, SetStateAction, useCallback, useContext, useState } from "react";
import { fetchLoginByIdAndPassword, fetchUserMetaData } from "~/utils/api/login";

/**
 * TODO: userデータのコンテキストを既存のHecEyeから引っ張ってくる
 */
export interface UserData {
  name?: string;
  messages?: string[];
}

const userContext = createContext<[UserData, Dispatch<SetStateAction<UserData>>]>([{}, () => {}]);

/**
 * @returns hec-eyeのユーザーデータを取得するコンテキスト
 */
export const useGetUserValue = () => {
  const [userValue] = useContext(userContext);
  return userValue;
};

/**
 * @returns ユーザーのログインを行う関数を返却する
 */
export const useLogin = () => {
  const [, setValue] = useContext(userContext);
  // TODO: キャッシュ
  return useCallback((id: string, passowrd: string) => {
    fetchLoginByIdAndPassword(id, passowrd)
      .then((userHash) => {
        return fetchUserMetaData(userHash.hash);
      })
      .then((userData) => {
        setValue(userData);
      })
  }, [setValue]);
};

export const UserMiddleware: FC = ({ children }) => {
  // TODO user fetch api
  const state = useState<UserData>({});
  return createElement(userContext.Provider, { value: state}, children);
};
