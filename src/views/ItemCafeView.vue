<template>
  <div>
    <Header @updateData="updateData"/>
    <div class="itemContainer">
      <div class="container_name_img">
        <h3><span>{{ name }}</span></h3>
          <img :src="urlPhoto" >
      </div>
     

          <div class="textStyle">
            <!-- <h3>Название: <span>{{ name }}</span></h3> -->
            <h3>Бизнес-ланч: <span>{{ business_lunch }}</span></h3>
            <h3>Кухня: <span>{{ cuisine }}</span></h3> 
            <h3>Средний чек: <span>{{ price }} {{ nominal }}</span></h3>
            <h3>Адрес: <span>{{ address }}</span></h3>
            <h3>Дистанция: <span>{{ distance }} {{ distanceNominal }}</span></h3>
            <h3>Ориентир: <span>{{ landmark }}</span></h3>
            <h3>Сколько идти: <span>{{ time }} {{ timeName }}</span></h3>
            
          </div>
    </div>
  </div>
    
</template>

<script>
import { useCafeStore } from '../stores/cafeStore';
import Header from '../components/Header.vue';
export default {
  components:{
    // eslint-disable-next-line vue/no-reserved-component-names
    Header
  },
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
  methods:{
    updateData() {
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

    // console.log(this.cafeStore.itemCafe);
    }
  },

  mounted() {
    this.updateData()
  },

  
}
</script>

<style scoped>
.container_name_img{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.itemContainer{
  display: flex;
  margin-top: 3rem ;
  flex-direction: row;
  justify-content:space-around;
  flex-flow: wrap;
}
img{
  margin-left: 2rem; 
  max-width: 50rem;
  max-height: 50rem; 
  border-radius: 0.25rem;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
}
h3 {
  font-size: xx-large;
}
.textStyle{
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  color:rgba(0, 0, 0, 0.8)
}
span{
  font-weight:normal;
}

/* @media screen and (max-width: 1450px) {
  .itemContainer{
  display: flex;
  margin-top: 3rem ;
  flex-direction: column;
  justify-content: center;
  flex-flow: wrap;
}
img{
  margin: auto; 
  max-width: 40rem;
  max-height: auto; 
  border-radius: 0.25rem;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
}
.textStyle{
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
} */

/* } */
@media screen and (max-width: 1400px) {
  .itemContainer{
  display: flex;
  margin-top: 3rem ;
  flex-direction: column;
  justify-content:space-around;
  padding-right: 1rem;
}

img{
  margin-left: 1rem; 
  max-width: 100%;
  max-height: auto;
  border-radius: 0.25rem;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
}
}
</style>