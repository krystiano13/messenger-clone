export type User = {
  email: string;
  accessToken: string;
  username: string;
};

export interface UserState {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}
