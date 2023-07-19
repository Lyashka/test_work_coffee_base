// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCafeStore = defineStore('cafeStore', {
  state: () => ({
    dataBaseCafe: [],
    itemCafe: ''
  }),

  actions:{
    async getCafe() {
      await axios.get('https://bandaumnikov.ru/api/test/site/get-index')
      .then(res => this.dataBaseCafe = res.data.data)
      localStorage.setItem('dataBaseCafe', JSON.stringify(this.dataBaseCafe))
      console.log(this.dataBaseCafe);
    }
  }
})
