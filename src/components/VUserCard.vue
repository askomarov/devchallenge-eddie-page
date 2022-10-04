<script setup>
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import { ref, watch, onMounted, computed } from "vue";
import { useAppStore } from "../store";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

const store = useAppStore();
// const props = defineProps({
//   userName: {
//     type: String,
//     required: true,
//   },
// });

const userName = computed(() => store.getCurrentUserName);
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

watch(userName, (newValue, oldValue) => {
  if (userName) {
    getUserInfo(userName.value);
  } else {
  }
});
// console.log(props.userName);

// onMounted(() => getUserInfo(props.userName));
</script>
<template>
  <div v-if="user" class="ui card">
    <div class="image">
      <img :src="user.avatar_url" width="150" height="150" />
    </div>
    <div class="content">
      <a
        class="header"
        target="_blank"
        :href="`https://github.com/${userName}`"
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
    <div class="extra content">
      <a v-if="user.blog" target="_blank" :href="user.blog"
        >Blog site: {{ user.blog }}</a
      >
      <a :href="`https://github.com/${userName}?tab=followers`" target="_blank">
        <i class="user icon"></i>
        {{ user.followers || 0 }} followers
      </a>
    </div>
  </div>
</template>


<style>
</style>
