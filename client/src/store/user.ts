import { create } from 'zustand';

interface UserState {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  userNumber: number;
  avatar: string;
}

interface UserAction {
  set: (state: Partial<UserState>) => void;
}

const initialUserState = {
  _id: '',
  name: '',
  lastName: '',
  email: '',
  userNumber: 0,
  avatar: '',
};

const useUserStore = create<UserState & UserAction>((set) => {
  const storedState = localStorage.getItem('userState');
  const initialState = storedState ? JSON.parse(storedState) : initialUserState;

  return {
    ...initialState,
    set: (state) => {
      set(state);
      localStorage.setItem('userState', JSON.stringify({ ...initialState, ...state }));
    },
  };
});

export default useUserStore;
