<template>
  <main>
    <Header/>
      <div v-if="this.cafeStore.show_load_bar===true" class="load_bar"><span class="loader"></span></div>
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
.load_bar{
    display: flex;
    justify-content: center;
    font-size: x-large;
  }

  /* Loader */
  .loader, .loader:before, .loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation-fill-mode: both;
  animation: bblFadInOut 1.2s infinite ease-in-out;
}
.loader {
  color: rgba(0, 0, 0, 0.8);
  font-size: 7px;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}

@keyframes bblFadInOut {
  0%, 80%, 100% { box-shadow: 0 2.5em 0 -1.3em }
  40% { box-shadow: 0 2.5em 0 0 }
}
</style>