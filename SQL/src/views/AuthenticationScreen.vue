<template>
  <div>
    <SignUpForm v-if="isSignIn" />
    <SignInForm v-else />
    <button @click="isSignIn = !isSignIn">
      {{ isSignIn ? 'Sign Up' : 'Sign In' }}
    </button>
  </div>
</template>

<script>
import { useUserStore } from '../store/user'
import SignUpForm from '../components/SignUpForm.vue'
import SignInForm from '../components/SignInForm.vue'
import { ref } from 'vue'

export default {
  components: {
    SignUpForm,
    SignInForm
  },
  name: 'AuthScreen',
  setup() {
    const isSignUp = ref(true)
    return {
      isSignUp
    }
  },
  data() {
    return {
      user: useUserStore()
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
