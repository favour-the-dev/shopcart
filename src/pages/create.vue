<script setup>
    import {ref, watch, onUnmounted, onMounted} from 'vue';
    import product_list from '../components/products';
    const prodname = ref('')
    const prodDesc = ref('')
    const prodPrice = ref('')
    const prodSrc = ref('')
    const prodprod = ref('')
    const prod_list2 = product_list;
    const createNewProd = ()=>{
        const newprod = {
            item_name : prodname.value,
            desc: prodDesc.value,
            price: prodPrice.value,
            Url: prodSrc.value,
            producer: prodprod.value,
            liked: false
        }

        prod_list2.push(newprod)

        watch(prod_list2, (newval)=>{
            localStorage.setItem('Products', JSON.stringify(newval))
        })
        console.log(prod_list2)
        onMounted(()=>{
            localStorage.setItem('Products', JSON.stringify(prod_list2.value))
            prod_list2.value = JSON.parse(localStorage.getItem('Products'))
        })
        onUnmounted(()=>{
            product_list = localStorage.setItem('Products', JSON.stringify(prod_list2.value))
        })
    }
</script>
<template>
    <div class="p-2">
        <div class="flex flex-col">
            <form @submit.prevent="createNewProd" class="flex flex-col space-y-2">
             <h1 class="capitalize text-sm font-semibold">Create a new Product</h1>   
             <input type="text" placeholder="name of product" class="capitalize w-full md:w-1/2 p-2 border-2 border-blue-400" name="nameprod" v-model="prodname">
             <textarea name="descofprod" placeholder="description of product" id="" class="capitalize p-2 border-2 border-blue-400 w-full md:w-1/2" cols="30" rows="5" v-model="prodDesc"></textarea>
             <div class="w-full md:w-1/2 flex gap-2">
                <input type="text" name="price" placeholder="enter Price" class="p-2 w-1/3 border-2 border-blue-400 capitalize" v-model="prodPrice">
                <input type="text" name="price" placeholder="Image src" class="p-2 w-1/3 border-2 border-blue-400 capitalize" v-model="prodSrc">
                <input type="text" name="price" placeholder="producer" class="p-2 w-1/3 border-2 border-blue-400 capitalize" v-model="prodprod">
            </div>
            <input type="submit" class="w-full md:w-1/2 p-2 bg-blue-400 text-white uppercase text-sm font-bold" value="Create new Product">
            </form>
        </div>
    </div>
</template>