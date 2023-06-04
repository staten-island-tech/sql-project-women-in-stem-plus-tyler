import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return{
      currentUser: null
    }
  }
})
