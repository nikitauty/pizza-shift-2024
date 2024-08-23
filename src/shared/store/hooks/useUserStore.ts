import { create } from 'zustand';

interface UserState {
  user?: User;
  isLoggedIn: boolean;
}

interface UserActions {
  initUser: (user: User) => void;
  setUserData: (user: User) => void;
  clearUser: () => void;
}

const initialState: UserState = {
  user: undefined,
  isLoggedIn: false,
};

export const useUserStore = create<UserState & UserActions>((set) => ({
  ...initialState,

  initUser: (user) => {
    set({ user });
    set({ isLoggedIn: true });
  },

  setUserData: (newUserData) => {
    set(({ user }) => ({ user: { ...user, ...newUserData } }));
  },

  clearUser: () => {
    set(initialState);
  },
}));
