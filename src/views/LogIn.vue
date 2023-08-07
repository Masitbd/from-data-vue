
<script setup>
import { reactive } from 'vue';
import router from '../router';


const data = reactive(
  {
         
         email: '',
         password: ''
  },
)


  const  getData =()=>{
    if (localStorage.getItem('formData'))
    {
      const myobj = JSON.parse(localStorage.getItem('formData'))
      console.log(myobj.email)
      
      if (myobj.email === data.email && myobj.password === data.password) {
        router.push('/')
      }
      else{
     // alert('Incorrect Id or Password')
      }

    }

  }
  
  </script>

<template>
 <form @submit.prevent="registerUser" class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold mb-4">Login</h2>
    <div class="mb-4">
      <label class="block mb-2" for="email">Email</label>
      <input v-model="data.email" type="email" id="email" class="w-full p-2 border rounded-lg border-indigo-600">
    </div>
    <div class="mb-4">
      <label class="block mb-2" for="password">Password</label>
      <input v-model="data.password" type="password" id="password" class="w-full p-2 border rounded-lg border-indigo-600">
    </div>
    <button type="submit" @click="getData()" class="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
      Login
    </button>

    <p>no-1{{  data.email }}</p>
    <p>{{  getData()}}</p>

    <p v-if="data.email !== getData()">Emails not Match</p>
  </form>
</template>
