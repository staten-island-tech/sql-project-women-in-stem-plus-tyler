import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
      currentUser: null
  },
  actions: {
    getUser(user){
      user = this.currentUser 
    },
    logOut() {
      this.currentUser = null
    }
  },
  getters: {
    hasAuth() {
      return !!this.currentUser
    }
  }
})
