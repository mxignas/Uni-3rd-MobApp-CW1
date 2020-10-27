<template>
    <div class="Checkout-page">
        <div class="d-flex bg-secondary">
            <router-link :to="{name:'Index'}">
            <div class="p-2 text-center text-dark btn"><strong>Home</strong></div>
            </router-link>
        </div>
        <h1 class="display-2">Checkout </h1>
        <Index ref="index">
        <button @click="test()">asdasdasdasdasdasdasdasdasdasd</button>
        </Index>
    </div>
</template>

<script>
import Index from "@/components/Index.vue"

export default {
    name: "Checkout",
    components: {
        Index,
    },
    // props: [
    //     {
    //         id, url, Title, Activity, Location, Price, Availability
    //     }
    // ],
    data() {
        return {
            msg: "Checkout",
        }
    },
    methods: {
        test() {
            console.log(this.$refs.index)
        }
    }
}
</script>

<style scoped>

</style>