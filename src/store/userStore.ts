import {create} from 'zustand';
import {devtools, persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
