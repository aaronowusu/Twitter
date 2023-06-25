import {create} from 'zustand';

const useTweetModal = create((set) => ({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false}),
}));

export default useTweetModal;