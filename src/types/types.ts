export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
}

export interface UserStore {
  user: User | null;
  // setUser: (user: User) => void;
  signOut: () => void;
  googleSignIn: () => Promise<void>;
}
