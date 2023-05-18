import {create} from 'zustand'

const  useSticky = create((set) => ({
    isSticky: false,
    setIsSticky: (isSticky) => set({isSticky})
}))

export default useSticky;