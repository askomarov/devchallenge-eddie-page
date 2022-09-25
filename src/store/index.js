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
    };
  },
  // getters
  getters: {
    getMainMenu(state) {
      return state.mainMenu;
    },
  },
});
