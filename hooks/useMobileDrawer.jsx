import {create} from 'zustand';

const useMobileDrawer = create((set) => ({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false}),
}));

export default useMobileDrawer;