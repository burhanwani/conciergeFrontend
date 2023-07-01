import { atom } from 'recoil';

export const searchTermAtom = atom({
  key: 'searchTerm',
  default: '',
});
