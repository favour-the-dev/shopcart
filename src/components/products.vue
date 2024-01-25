<script setup>
    import { useRouter, useRoute } from 'vue-router'
    // import {ref} from 'vue';
    const router = useRouter();
    const props = defineProps({
        url: String,
        id: String,
        item: String,
    })
    // const added = ref(false)
    const test1 = props.url
    const changeRoute = (id)=>{
        router.push(`/item/:${id}`)
    }
    
</script>

<template>
    <div class="p-2 w-4/3 h-full flex flex-col border-2 border-black border-opacity-50 items-center justify-center rounded-lg shadow-md hover:scale-[1.04] duration-100 ease-linear">
        <div class="w-full h-28 md:w-full md:h-36 rounded-lg shadow-sm" @click="changeRoute(props.id)">
            <img :src="test1" alt="" class="rounded-lg w-full h-full">
        </div>
        <div class="flex flex-col items-center">
            <p class="capitalize font-semibold text-center text-sm my-2">{{props.item}}</p>
            <button class="border-2 border-blue-400 rounded-full p-1 w-8 h-8 text-blue-400 hover:bg-blue-400 hover:text-white" @click="$emit('addToCart')"><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
    </div>

</template>