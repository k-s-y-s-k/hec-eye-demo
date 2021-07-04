import { UserData } from "~/contexts/UserContext";

export const fetchLoginByIdAndPassword = async (id: string, password: string) => {
  console.log(id, password);
  return {hash: 'hogehoge'};
}
export const fetchUserMetaData = async (hash: string): Promise<UserData> => {
  console.log(hash);
  return {
    name: '名無しのモックユーザー',
    messages: [],
  };
};
