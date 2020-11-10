<template>
  <div class="MainPage">

    <div class="d-flex bg-secondary">
      <div class="p-2 bg-info text-center"><strong>Home</strong></div>
      <div class="ml-auto p-2" v-if="$store.state.cart.length > 0">
        <button type="button" class="btn btn-default bg-info text-weight-bolder" id="cartbutton">
          <router-link :to="{name: 'Checkout'}">
          <div class="glyphicon glyphicon-shopping-cart text-dark ">
            Shopping cart: <strong> {{ $store.state.cart.length }} </strong> items
          </div>
          </router-link>
        </button>
      </div>
    </div>


    <div class="container bg-light text-muted">
      <div class="row">

        <div class="sorting-div">
          <h4><strong>Sort by:</strong></h4>
          <div class="btn-group-vertical btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-secondary">
              <button type="radio" name="options" id="Subject" autocomplete="off" checked @click="SORT_LESSONS_BY_TITLE"> Subject </button>
            </label>
            <label class="btn btn-secondary">
              <input type="radio" name="options" id="Subject" autocomplete="off" checked> Location
            </label>
            <label class="btn btn-secondary">
              <input type="radio" name="options" id="Subject" autocomplete="off" checked> Price
            </label>
            <label class="btn btn-secondary">
              <input type="radio" name="options" id="Subject" autocomplete="off" checked> Availability
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

        <div class="col-md-6 col-lg-3" v-for="(lesson, index) in $store.state.Lessons" :key="lesson.index">
        
          <div class="card" >
            <img :src="$store.state.Lessons[index].url" alt="" class="card-img-top img-fluid">
              <div class="card-body">
                <h3 class="card-title">{{ $store.state.Lessons[index].Title }}</h3>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Subject: {{ $store.state.Lessons[index].Activity }} </li>
                  <li class="list-group-item">Location: {{ $store.state.Lessons[index].Location }} </li>
                  <li class="list-group-item">Price: {{ $store.state.Lessons[index].Price }} </li>
                  <li class="list-group-item text-danger">Availability: {{ $store.state.Lessons[index].Availability }} </li>
                </ul>
              </div>
              <div class="card-body " id="addtocart">
                <button type="button" class="btn btn-info" @click='addToCart(index)' v-if="$store.state.Lessons[index].Availability > 0">Add To Cart</button>
                <button class="btn btn-info" disabled='disabled' v-else> Add To cart </button>
              </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: 'Index',
  data () {
    return {
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
    }
  },
  methods: {
    SORT_LESSONS_BY_TITLE() {
      this.$store.commit('SORT_LESSONS_BY_TITLE')
    },
    addToCart(index) {
      this.$store.state.cart.push({lessonID: this.$store.state.Lessons[index].id,
       lessonActivity: this.$store.state.Lessons[index].Activity, lessonLocation: this.$store.state.Lessons[index].Location,
        lessonPrice: this.$store.state.Lessons[index].Price, lessonAvailability: this.$store.state.Lessons[index].Availability});

      console.log("what index is being passed: " + this.$store.state.Lessons[index].id)
      this.$store.state.Lessons[index].Availability = this.$store.state.Lessons[index].Availability - 1
      console.log("length: " + this.$store.state.cart.length)
      let test = JSON.stringify(this.$store.state.cart)
      console.log("what contains: " + test)
    }
  },
  computed: {
    filteredLessons() {
      let filter = new RegExp(this.filterText, 'i')
      return this.$store.state.Lessons.filter(el => el.Activity.match(filter))
    }
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
