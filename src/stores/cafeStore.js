// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { async } from 'jshint/src/prod-params'

export const useCafeStore = defineStore('cafeStore', {
  state: () => ({
    dataBaseCafe: [],
    itemCafe: '',
    show_btn_back: false
  }),

  actions:{
    async getCafe() {
      await axios.get('https://bandaumnikov.ru/api/test/site/get-index')
      .then(res => this.dataBaseCafe = res.data.data)
      localStorage.setItem('dataBaseCafe', JSON.stringify(this.dataBaseCafe))
      // console.log(this.dataBaseCafe);
    },
    async getOneCafe(id) {
      await axios.get(`https://bandaumnikov.ru/api/test/site/get-view?id=${id}`)
      .then(res=>{
        // console.log(res.data.data)
        localStorage.setItem('cafeItem',JSON.stringify(res.data.data))
      } 
      )
    }
  }
})
