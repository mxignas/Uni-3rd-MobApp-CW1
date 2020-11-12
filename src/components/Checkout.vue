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
        <h1 class="display-3 text-center text-info">Your cart</h1>
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
                <div class="col">
                    <form>
                        <h2 class="display-4 text-center text-info">Your information</h2>
                        <div class="row">
                            <div class="col">
                                <label for="first_name">First name</label>
                                <input type="text" class="form-control" placeholder="First name" v-model="order.firstName">
                            </div>
                            <div class="col">
                                <label for="last_name">Last name</label>
                                <input type="text" class="form-control" placeholder="Last name" v-model="order.lastName">
                            </div>
                        </div>
                        <p></p>
                        <div class="form-group">
                            <label for="phone_number">Phone number</label>
                            <input type="number" id="phonevalidation" class="form-control" placeholder="Enter phone number" onkeypress="belekas(this.id,event)" v-model="order.phone" maxlength="3">
                        </div>
                        <div class="form-group">
                            <label for="email_address">Email address</label>
                            <input type="email" class="form-control" placeholder="Enter email" v-model="order.email">
                        </div>
                        <div class="display-4 text-center">
                            Order information
                        </div>
                        <p></p>
                        <p><strong>First Name: </strong>{{ order.firstName }}</p>
                        <p><strong>Last Name: </strong>{{ order.lastName }}</p>
                        <p><strong>Phone Number: </strong>{{ order.phone }}</p>
                        <p><strong>Email: </strong>{{ order.email }}</p>
                        <button type="submit" class="btn btn-primary" @click="test">Submit</button>
                    </form>
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
        },
        order() {
            return this.$store.state.order;
        }
    },
    methods: {
        rmvFromCart(lesson) {
            const lssn = this.$store.state.Lessons.find(lssn => {
                return lssn.lessonID == lesson.id
            });
            this.$store.state.cart.splice(this.$store.state.cart.indexOf(lesson), 1);
        },
        PhoneValidation() {
            let value = document.getElementById('phonevalidation').value
            if(value.length < 9) {
            return false
            }
        },
        submitalert() {
            // if(PhoneValidation) {
            alert("Succesfully purchased our product!")
            this.$store.state.cart = []
            this.$router.push({ name: 'Index' })
            // }
        },
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
    margin: 10px 10px;
  }
  input:invalid:focus {
  background-image: linear-gradient(pink, lightgreen);
}
</style>