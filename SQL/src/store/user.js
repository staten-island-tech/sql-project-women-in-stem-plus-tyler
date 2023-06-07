import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'store',
  state: () => {
    currentUser: null
  },
  actions: {
    getUser(user) {
      this.currentUser = user
    },
    logOut() {
      this.currentUser = null
    }
  }
})
