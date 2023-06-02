import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    const email = ref('')
    const password = ref('')
    const supabase = []
    return {
      supabase,
      email,
      password
    }
  },
  actions: {
    async fetchUser() {
      const res = await fetch('https://localhost:3000/user')
    }
  }
})
