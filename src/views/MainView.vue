<template>
  <main>
    <Header/>
    <containerForItems/>
  </main>
</template>

<script>
import containerForItems from '../components/containerForItems.vue';
import Header from '../components/Header.vue';

import {useCafeStore} from '../stores/cafeStore'

export default {
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    containerForItems, Header
  },
  setup() {
    const cafeStore = useCafeStore();
    cafeStore.getCafe()
    return {
      cafeStore
    }
  }
}

</script>

<style scoped>

</style>