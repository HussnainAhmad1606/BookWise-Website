import { create } from 'zustand';

const useUserStore = create((set) => ({
  username: "Psy",
  email: "",
  avatar: "",
  setUsername: (newUsername) => set({ username:newUsername }),
  setEmail: (newEmail) => set({ email:newEmail }),
  setAvatar: (newAvatar) => set({ avatar:newAvatar }),


  alertType: "",
  alertMessage: "",
  isAlert: false,
  setAlertType: (newAlertType) => set({ alertType:newAlertType }),
  setAlertMessage: (newAlertMessage) => set({ alertMessage:newAlertMessage }),
  setIsAlert: (newBool) => set({ isAlert:newBool })
}))

export default useUserStore;