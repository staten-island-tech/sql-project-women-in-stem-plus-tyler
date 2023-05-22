<template>
  <div>
    <SignUpForm v-if="isSignUp" />
    <SignInForm v-else />
    <button @click="isSignUp = !isSignUp">
      {{ isSignUp ? 'Already have an account? Sign In' : "Don't have an account yet? Sign Up" }}
    </button>
  </div>
</template>

<script>
import SignUpForm from '../components/SignUpForm.vue'
import SignInForm from '../components/SignInForm.vue'
import { ref } from 'vue'
export default {
  components: {
    SignUp,
    SignIn
  },
  name: 'AuthScreen',
  setup() {
    const isSignUp = ref(true)
    return {
      isSignUp
    }
  }
}
</script>

<style scoped></style>
