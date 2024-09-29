<script setup lang="ts">
import UserFormTemplate from '../../components/templates/UserFormTemplate.vue';
import { useUserStore } from '../../stores/user';
const userStore = useUserStore();
const users = userStore.users;

const deleteUser = (email: string) => {
  userStore.users = userStore.users.filter(user => user.email !== email);
};
</script>

<template>
  <div class="user-page">
    <h1>User Registration</h1>
    <UserFormTemplate />
    <h2>Users List</h2>
    <ul>
      <li v-for="user in users" :key="user.email">
        {{ user.name }} ({{ user.email }}) 
        <AtomButton label="Delete" @click="deleteUser(user.email)" />
      </li>
    </ul>
  </div>
</template>
