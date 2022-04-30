import { atom } from 'recoil';

export const todoState = atom<string>({
  key: 'atom/todoState',
  default: '',
});
