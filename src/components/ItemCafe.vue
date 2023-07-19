<template>
    <div class="container_item" >
      <div class="itemName">{{ item.name }}</div>

      <transition name="fade">
        <button v-if="showButtons" class="prevInfoCafe"  @mouseout="showButtons = false" @click="openItemCafe">
          <div class="textStyle">Средний чек: {{ price }} {{ nominal }}</div>
          <div class="textStyle">Кухня: {{ cuisine }}</div>
          <div class="textStyle">Идти: {{ time }} {{ timeName }}</div>
        </button>
       
      </transition>
      
      <img :src="urlPhoto" @mouseover="showButtons = true"/>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        urlPhoto: '',
        showButtons: false,
        price: '',
        nominal: '',
        cuisine: '',
        time: '',
        timeName: '',
      }
    },
    props: {
      item: {
        type: Object,
        required: true
      }
    },

    methods:{
        openItemCafe() {
            localStorage.setItem('cafeItem',JSON.stringify(this.item))
            this.$router.push('/Cafe')
        }
    },

    mounted() {
      if (this.item.photo === '') {
        this.urlPhoto = 'https://www.vladtime.ru/uploads/posts/2017-05/1495353393_i.jpg';
      } else {
        this.urlPhoto = this.item.photo;
      }

      if (this.item.price === 0){
        this.price = '-'
      }
      else {
        this.price = this.item.price
        this.nominal = 'р'
      }

      if(this.item.cuisine === ''){
        this.cuisine = '-'
      }
      else{
        this.cuisine = this.item.cuisine
      }

      if(this.item.time === 0) {
        this.time = '-'
      }
      else{
        this.time = this.item.time
        this.timeName = 'мин'
      }
    }
  }
  </script>
  
  <style scoped>
  .container_item {
    position: relative;
    margin-top: 1.5rem;
  }
  .prevInfoCafe {
 
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.25rem;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
  }
  .itemName{
    font-size: x-large;
    color:black;
    font-weight: bold;
  }
  .textStyle{
    color: aliceblue;
    pointer-events: none;
    font-size: xx-large;
    margin-left: 1rem;
    margin-top: 1rem;
    background-color: rgba(0, 0, 0, 0);
  }
  
  .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
  </style>