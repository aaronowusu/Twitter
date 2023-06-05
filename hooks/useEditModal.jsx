import {create} from 'zustand';

const useEditModal = create((set) => ({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false}),
}));

export default useEditModal;