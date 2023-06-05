<template>
  <div>
    <SignUpForm v-if="isSignUp" />
    <SignInForm v-else />
    <button @click="isSignUp = !isSignUp">
      {{ isSignUp ? 'Sign In' : 'Sign Up' }}
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
