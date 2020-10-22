<template>
    <div class="Checkout">
        <div class="d-flex bg-secondary">
            <router-link :to="{name:'Index'}">
            <div class="p-2 text-center text-dark btn"><b>Home</b></div>
            </router-link>
        </div>
        <h1 class="display-2">Checkout</h1>
    </div>
</template>

<script>
export default {
    name: "Checkout",
    data() {
        return {
            msg: "Checkout"
        }
    }
}
</script>

<style scoped>

</style>