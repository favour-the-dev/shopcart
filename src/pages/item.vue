<script setup>
    import { useRouter, useRoute } from 'vue-router'
    import product_list from '../components/products';
    // const router = useRouter();
    const product_list2 = product_list;
    const route = useRoute()
    const prodId = route.params.id
    const prodId2 = prodId.replace(':', '')
    console.log(prodId2)
</script>
<template>
        <div class="mt-4" v-for="(prod, index) in product_list2" :key="`${index}`">
            <div class="flex flex-col space-x-4 md:items-center md:flex-row w-full" v-if="prodId2 == index">
                <div class="md:w-1/2 h-72 mb-2 md:mb-0 md:h-[500px]">
                    <img :src="`${prod.url}`" alt="prodimage" class="rounded-md w-full h-full">    
                </div>
                <div class="md:w-1/2 flex flex-col space-y-4">
                    <div class="text-blue-400 font-bold uppercase text-xl">{{prod.item_name}}</div>
                    <div>
                        <h2 class="font-semibold uppercase text-sm">description</h2>
                        <p>{{prod.desc }}</p>
                    </div>
                    <div class="flex items-center space-x-1">
                        <p class="uppercase font-semibold text-sm">Price:</p><p>{{ prod.price }}</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <p class="uppercase font-semibold text-sm">Manufacturer:</p><p>{{ prod.prod }}</p>
                    </div>
                </div>
            </div>
        </div>
</template>