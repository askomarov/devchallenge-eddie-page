<script setup>
import InputGroup from "../components/InputGroup.vue";
import { ref, reactive, watch } from "vue";
const name = ref(null);
const newName = ref(null);
const state = reactive({});

async function getPost(name) {
  const URL = `https://api.github.com/users/${name}/repos`;
  try {
    const response = await fetch(URL).then((res) => res.json());
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}
const onClickGetpost = () => {
  newName.value = name.value;
  getPost(newName.value)
    .then((data) => {
      state.data = data;
    })
    .catch((err) => console.log(err));
};
const onBtnClickCopyText = (text) => {
  console.log(text);
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
};
</script>

<template>
  <div class="container">
    <form>
      <label for="gitname">Input any github username</label>
      <input
        placeholder="github"
        id="gitname"
        type="text"
        v-model="name"
        required=""
      />
      <button
        type="submit"
        @click.prevent="onClickGetpost()"
      >
        Get Repos
      </button>
    </form>
    <div v-if="newName">
      <h2>Link to user github page:</h2>
      <a
        class="user-name-link"
        :href="`https://github.com/${newName}`"
      >
        <img
          v-if="state.data"
          :src="state.data[0].owner.avatar_url"
          width="60"
          height="60"
          alt=""
        />
        {{ newName }}
      </a>
    </div>

    <div v-if="state.data">
      <h2>We have received a list of {{ state.data.length }} repositories:</h2>
      <ul class="repos-list">
        <li
          v-for="rep in state.data"
          :key="rep.name"
          class="repo-item"
        >
          <div class="repo-item__group">
            <h4 class="repo-item__title">Link to the repository:</h4>
            <a
              class="repo-item__link"
              :href="rep.html_url"
              target="_blank"
              >{{ rep.name }}</a
            >
          </div>
          <InputGroup
            type="text"
            :id="rep.name"
            :value="rep.git_url"
            :readonly="true"
            @btnEvent="onBtnClickCopyText(rep.git_url)"
          >
            <template v-slot:buttonSlot>Copy</template>
          </InputGroup>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: grid;
  gap: 1rem;
}

form {
  justify-self: start;
  display: inline-grid;
  gap: 1rem;

  button {
    border: 1px solid var(--color-blue);
    color: var(--color-blue);
  }
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
.repos-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.repo-item {
}
.repo-item__group {
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
}
.repo-item__title {
  display: inline-block;
}
.repo-item__link {
  margin-left: 2rem;
  display: inline-block;
}
a {
  text-decoration: underline;
  &:hover {
    color: var(--color-blue);
  }
}
.user-name-link {
  display: inline-flex;
  align-items: center;
}
</style>
