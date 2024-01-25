<script setup>
    // import { useRouter, useRoute } from 'vue-router'
    // import product_list from '../components/products';
    // import products from '../components/products.vue';
    // // const router = useRouter();
    // const product_list2 = product_list;
    // const route = useRoute()
    // const prodId = route.params.id
    // const prodId2 = prodId.replace(':', '')
    // console.log(prodId2)
    import cartProd from '../components/cartProd.vue';
    import {onMounted, ref} from 'vue';
    const cart = ref([])
    onMounted(()=>{
        cart.value = JSON.parse(localStorage.getItem('cart'))
        console.log(cart.value)
    })
</script>
<template>
    <div>
        <div class="p-2">
            <h2 class="text-md font-semibold uppercase my-4">Cart</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div :class="`mb-2`" v-for="(prod, index) in cart" :key="index">
                        <cartProd :url="`${prod.url}`" :id="`${index}`" :item="`${prod.item_name}`" :liked="`${prod.liked}`"/>
                </div>
            </div>
        </div> 
    </div>
</template>