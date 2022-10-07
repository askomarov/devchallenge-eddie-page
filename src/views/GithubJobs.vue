<script setup>
import VUserCard from "../components/VUserCard.vue";
import InputGroup from "../components/InputGroup.vue";
import Pagination from "../components/Pagination.vue";
import { ref, reactive, watch, onMounted, computed } from "vue";
import { useAppStore } from "../store";
const pageRange = ref(3);
const marginPages = ref(3);
const store = useAppStore();
const name = ref(null);
const newName = ref(null);
const state = reactive({});
const page = ref(1);
const from = ref(0);
const to = ref(1);
const searchValue = ref(null);
const userNameProp = computed(() => store.getCurrentUserName);
const user = ref(null);

async function getUserRepos(name) {
  const URL = `https://api.github.com/users/${name}/repos?page=1&per_page=100`;
  try {
    const response = await fetch(URL).then((res) => res.json());
    user.value = await fetch(`https://api.github.com/users/${name}`).then(
      (res) => res.json()
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}
const onClickGetUserRepos = () => {
  newName.value = name.value;
  if (newName.value) {
    getUserRepos(newName.value)
      .then((data) => {
        state.data = data;
        store.repos = data;
        store.setCurrentUserName(newName.value);
      })
      .catch((err) => console.log(err));
  }
};
const onBtnClickCopyText = (text) => {
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
  return store.setCurrentPage(page.value);
};

const onResize = () => {
  if (window.innerWidth < 768) {
    pageRange.value = 1;
    marginPages.value = 1;
  }
  return pageRange;
};

watch(searchValue, (newValue, oldValue) => {
  // console.log(newValue, oldValue);
  page.value = store.getCurrentPage;
  store.setSearchValue(newValue.toLowerCase());
  if (newValue) {
  } else {
    store.setSearchValue("");
  }
});
onMounted(() => {
  onResize();
});
</script>

<template>
  <div class="github container">
    <VUserCard
      v-if="userNameProp !== null"
      :userNameProp="userNameProp"
    ></VUserCard>
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
        @click.prevent="onClickGetUserRepos()"
        :disabled="!name"
      >
        Get Repos
      </button>
    </form>
    <div v-if="user">
      <h2>Link to user github page:</h2>
      <a class="user-name-link" :href="user.html_url">
        <img
          v-if="user"
          :src="user?.avatar_url || user?.gravatar_id"
          width="60"
          height="60"
          alt=""
        />
        {{ newName }}
      </a>
    </div>

    <div v-if="user && user.public_repos > 0" class="repos-section">
      <div>
        <h2>
          We have received a list of {{ store.repos.length }} repositories:
        </h2>
        <input type="text" v-model="searchValue" placeholder="Search..." />
      </div>

      <ul class="repos-list">
        <li
          v-for="rep in store.getReposToRednder"
          :key="rep.name"
          class="repo-item"
        >
          <div class="repo-item__group">
            <h4 class="repo-item__title">Link to the repository:</h4>
            <a class="repo-item__link" :href="rep.html_url" target="_blank">{{
              rep.name
            }}</a>
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
        :page-range="pageRange"
        :margin-pages="marginPages"
        :click-handler="clickCallback"
        :disabled-class="'rt-pagination__btn--disabled'"
        :container-class="'rt-pagination'"
        :page-link-class="'rt-pagination__btn'"
        :prev-link-class="'rt-pagination__btn rt-pagination__btn--prev'"
        :next-link-class="'rt-pagination__btn rt-pagination__btn--next'"
        :active-class="'rt-pagination__btn--current'"
      >
        <template #iconarrow>
          <svg width="7" height="11" viewBox="0 0 12 18" aria-hidden="true">
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
        <span>{{ store.getCurrentPage }}</span
        >/<span>{{ store.getTotalPages || 1 }}</span>
      </div>
    </div>
    <div
      v-if="newName === user?.login.toLowerCase() && user?.public_repos === 0"
    >
      <h3>
        {{ newName }}
        does not have any public repositories.
      </h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  height: 100%;
}
.github {
  h2 {
    font-size: 2rem;
    line-height: 1.2;
  }
  &.container {
    height: 100%;
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    max-width: 1000px;
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
  }
  .repos-section {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 0.5rem;
    margin: 0 auto;
    align-items: center;
  }
  .repos-list {
    flex: 1;
    display: grid;
    width: 90%;
    align-items: start;
    align-content: start;
    gap: 1rem;
    margin-bottom: 1rem;
    @media (min-width: $width-tablet) {
      gap: 2rem;
      grid-template-columns: 1fr 1fr;
    }
  }
  :deep(.btn-submit) {
    padding: 0.3rem;
    font-size: 0.7rem;
  }
  .repo-item {
  }
  .repo-item__group {
    padding: 0.5rem 0rem;
    margin-bottom: 0.5rem;
    display: grid;
    position: relative;
    grid-template-columns: auto 1fr;
    gap: 0.5rem;
    @media (min-width: $width-tablet) {
      column-gap: 2rem;
    }

    input {
      text-overflow: ellipsis;
    }
  }
  .repo-item__title {
    font-size: 0.8rem;
    display: inline-block;
    flex: 0 0 auto;
  }
  .repo-item__link {
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
      width: 60px;
      height: 60px;
      margin-right: 0.8rem;
    }
  }
}
</style>
