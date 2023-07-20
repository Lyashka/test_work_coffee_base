// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
// import { async } from 'jshint/src/prod-params'

export const useCafeStore = defineStore('cafeStore', {
  state: () => ({
    dataBaseCafe: [],
    itemCafe: '',
    show_btn_back: false,
    show_load_bar: false,
  }),

  actions:{
    async getCafe() {
      this.show_load_bar = true

      await axios.get('https://bandaumnikov.ru/api/test/site/get-index')
      .then(res => this.dataBaseCafe = res.data.data)
      localStorage.setItem('dataBaseCafe', JSON.stringify(this.dataBaseCafe))

      this.show_load_bar = false
    },
    async getOneCafe(id) {
      this.show_load_bar = true

      await axios.get(`https://bandaumnikov.ru/api/test/site/get-view?id=${id}`)
      .then(res=>{
        // console.log(res.data.data)
        localStorage.setItem('cafeItem',JSON.stringify(res.data.data))
        } 
      )
      
      this.show_load_bar = false
    }
  }
})
