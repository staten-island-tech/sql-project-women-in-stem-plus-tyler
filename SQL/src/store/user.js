import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'store',
  state: () => {
      currentUser: null
  },
  actions: {
    getUser(store){
      store = this.currentUser 
    },
    logOut() {
      this.currentUser = null
    }
  }
})
