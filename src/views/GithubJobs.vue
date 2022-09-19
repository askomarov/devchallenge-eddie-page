<template>
  <div>
    <button
      type="button"
      @click="onClickGetpost(1)"
    >Get Post</button>
    {{ job }}
  </div>
</template>

<script setup>
import { ref } from "vue";
const URL = "https://jsonplaceholder.typicode.com/posts";

async function getPost(id) {
  try {
    // можно сделать несколько запросов к серверу
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    ).then((res) => res.json());
    // второй запрос
    // const response2 = await fetch(`https://jsonplaceholder.typicode.com/users`).then(res => res.json());
    // возвращем два ответа
    // return [response, response2];
    return response;
  } catch (error) {
    console.log(error);
    // если ошибка - можно либло выбросить ошибку
    //  throw error;
    // если ошибка - либо вернуть промис
    return Promise.reject(error);
  }
}
const job = ref("");
const onClickGetpost = (id) => {
  getPost(id)
    .then((data) => {
      job.value = data;
    })
    .catch((err) => console.log(err));
};
</script>

<style></style>
