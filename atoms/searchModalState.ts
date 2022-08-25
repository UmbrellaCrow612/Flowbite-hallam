// searchModalState

import { atom } from 'recoil'

export const searchModalState = atom({
  key: 'searchModalState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
})