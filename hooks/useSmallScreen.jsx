import {create} from 'zustand'

 const useSmallScreen = create((set) => ({
    isSmallScreen: true,
    setIsSmallScreen: (isSmallScreen) => set({isSmallScreen})
}))

export default useSmallScreen;
