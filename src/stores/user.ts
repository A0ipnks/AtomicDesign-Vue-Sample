import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const users = ref<Array<{ name: string; email: string }>>([]);

  const addUser = (user: { name: string; email: string }) => {
    users.value.push(user);
  };

  return {
    users,
    addUser,
  };
});
