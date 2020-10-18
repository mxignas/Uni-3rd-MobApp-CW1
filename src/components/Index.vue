<template>
  <div class="MainPage">

    <nav aria-label="breadcrumb" id="bread">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Home</li>
      </ol>
    </nav>

    <div class="container bg-light text-muted">
      <!-- <div class="container text-muted"> -->
      <div class="row">
        <div class="col-md-6 col-lg-3" v-for="lesson in Lessons" :key="lesson.id">
        
          <div class="card" >
            <img :src="lesson.url" alt="" class="card-img-top img-fluid">
              <div class="card-body">
                <h3 class="card-title">{{ lesson.Title }}</h3>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Subject: {{ lesson.Activity }} </li>
                  <li class="list-group-item">Location: {{ lesson.Location }} </li>
                  <li class="list-group-item">Price: {{ lesson.Price }} </li>
                  <li class="list-group-item text-danger">Spaces: {{ lesson.Spaces }} </li>
                </ul>
              </div>
              <div class="card-body " id="addtocart">
                <button type="button" class="btn btn-info" >Add To Cart</button>
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

export default {
  name: 'Index',
  data () {
    return {
      Lessons: [
        {
          url: mathImg,
          Title: "Lessons",
          Activity: "Math",
          Location: "West End",
          Price: "£100",
          Spaces: 5,
        },
        {
          url: soccerImg,
          Title: "Sports",
          Activity: "Soccer",
          Location: "Hendon",
          Price: "£50",
          Spaces: 5,
        },
        {
          url: englishImg,
          Title: "Lessons",
          Activity: "English",
          Location: "South Kensington",
          Price: "£80",
          Spaces: 5,
        },
        {
          url: boxingImg,
          Title: "Sports",
          Activity: "Boxing",
          Location: "Hendon",
          Price: "£60",
          Spaces: 5,
        },
        {
          url: artImg,
          Title: "Lessons",
          Activity: "Art",
          Location: "London",
          Price: "£80",
          Spaces: 5,
        },
        {
          url: tennisImg,
          Title: "Sports",
          Activity: "Tennis",
          Location: "Westminster",
          Price: "£150",
          Spaces: 5,
        },
        {
          url: scienceImg,
          Title: "Lessons",
          Activity: "Science",
          Location: "London",
          Price: "£120",
          Spaces: 5,
        },
        {
          url: volleyballImg,
          Title: "Sports",
          Activity: "Volleyball",
          Location: "Camden Town",
          Price: "£50",
          Spaces: 5,
        },

        {
          url: geographyImg,
          Title: "Lessons",
          Activity: "Geography",
          Location: "London",
          Price: "£60",
          Spaces: 5,
        },
        {
          url: basketballImg,
          Title: "Sports",
          Activity: "Basketball",
          Location: "Soho",
          Price: "£95",
          Spaces: 5,
        },
        ],
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    width: 16rem;
    margin-bottom: 10px;
  }
  #addtocart {
    margin-left: 100px;
    width: 150px;
  }
</style>
