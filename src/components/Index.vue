<template>
  <div class="MainPage">
    <!-- <nav aria-label="breadcrumb" id="bread">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Home</li>
        <li class="breadcrumb-item align-self-end"> Checkout</li>
      </ol>
    </nav> -->

    <div class="d-flex bg-secondary">
      <div class="p-2 bg-info text-center"><strong>Home</strong></div>
      <div class="ml-auto p-2" v-if="cart.length > 0">
        <button type="button" class="btn btn-default bg-info text-weight-bolder" id="cartbutton">
          <router-link :to="{name: 'Checkout', params: {items: Lessons.id}}">
          <div class="glyphicon glyphicon-shopping-cart text-dark ">
            Shopping cart: <strong> {{ cart.length }} </strong> items
          </div>
          </router-link>
          <!-- Go to cart: <b> {{ cart.length }} </b> items -->
        </button>
      </div>
    </div>


    <div class="container bg-light text-muted">
      <div class="row">

        <div class="sorting-div">
          <h4><strong>Sort by:</strong></h4>
          <div class="btn-group-vertical btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-secondary" v-for="blist in ByList" :key="blist.id" @:click="sortBy(blist.label)">
              <input type="radio" name="options" id="Subject" autocomplete="off" checked> {{ blist.label }}
            </label>
          </div>

            <br>
            <p></p>

          <div class="btn-group-vertical btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-secondary" v-for="hlist in HowList" :key="hlist.id">
              <input type="radio" name="options" id="Ascending" autocomplete="off" checked> {{ hlist.label }}
            </label>
          </div>
        </div>

        <div class="col-md-6 col-lg-3" v-for="(lesson, index) in Lessons" :key="lesson.index">
        
          <div class="card" >
            <img :src="lesson.url" alt="" class="card-img-top img-fluid">
              <div class="card-body">
                <h3 class="card-title">{{ lesson.Title }}</h3>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Subject: {{ lesson.Activity }} </li>
                  <li class="list-group-item">Location: {{ lesson.Location }} </li>
                  <li class="list-group-item">Price: {{ lesson.Price }} </li>
                  <li class="list-group-item text-danger">Availability: {{ lesson.Availability }} </li>
                </ul>
              </div>
              <div class="card-body " id="addtocart">
                <button type="button" class="btn btn-info" @click='addToCart(index)' v-if="lesson.Availability > 0">Add To Cart</button>
              </div>
          </div>

        </div>
      </div>
      <!-- </div> -->
    </div>

  </div>
</template>

<script>
import mathImg from "../assets/Math.png"
import englishImg from "../assets/English.png"
import artImg from "../assets/Art.png"
import geographyImg from "../assets/Geography.png"
import scienceImg from "../assets/Science.png"
import boxingImg from "../assets/Boxing.png"
import basketballImg from "../assets/Basketball.png"
import volleyballImg from "../assets/Volleyball.png"
import tennisImg from "../assets/Tennis.png"
import soccerImg from "../assets/Soccer.png"

// import Checkout from "@/components/Checkout.vue"

export default {
  name: 'Index',
  // components: {
  //   Checkout
  // },
  data () {
    return {
      cart: [],
      ByList: [
        { label: "Subject"},
        { label: "Location"},
        { label: "Price"},
        { label: "Availability"}
      ],
      HowList: [
        { label: "Ascending"},
        { label: "Descending"},
      ],
      Lessons: [
        { id: 1001, url: mathImg, Title: "Lessons", Activity: "Math", Location: "West End", Price: "100", Availability: 5 },
        { id: 1002, url: soccerImg, Title: "Sports", Activity: "Soccer", Location: "Hendon", Price: "50", Availability: 5 },
        { id: 1003, url: englishImg, Title: "Lessons", Activity: "English", Location: "Kensington", Price: "80", Availability: 5 },
        { id: 1004, url: boxingImg, Title: "Sports", Activity: "Boxing", Location: "Hendon", Price: "60", Availability: 5 },
        { id: 1005, url: artImg, Title: "Lessons", Activity: "Art",  Location: "London", Price: "80", Availability: 5 },
        { id: 1006, url: tennisImg, Title: "Sports", Activity: "Tennis", Location: "Westminster", Price: "150", Availability: 5 },
        { id: 1007, url: scienceImg, Title: "Lessons", Activity: "Science", Location: "London", Price: "120", Availability: 5 },
        { id: 1008, url: volleyballImg, Title: "Sports", Activity: "Volleyball", Location: "Camden Town", Price: "50", Availability: 5 },
        { id: 1009, url: geographyImg, Title: "Lessons", Activity: "Geography", Location: "London", Price: "60", Availability: 5 },
        { id: 1010, url: basketballImg, Title: "Sports",  Activity: "Basketball", Location: "Soho", Price: "95", Availability: 5 },
        ],
    }
  },
  methods: {
    // addingClass() {
    //   this.ByList.addClass("active")
    // },
    sortBy() {
      this.Lessons.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    },
    addToCart(index) {
      this.cart.push(this.Lessons[index].id);
      console.log(this.Lessons[index].id)
      this.Lessons[index].Availability = this.Lessons[index].Availability - 1
      console.log(this.cart.length)
    }
  },
  computed: {
    cartItemNumber: function() {
      return this.cart.length || '';
    },
    ifCanAdd: function() {
      return this.Lessons[index].Availability > this.cartItemNumber
    },

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    width: 25rem;
    margin-bottom: 10px;
  }
  #addtocart {
    margin-left: 100px;
    width: 150px;
  }
  .sorting-div {
    margin-left: 20px;
    margin-right: 40px;
  }
  .d-flex {
    height: 35px;
    margin-bottom: 10px;
  }
  #cartbutton {
    margin-top:-5px;
    height:35px;
    margin-right: -5px;
  }
</style>
