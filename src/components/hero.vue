<script setup>
    import {ref,watch, onMounted, onUnmounted} from 'vue';
    import prod1 from '../assets/images/prod-1.jpg'
    import prod2 from '../assets/images/prod-2.jpg'
    import prod3 from '../assets/images/prod-3.jpg'
    import prod4 from '../assets/images/prod-4.jpg'
    import prod5 from '../assets/images/prod-5.jpg'
    import prod6 from '../assets/images/prod-6.jpg'
    import prod7 from '../assets/images/prod-7.jpg'
    import prod8 from '../assets/images/prod-8.jpg'
    import prod9 from '../assets/images/prod-9.jpg'
    import prod10 from '../assets/images/prod-10.jpg'
    import products from './products.vue';
    import product_list from './products'
    const images_list = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10];
    const prod_list = product_list;
    const newPodlist = ref([])
    prod_list.forEach((prod, index)=>{
        prod.url = images_list[index]
        newPodlist.value.push(prod)
        watch(newPodlist, (newval)=>{
        localStorage.setItem('Products', JSON.stringify(newval))
    }, {deep: true})
    })
    console.log(newPodlist.value)
    onMounted(()=>{
        newPodlist.value = localStorage.setItem('Products', JSON.stringify(newPodlist.value))
        newPodlist.value = JSON.parse(localStorage.getItem('Products')) || []
    })
    onUnmounted(()=>{
        newPodlist.value = JSON.parse(localStorage.getItem('Products')) || []
        newPodlist.value = localStorage.setItem('Products', JSON.stringify(newPodlist.value))
    })
    // function getImagPath(image){
    //     return require(`@/assets/images/${image}`)
    // }
</script>
<template>
    <div class="p-2">
        <h2 class="text-md font-semibold uppercase my-4">Products</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div :class="`mb-2`" v-for="(prod, index) in newPodlist" :key="index">
                <products :url="`${prod.url}`" :item="`${prod.item_name}`"/>
            </div>
        </div>
    </div>    
</template>