<script setup>
import InputGroup from "../components/InputGroup.vue";
import Pagination from "../components/Pagination.vue";
import { ref, reactive, watch } from "vue";
import { useAppStore } from "../store";

const store = useAppStore();
const name = ref(null);
const newName = ref(null);
const state = reactive({});
const reposPerPage = store.reposPerPage;
const page = ref(1);
const from = ref(0);
const to = ref(1);
const totalPages = store.getTotalPages;
const requestedArray = ref([]);
// const reposOnPage = ref(store.getReposToRednder);
async function getPost(name) {
  const URL = `https://api.github.com/users/${name}/repos?page=1&per_page=100`;
  try {
    const response = await fetch(URL).then((res) => res.json());
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}
const onClickGetpost = () => {
  newName.value = name.value;
  if (newName.value) {
    getPost(newName.value)
      .then((data) => {
        state.data = data;
        store.repos = data;
      })
      .catch((err) => console.log(err));
  }
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
const clickCallback = () => {
  console.log(page.value);

  store.setCurrentPage(page.value);
  return;
};

// watch(() => {
//   if (newName.value) {
//   }
// });
</script>

<template>
  <div class="github container">
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
        :disabled="!name"
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

    <div
      v-if="store.repos"
      class="repos-section"
    >
      <h2>We have received a list of {{ store.repos.length }} repositories:</h2>
      <ul class="repos-list">
        <li
          v-for="rep in store.getReposToRednder"
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
            <template v-slot:buttonSlot>Copy SSH</template>
          </InputGroup>
        </li>
      </ul>
      <Pagination
        v-model="page"
        :page-count="store.getTotalPages"
        :hide-prev-next="true"
        :page-range="3"
        :margin-pages="3"
        :click-handler="clickCallback"
        :disabled-class="'rt-pagination__btn--disabled'"
        :container-class="'rt-pagination'"
        :page-link-class="'rt-pagination__btn'"
        :prev-link-class="'rt-pagination__btn rt-pagination__btn--prev'"
        :next-link-class="'rt-pagination__btn rt-pagination__btn--next'"
        :active-class="'rt-pagination__btn--current'"
      >
        <template #iconarrow>
          <svg
            width="7"
            height="11"
            viewBox="0 0 12 18"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.31585 0.583588C1.90246 -0.00136659 2.85221 -1.94013e-05 3.43716 0.586597L10.7705 7.94076C11.3543 8.5262 11.3543 9.47363 10.7705 10.0591L3.43716 17.4132C2.85221 17.9999 1.90246 18.0012 1.31585 17.4162C0.729229 16.8313 0.727881 15.8815 1.31284 15.2949L7.59001 8.99992L1.31284 2.70491C0.727881 2.11829 0.729229 1.16854 1.31585 0.583588Z"
              fill="currentColor"
            />
          </svg>
        </template>
      </Pagination>
      <div class="page-counter">
        <span>{{ page }}</span
        >/<span>{{ store.getTotalPages }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  height: 100%;
}
.github {
  &.container {
    height: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }

  form {
    justify-self: start;
    display: inline-grid;
    gap: 1rem;
    label {
      font-size: 0.8rem;
    }
    button {
      border: 1px solid var(--color-blue);
      color: var(--color-blue);
      &:disabled {
        background-color: #c4c4c4;
      }
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
  .repos-section {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 0.5rem;
    margin: 0 auto;
  }
  .repos-list {
    flex: 1;
    display: grid;
    align-items: start;
    align-content: start;
    gap: 1rem;
    margin-bottom: 1rem;
    @media (min-width: $width-tablet) {
      gap: 2rem;
      grid-template-columns: 1fr 1fr;
    }
  }
  .btn-submit {
    padding: 0.3rem;
    font-size: 0.7rem;
  }
  .repo-item {
  }
  .repo-item__group {
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    flex-wrap: nowrap;
  }
  .repo-item__title {
    display: inline-block;
    flex: 0 0 auto;
  }
  .repo-item__link {
    margin-left: 2rem;
    display: inline-block;
    max-width: 100%;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
    img {
      margin-right: 0.8rem;
    }
  }
  // pagination

  .rt-pagination {
    display: flex;
    font-size: 16px;
    --btn-icon-gap: 5px;

    @media (min-width: $width-tablet) {
      --btn-icon-gap: 16px;
    }
  }
  .rt-pagination__btn {
    cursor: pointer;
    color: var(--text-color-grey);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background-color: var(--color-white);
    border: 1px solid transparent;
    border-radius: 10px;
    &:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
    }
  }
  .rt-pagination__btn--current {
    background-color: var(--primary-color);
    color: var(--color-white);
    &:hover {
      background-color: var(--primary-color);
      color: var(--color-white);
    }
  }
  .rt-pagination__btn--prev {
    color: var(--text-color-grey-light);
    transform: rotate(180deg);
    border-color: #d5dde7;

    &:hover {
      background-color: var(--primary-color);
      color: var(--color-white);
    }

    @media (min-width: $width-mobile-h) {
      margin-right: var(--btn-icon-gap);
    }
  }

  .rt-pagination__btn--loaded {
    width: 28px;
    flex: 0 0 28px;
  }

  .rt-pagination__btn--next {
    color: var(--text-color-grey-light);
    border-color: #d5dde7;

    &:hover {
      background-color: var(--primary-color);
      color: var(--color-white);
    }

    @media (min-width: $width-mobile-h) {
      margin-left: var(--btn-icon-gap);
    }
  }
}
</style>
