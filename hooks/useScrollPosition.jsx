import {create} from 'zustand';

const useScrollPosition = create((set) => ({
  scrollPosition: 0,
  setScrollPosition: (position) => set({ scrollPosition: position }),
}));

export default useScrollPosition;
