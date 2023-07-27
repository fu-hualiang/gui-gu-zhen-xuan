import { defineStore } from 'pinia';

const useSettingStore = defineStore('Setting', {
  state: () => {
    return { fold: false };
  },
  actions: {
    switchFold(){
      this.fold=!this.fold;
    }
  },
  getters: {},
});

export default useSettingStore;
