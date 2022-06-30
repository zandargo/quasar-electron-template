import { defineStore } from 'pinia';

export const useDefStore = defineStore('app', {
  state: () => ({
    tab: 'tab1',
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    setTab(newTab) {
      this.tab = newTab
    },
  },
});
