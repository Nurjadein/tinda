<template>
  <q-page padding class="flex flex-center">
    <q-card style="width: 350px;">
      <q-card-section>
        <div class="text-h6">Login to Your Account</div>
      </q-card-section>

      <q-card-section>
        <q-input
          filled
          v-model="username"
          label="Username"
          type="text"
          autofocus
          lazy-rules
          :rules="[val => !!val || 'Username is required']"
        />

        <q-input
          filled
          v-model="password"
          label="Password"
          type="password"
          lazy-rules
          :rules="[val => !!val || 'Password is required']"
          class="q-mt-md"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Login" color="primary" @click="handleLogin" :loading="loading" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from 'stores/auth'; 
import { useQuasar } from 'quasar';

const username = ref('');
const password = ref('');
const loading = ref(false);

const router = useRouter();
const $q = useQuasar();
const authStore = useAuthStore();

async function handleLogin() {
  loading.value = true;
  try {
    await authStore.login({ username: username.value, password: password.value });
    await router.push('/dashboard'); // Redirect on success
  } catch (error) {
    loading.value = false;
    $q.notify({
      color: 'negative',
      message: String(error) + 'Login failed. Please check your credentials.',
      icon: 'warning'
    });
  }
}
</script>