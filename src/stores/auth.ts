// src/stores/auth.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<{ username: string } | null>(null);

   function login(credentials: { username: string; password: string }) {
    // Replace this with your real API call or auth logic
    if (credentials.username === 'admin' && credentials.password === '1234') {
      user.value = { username: credentials.username };
      return;
    } else {
      throw new Error('Invalid credentials');
    }
  }

  function logout() {
    user.value = null;
  }

  return { user, login, logout };
});
