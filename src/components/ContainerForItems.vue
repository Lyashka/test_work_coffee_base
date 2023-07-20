<template>
  <div class="container" >
    <ItemCafe v-for="item of cafeStore.dataBaseCafe" :key="item.id" :item="item"/>
  </div>
</template>

<script>
import ItemCafe from './ItemCafe.vue';

import { useCafeStore } from '../stores/cafeStore';
export default {
    components: {
        ItemCafe
    },
    setup() {
     const cafeStore = useCafeStore();
     return{
        cafeStore
        }
    }
}
</script>

<style scoped>
.container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 2rem;
    max-width: 85rem;
    margin: 1rem auto;
    padding: 0 5rem;
}
@media screen and (max-width: 440px) {
    .container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 2rem;
    max-width: 85rem;
    margin:  1rem auto;
    padding: 0rem 0.5rem 0rem;
}
}
</style>