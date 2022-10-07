<script setup>
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import { ref, watch, onMounted, computed } from "vue";
import { useAppStore } from "../store";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

const store = useAppStore();
const props = defineProps({
  userNameProp: {
    type: String,
    required: true,
  },
});
const user = ref(null);

async function getUserInfo(name) {
  try {
    const response = await fetch(`https://api.github.com/users/${name}`).then(
      (res) => res.json()
    );
    user.value = response;
    return response;
  } catch (error) {
    console.log(error);
  }
}
onMounted(() => {
  if (props.userNameProp) {
    getUserInfo(props.userNameProp);
  }
});
watch(
  () => props.userNameProp,
  (newValue, oldValue) => {
    // console.log(
    //   "Watch props.selected function called with args:",
    //   newValue,
    //   oldValue
    // );
    getUserInfo(props.userNameProp);
  }
);
</script>
<template>
  <div v-if="user" class="user-card">
    <div class="user-card__image">
      <img :src="user.avatar_url" width="150" height="150" />
    </div>
    <div class="content">
      <a
        class="header"
        target="_blank"
        :href="`https://github.com/${userNameProp}`"
        >{{ user.name }}</a
      >
      <div class="meta">
        <span class="date"
          >Joined in {{ dayjs(user.created_at).format("ll") }}</span
        >,
        {{ dayjs(user.created_at).fromNow() }}
      </div>
      <div class="description">
        {{ user.bio || "no info about user" }}
      </div>
    </div>
    <div class="user-card__extra-content">
      <a v-if="user.blog" target="_blank" :href="user.blog"
        ><small>Blog site: </small>{{ user.blog }}</a
      >
      <a
        v-if="user.followers > 0"
        :href="`${user.followers_url}`"
        target="_blank"
      >
        <i class="user icon"></i>
        {{ user.followers }} followers
      </a>
    </div>
  </div>
</template>


<style scoped lang="scss">
.user-card {
  padding: 1rem;
  border: 1px solid var(--primary-color);
  box-shadow: 2px 2px 6px 0 var(--primary-color);
  border-radius: 1rem;
  a {
    &:hover {
      text-decoration: underline;
      text-decoration-color: var(--primary-color);
    }
  }
}
.user-card__image {
  display: flex;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid var(--primary-color);
  img {
    max-width: 100%;
    margin: 0 auto;
    display: block;
  }
}
.user-card__extra-content {
  display: grid;
  justify-items: start;
}
</style>
