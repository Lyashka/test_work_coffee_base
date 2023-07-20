
<template>
  <div class="header_container">
    <h2 v-if="this.cafeStore.show_btn_back == false">Coffee Base</h2>
    <button v-if="this.cafeStore.show_btn_back" @click="btn_back()" class="back_btn"><img :src="Back"></button>
    <button @click="randomCafe()" class="random_btn"><img :src="Cube"></button>
  </div>
</template> 

<script>
import { useCafeStore } from '../stores/cafeStore';
import Cube from '../components/icons/cube.svg'
import Back from '../components/icons/Back.svg'
export default {
    setup(){
        const cafeStore = useCafeStore() 
        return{
            cafeStore
        }
    },
    data(){
        return{
            Cube:Cube,
            Back:Back,
            arrayCafe: [],
            randomElement: '',
            
        }
    },
    methods:{
        randomCafe() {
    
            // console.log(this.cafeStore.show_btn_back);
            this.cafeStore.show_btn_back = true
            localStorage.setItem('show_btn_back', JSON.stringify(this.cafeStore.show_btn_back))
            // console.log(this.cafeStore.show_btn_back);

            if(this.arrayCafe.length===0){
                const randomIndex = Math.floor(Math.random() * this.cafeStore.dataBaseCafe.length);
                this.randomElement = this.cafeStore.dataBaseCafe[randomIndex];
                this.arrayCafe = this.cafeStore.dataBaseCafe.filter(item=> item.id !== this.randomElement.id)
                localStorage.setItem('arrayCafe', JSON.stringify(this.arrayCafe))
                // console.log(this.arrayCafe);
            }else{
                const randomIndex = Math.floor(Math.random() * this.arrayCafe.length);
                this.randomElement = this.arrayCafe[randomIndex];
                this.arrayCafe = this.arrayCafe.filter(item=> item.id !== this.randomElement.id)
                localStorage.setItem('arrayCafe', JSON.stringify(this.arrayCafe)) 
                // console.log(this.arrayCafe);
            }
            localStorage.setItem('cafeItem', JSON.stringify(this.randomElement))
            // console.log(this.randomElement);
            this.$router.push('/Cafe')
            this.$emit('updateData')
        },

        btn_back(){
            this.cafeStore.show_btn_back = false
            localStorage.setItem('show_btn_back', JSON.stringify(this.cafeStore.show_btn_back))
            this.$router.push('/')
        }
    },
    mounted(){
        if (JSON.parse(localStorage.getItem('show_btn_back')) !== null) {
            this.cafeStore.show_btn_back = JSON.parse(localStorage.getItem('show_btn_back'))
        }
       
    //    console.log(this.cafeStore.show_btn_back);
       
    }
}
</script>

<style scoped>
.header_container{
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:rgba(213, 213, 77, 0.339);
    height: 3rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05); 
}
.random_btn{
    width: 2rem;
    border: none;
    background: none;
    margin-right: 0.5rem;
    
}
img{ 
    border-radius: 6px;
    background: none;
}
h2{
    background: none;
    margin-left: 0.5rem;
}
.back_btn{
    width: 2rem;
    border: none;
    background: none;
    margin-left: 0.5rem;
}

</style>