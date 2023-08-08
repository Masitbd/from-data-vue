<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { reactive } from 'vue';


const data = reactive(
  {
         username: '',
         email: '',
         password: ''
  },
)


  const  saveData =()=>{
    return localStorage.setItem('formData', JSON.stringify(data))
  }


</script>

<template>
 <form @submit.prevent="registerUser" class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold mb-4">Register</h2>
    <div class="mb-4">
      <label class="block mb-2" for="username">Username</label>
      <input v-model="data.username" type="text" id="username" class="w-full p-2 border rounded-lg border-indigo-600">
    </div>
    <div class="mb-4">
      <label class="block mb-2" for="email">Email</label>
      <input v-model="data.email" type="email" id="email" class="w-full p-2 border rounded-lg border-indigo-600">
    </div>
    <div class="mb-4">
      <label class="block mb-2" for="password">Password</label>
      <input v-model="data.password" type="password" id="password" class="w-full p-2 border rounded-lg border-indigo-600">
    </div>
    <button type="submit" @click="saveData()" class="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
      Register
    </button>

    <p>{{  data }}</p>
  </form>
</template>
