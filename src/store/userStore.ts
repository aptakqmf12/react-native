import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';

interface UserStore {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      set => ({
        isLogin: false,
        setIsLogin: (isLogin: boolean) => set({isLogin}),
      }),
      {
        name: 'user store',
      },
    ),
  ),
);
