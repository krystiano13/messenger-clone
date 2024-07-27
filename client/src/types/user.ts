export type User = {
    username: string;
    email: string;
    accessToken: string;
    refreshToken: string;
}

export interface UserState {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>> | null;
}