import {create} from 'zustand';

const useRegistrationModal = create((set) => ({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false}),
}));

export default useRegistrationModal;