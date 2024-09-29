<script setup lang="ts">
import { ref } from 'vue';
import MoleculeFormItem from '../../components/molecules/MoleculeFormItem.vue';
import AtomButton from '../atoms/AtomButton.vue';
import { useUserStore } from '../../stores/user';

const name = ref('');
const email = ref('');
const successMessage = ref('');
const userStore = useUserStore();

const submitForm = () => {
  if (!name.value || !email.value) {
    alert('Please fill in all fields.');
    return;
  }

  userStore.addUser({ name: name.value, email: email.value });
  successMessage.value = 'User registered successfully!';
  name.value = '';
  email.value = '';
};

const test = () => {
  alert("test")
}
</script>

<template>
  <form>
    <MoleculeFormItem id="name" label="Name" v-model="name" />
    <MoleculeFormItem id="email" label="Email" v-model="email" />
    <AtomButton label="Submit" @click.prevent="submitForm" />
    <AtomButton label="test" @click.prevent="test" />
    <p v-if="successMessage">{{ successMessage }}</p>
  </form>
</template>
