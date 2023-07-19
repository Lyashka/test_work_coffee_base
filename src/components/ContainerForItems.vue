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
    margin: 3rem auto;
    padding: 0 5rem;
}
</style>