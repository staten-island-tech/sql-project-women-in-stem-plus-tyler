import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),
  actions: {
    async fetchUser() {
      const res = await fetch('https://localhost:3000/user')
    },
    async signUp(email, password) {
      try {
        const { error } = await supabase.auth.signUp({
          email: email.value,
          password: password.value
        })
        if (error) throw error
      } catch (error) {
        console.error(error)
      }
    },
    async signIn(email, password) {
      try {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.value,
          password: password.value
        })
        if (error) throw error
      } catch (error) {
        console.error(error)
      }
    }
  }
})
