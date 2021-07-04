import { createContext, createElement, Dispatch, FC, SetStateAction, useContext, useState } from 'react';

/**
 * useStateとContextを合わせたステータスを提供するProvider
 * @param initialValue 初期化ステータス
 * @returns Contextの情報
 */
export const createStateContext = <Type>(initialValue: Type) => {
  const context = createContext<[Type, Dispatch<SetStateAction<Type>>]>([initialValue, () => {}]);

  /**
   * @param props.value 初期化ステータスを搬入する
   * @param props.children ReactのWrapするコンポーネントを記述する
   * @returns
   */
  const Provider: FC<{ value?: Type }> = ({ value, children }) => {
    const state = useState<Type>(value || initialValue);

    return createElement(context.Provider, { value: state }, children);
  };

  /**
   * @returns Context hooksの提供
   */
  const useContextState = () => useContext(context);

  return {
    Provider,
    useContextState,
  };
};
