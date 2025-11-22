<template>
  <q-page
    class="flex flex-center bg-gradient"
    style="min-height: 100vh; padding: 24px;"
  >
  <div class="q-pa-md absolute-top-right">
    <q-btn-dropdown color="primary" :label="$t('language')">
      <q-list>
        <q-item clickable v-close-popup v-for="lang in languages" :key="lang.value" @click="translate(lang.value)">
          <q-item-section>
            <q-item-label>{{ lang.lang }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
    <q-card
      flat
      bordered
      class="q-pa-xl shadow-lg items-center card"
      style="width: 100%; max-width: 400px; border-radius: 20px;"
    >
    <div class="text-center">
      <div class="text-center">
        <div class="q-mx-auto flex justify-center items-center loginLogoSize">
          <q-img :src="logo"/>
        </div>
        <div class="text-h5 font-bold q-pt-md">{{$t('welcome-label') }}</div>
        <div class="text-subtitle2 text-grey-7">
          {{$t('please-login')}}
        </div>
      </div>
    </div>
      <q-form @submit.prevent="submit">
        <q-card-section>
          <div>
            <q-input
              class="q-pb-lg"
              v-model="username"
              :label="$t('username')"
              outlined
              dense
              clearable
              autofocus
              :rules="[val => !!val || $t('username-is-required')]"
            />
            <q-input
              class="q-pb-lg"
              v-model="password"
              type="password"
              :label="$t('password')"
              outlined
              dense
              clearable
              :rules="[val => !!val || $t('password-is-required')]"
            />
    
          </div>
          <div>
            <q-btn
              type="submit"
              :label="$t('login-label')"
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
import type { ILanguages } from 'src/interfaces/language.interface';
import { useTranslate } from 'src/composables/useTranslate';

const { translate, $t } = useTranslate();

const username = ref('');
const password = ref('');
const languages:ILanguages[] = [{
  lang:$t('english'),
  value: $t('en-US')
},{
  lang:$t('arabic'),
  value: $t('ar-SA')
}]

function submit() {
  if (username.value && password.value) {
    alert(`Logging in:\nEmail: ${username.value}\nPassword: ${password.value}`);
  }
}

</script>