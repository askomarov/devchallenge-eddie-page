import { defineStore } from "pinia";

export const useAppStore = defineStore("AppStore", {
  // state
  state: () => {
    return {
      mainMenu: [
        {
          href: "/",
          text: "Home",
        },
        {
          href: "/404",
          text: "404",
        },
        {
          href: "/recipe",
          text: "Recipe",
        },
        {
          href: "/myteam",
          text: "MyTeam",
        },
        {
          href: "/github",
          text: "Github",
        },
        {
          href: "/neoncursor",
          text: "Neon Cursor",
        },
      ],
      repos: [],
      reposPerPage: 5,
      page: 1,
      reposToRender: [],
    };
  },
  // getters
  getters: {
    getMainMenu(state) {
      return state.mainMenu;
    },
    getTotalPages(state) {
      if (state.repos.length === 0) {
        return 1;
      } else {
        return Math.ceil(state.repos.length / state.reposPerPage);
      }
    },
    getReposToRednder(state) {
      let from = state.page * state.reposPerPage - state.reposPerPage;
      let to = state.page * state.reposPerPage;
      return (state.reposToRender = state.repos.slice(from, to));
    },
  },
  actions: {
    setRepos(payload) {
      this.repos = payload;
    },
    setCurrentPage(num) {
      this.page = num;
    },
  },
});
