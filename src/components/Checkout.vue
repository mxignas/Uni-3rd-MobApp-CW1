<template>
    <div class="Checkout-page">
        <div class="d-flex bg-secondary align-text">
            <div class="row">
                <router-link :to="{name:'Index'}">
                    <div class="p-2 text-center text-dark btn" id="home"><strong>Home</strong> </div>
                </router-link>
                <div class="p-2 bg-info text-center" id="checkout"><strong>Checkout</strong></div>
            </div>
        </div>
        <div class="container main">
            <div class="row">
                <div class="col-7 bg-secondary" >
                    <div class="row">
                        <div class="card bg-info" v-for="lesson in cart">
                            <div class="card-body bg-info">
                                <h3 class="card-title"> <strong>{{ lesson.lessonActivity }}</strong></h3>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Subject: </strong>{{ lesson.lessonActivity }} </li>
                                <li class="list-group-item"><strong>Location: </strong>{{ lesson.lessonLocation }} </li>
                                <li class="list-group-item"><strong>Price: </strong>{{ lesson.lessonPrice }} </li>
                                </ul>
                            </div>
                                <div class="card-body " id="remove">
                                    <button type="button" class="btn btn-info" @click='rmvFromCart(lesson)'>Remove From Cart</button>
                                </div>
                        </div>
                    </div>  
                </div>
                <div class="col bg-danger">
                    column 2 of 2
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
    name: "Checkout",
    data() {
        return {
            
        }
    },
    computed: {
        cart() {
            return this.$store.state.cart;
        }
    },
    methods: {
        rmvFromCart(lesson) {
            const lssn = this.$store.state.Lessons.find(lssn => {
                return lssn.lessonID == lesson.id
            });
            this.$store.state.cart.splice(this.$store.state.cart.indexOf(lesson), 1);
        }
    }
}
</script>

<style scoped>
    #home {
        margin-left: 12px;
        text-align: justify;
    }
    #checkout {
        text-align: justify;
    }
    .container.main {
        padding-top: 40px;
    }
    .card {
    width: 20rem;
    margin: 10px 5px;
  }
</style>