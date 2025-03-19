import {create} from 'zustand';
import {devtools, persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserStore {
  isLogin: boolean;
  accessToken: string;
  setIsLogin: (isLogin: boolean) => void;
}

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      set => ({
        isLogin: false,
        accessToken: '',
        setIsLogin: (isLogin: boolean) => set({isLogin}),
        setAccessToken: (accessToken: string) => set({accessToken}),
      }),
      {
        name: 'user store',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
