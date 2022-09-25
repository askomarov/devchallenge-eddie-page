<template>
  <div class="container">
    <form>
      <input
        type="text"
        v-model="name"
        required=""
      />
      <button
        type="submit"
        @click.prevent="onClickGetpost(name)"
      >
        Get Repos
      </button>
    </form>
    <ul>
      <li
        v-for="rep in state.data"
        :key="rep.name"
      >
        <a
          :href="rep.html_url"
          target="_blank"
          >{{ rep.name }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const name = ref(null);
const state = reactive({ data: [] });
// const URL = "https://jsonplaceholder.typicode.com/posts";

async function getPost(userName) {
  const URL = `https://api.github.com/users/${userName}/repos`;
  try {
    // можно сделать несколько запросов к серверу
    const response = await fetch(URL).then((res) => res.json());
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}
const onClickGetpost = (id) => {
  getPost(id)
    .then((data) => {
      state.data = data;
    })
    .catch((err) => console.log(err));
};
</script>

<style scoped lang="scss">
.container {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

form {
  display: inline-grid;
  gap: 1rem;
}
input {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: var(--text-color-gray-light);
  border-radius: 12px;
  font-family: $font-family;
  border-radius: inherit;
  padding: 5px 10px;
  margin: 0 5px;
  border: 0;
  outline: 0;
  font-weight: 500;
  font-size: size(14px);
  line-height: 100%;

  &:hover,
  &:focus,
  &:focus-within {
    outline: 1px solid var(--color-blue);
  }
}
</style>
