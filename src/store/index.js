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
          href: "/slider-page",
          text: "Slider",
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
      searchValue: "",
      currentUserName: null,
    };
  },
  // getters
  getters: {
    getMainMenu(state) {
      return state.mainMenu;
    },
    getTotalPages(state) {
      if (!state.searchValue) {
        if (state.repos.length === 0) {
          return 1;
        } else {
          return Math.ceil(state.repos.length / state.reposPerPage);
        }
      } else {
        return Math.ceil(state.reposToRender.length / state.reposPerPage);
      }
    },
    getCurrentPage(state) {
      return state.page;
    },
    getCurrentUserName(state) {
      return state.currentUserName;
    },
    getReposToRednder(state) {
      let from = state.page * state.reposPerPage - state.reposPerPage;
      let to = state.page * state.reposPerPage;
      if (state.searchValue === "") {
        return (state.reposToRender = state.repos.slice(from, to));
      } else {
        state.reposToRender = state.repos.filter((rep) =>
          rep.name.includes(state.searchValue)
        );
        return state.reposToRender.slice(from, to);
      }
    },
  },
  actions: {
    setCurrentUserName(name) {
      this.currentUserName = name;
    },
    setRepos(payload) {
      this.repos = payload;
    },
    setCurrentPage(num) {
      console.log(num);

      this.page = num;
    },
    setSearchValue(value) {
      // if (this.reposToRender <= this.reposPerPage) {
      //   console.log(this.page);
      this.page = 1;
      // }
      this.searchValue = value;
    },
  },
});
