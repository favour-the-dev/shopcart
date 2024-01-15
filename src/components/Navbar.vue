<script setup>
    import logo from '../assets/images/cartlogo.jpg'
    import {ref, onMounted, watch} from 'vue';
    const  clicked = ref(false)

    const clickedbutton = ()=>{
        clicked.value = !clicked.value
    }
</script>

<template>
    <div class="md:p-2 w-full mb-2">
        <div class="flex items-center justify-between">
          <div class="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center gap-2">
            <img :src="`${logo}`" alt="" class="w-full h-full rounded-full">
            <p class="font-bold uppercase"><span class="text-blue-400">Shop</span>cart</p>
          </div>
          <div class="">
            <div :class="`${clicked ? 'top-0 left-0' : 'top-[-100%] left-0'} absolute md:relative  w-full md:w-fit flex flex-col space-y-4 md:space-y-0 bg-black bg-opacity-95 md:bg-white text-white md:text-black md:flex-row space-x-4 items-center justify-center md:justify-start text-sm p-4 md:p-0 min-h-[50%] md:h-fit duration-150 ease-linear`" @click="clicked = !clicked">
                <router-link to="/" class="hover:text-blue-400 font-semibold">Home</router-link>
                <router-link to="/create" class="hover:text-blue-400 font-semibold">Create-product</router-link>
                <router-link to="/cart" class="font-semibold border-2 border-blue-400 rounded-full p-1 w-8 h-8 text-blue-400 hover:bg-blue-400 hover:text-white"><i class="fa-solid fa-cart-shopping"></i></router-link>
            </div>
            <div class="md:hidden w-6 flex flex-col space-y-1" v-if="!clicked" @click="clickedbutton">
                <div class="w-full bg-black p-[1px] hover:bg-opacity-80"></div>
                <div class="w-full bg-black p-[1px] hover:bg-opacity-80"></div>
                <div class="w-full bg-black p-[1px] hover:bg-opacity-80"></div>
            </div>
            <div class="relative text-white z-50 font-bold" v-else @click="clickedbutton">
                <p class="text-xl">X</p>
            </div>
          </div>
        </div>
      </div>
</template>