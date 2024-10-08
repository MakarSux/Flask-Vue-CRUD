<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const msg = ref()

const getMessage = () => {
    const path = 'http://localhost:5000/ping';
    axios.get(path)
        .then((res) => {
            msg.value = res.data;
        })
        .catch((error) => {
            console.error(error)
        })
}

onMounted(()=>{
    getMessage()
})

</script>

<template>
    <div class="container">
        <button type="button" class="btn btn-primary">{{ msg }}</button>
    </div>
</template>