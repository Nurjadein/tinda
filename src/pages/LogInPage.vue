<template>
  <q-page
    class="flex flex-center bg-gradient"
    style="min-height: 100vh; padding: 24px;"
  >
    <q-card
      flat
      bordered
      class="q-pa-xl shadow-lg items-center"
      style="width: 100%; max-width: 400px; border-radius: 20px;"
    >
    <div class="text-center">
      <div class="text-center">
        <div class="q-mx-auto flex justify-center items-center loginLogoSize">
          <q-img :src="logo"/>
        </div>
        <div class="text-h5 font-bold q-pt-md">Welcome!</div>
        <div class="text-subtitle2 text-grey-7">
          Please login to your account
        </div>
      </div>
    </div>
      <q-form @submit.prevent="submit">
        <q-card-section>
          <div>
            <q-input
              v-model="email"
              type="email"
              label="Email Address"
              outlined
              dense
              clearable
              autofocus
              :rules="[val => !!val || 'Email is required', val => val.includes('@') || 'Email must be valid']"
            />
            <q-input
              v-model="password"
              type="password"
              label="Password"
              outlined
              dense
              clearable
              :rules="[val => !!val || 'Password is required']"
            />
    
          </div>
          <div>
            <q-btn
              type="submit"
              label="Sign In"
              color="primary"
              unelevated
              class="full-width"
            />
          </div>
        </q-card-section>
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import logo from 'src/assets/tindaLogoWithLabel.png';

const email = ref('');
const password = ref('');

function submit() {
  if (email.value && password.value) {
    alert(`Logging in:\nEmail: ${email.value}\nPassword: ${password.value}`);
  }
}
</script>