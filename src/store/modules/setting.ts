import { defineStore } from 'pinia';

const useSettingStore = defineStore('Setting', {
  state: () => {
    return {
      fold: false,
      refresh: false,
    };
  },
  actions: {
    switchFold() {
      this.fold = !this.fold;
    },
    refreshInfo() {
      return this.refresh;
    },
    startRefresh() {
      this.refresh = true;
    },
    finishRefresh() {
      this.refresh = false;
    },
  },
  getters: {},
});

export default useSettingStore;
