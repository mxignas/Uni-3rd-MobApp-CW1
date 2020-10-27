<template>
    <div class="Checkout-page">
        <div class="d-flex bg-secondary">
            <router-link :to="{name:'Index'}">
            <div class="p-2 text-center text-dark btn"><strong>Home</strong></div>
            </router-link>
        </div>
        <h1 class="display-2">Checkout </h1>
        
    </div>
</template>

<script>
import Index from "@/components/Index.vue"

export default {
    name: "Checkout",
    data() {
        return {
            msg: "Checkout",
        }
    },
    computed: {
        lessons() {
            return this.$store.state.Lessons
        },
    }
}
</script>

<style scoped>

</style>