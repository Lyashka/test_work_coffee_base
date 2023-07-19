<template>
    <div class="itemContainer">
          <img :src="urlPhoto" >

          <div class="textStyle">
            <h3>Название: <span>{{ name }}</span></h3>
            <h3>Бизнес-ланч: <span>{{ business_lunch }}</span></h3>
            <h3>Кухня: <span>{{ cuisine }}</span></h3> 
            <h3>Средний чек: <span>{{ price }} {{ nominal }}</span></h3>
            <h3>Адресс: <span>{{ address }}</span></h3>
            <h3>Дистанция: <span>{{ distance }} {{ distanceNominal }}</span></h3>
            <h3>Ориентир: <span>{{ landmark }}</span></h3>
            <h3>Сколько идти: <span>{{ time }} {{ timeName }}</span></h3>
            
          </div>
    </div>
</template>

<script>
import { useCafeStore } from '../stores/cafeStore';
export default {
  setup(){
    const cafeStore = useCafeStore()
    return{
      cafeStore
    }
  },

  data() {
    return {
      name: '',
      business_lunch: '',
      cuisine: '',
      distance: '',
      landmark: '',
      price: '',
      time: '',
      address: '',

      nominal: '',
      timeName: '',
      urlPhoto: '',
      distanceNominal: '',
    }
  },

  mounted() {
    this.cafeStore.itemCafe = JSON.parse(localStorage.getItem('cafeItem'))
    this.name = this.cafeStore.itemCafe.name

    if(this.cafeStore.itemCafe.business_lunch){
      this.business_lunch = 'есть'
    }
    else{
      this.business_lunch = 'нет'
    }

    // this.cuisine = this.cafeStore.itemCafe.cuisine

    if(this.cafeStore.itemCafe.distance === 0){
      this.distance = '-'
    }
    else{
      this.distance = this.cafeStore.itemCafe.distance
      this.distanceNominal = 'м'
    }
    
    if(this.cafeStore.itemCafe.landmark === '') {
      this.landmark = '-'
    }
    else{
      this.landmark = this.cafeStore.itemCafe.landmark
    }

    if (this.cafeStore.itemCafe.photo === '') {
        this.urlPhoto = 'https://www.vladtime.ru/uploads/posts/2017-05/1495353393_i.jpg';
      } else {
        this.urlPhoto = this.cafeStore.itemCafe.photo;
      }
    if (this.cafeStore.itemCafe.price === 0){
        this.price = '-'
      }
      else {
        this.price = this.cafeStore.itemCafe.price
        this.nominal = 'р'
      }

      if(this.cafeStore.itemCafe.cuisine === ''){
        this.cuisine = '-'
      }
      else{
        this.cuisine = this.cafeStore.itemCafe.cuisine
      }

      if(this.cafeStore.itemCafe.time === 0) {
        this.time = '-' 
      }
      else{
        this.time = this.cafeStore.itemCafe.time
        this.timeName = 'мин'
      }
      if(this.cafeStore.itemCafe.address === ''){
        this.address = '-'
      }else{
        this.address = this.cafeStore.itemCafe.address
      }

    console.log(this.cafeStore.itemCafe);
  },

  
}
</script>

<style scoped>

.itemContainer{
  display: flex;
  margin-top: 3rem ;
  flex-direction: row;
  justify-content:space-around;
  flex-flow: wrap;
}
img{
  margin-left: 2rem; 
  max-width: 60rem;
  max-height: 50rem; 
}
h3 {
  font-size: xx-large;
}
.textStyle{
  display: flex;
  flex-direction: column;
  justify-content:space-around;
}
span{
  font-weight:normal;

}
</style>