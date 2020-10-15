<template>
  <div class="MainPage">

    <nav aria-label="breadcrumb" id="bread">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Home</li>
      </ol>
    </nav>

    <div class="container bg-info text-muted">
      <!-- <div class="container text-muted"> -->
      <div class="row">
        <div class="col-md-6 col-lg-3" v-for="lesson in Lessons" :key="lesson.id">
        
          <div class="card" >
            <img src="${lesson.url}" alt="" class="card-img-top img-fluid">
              <div class="card-body">
                <h3 class="card-title">{{ lesson.Title }}</h3>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Subject: {{ lesson.Subject }} </li>
                  <li class="list-group-item">Location: {{ lesson.Location }} </li>
                  <li class="list-group-item">Price: {{ lesson.Price }} </li>
                  <li class="list-group-item">Spaces: {{ lesson.Spaces }} </li>
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
export default {
  name: 'Index',
  data () {
    return {
      LessonTitle: "Lesson",
      ActivityTitle: "Activity",
      Lessons: [
        {
          url: "../assets/Math.png",
          Title: "Lesson",
          Subject: "Math",
          Location: "London",
          Price: "£100",
          Spaces: 5,
        },
        {
          url: "../assets/Math.png",
          Title: "Lesson",
          Subject: "English",
          Location: "London",
          Price: "£80",
          Spaces: 5,
        },
        {
          url: "../assets/Math.png",
          Title: "Lesson",
          Subject: "Art",
          Location: "London",
          Price: "£80",
          Spaces: 5,
        },
        {
          url: "../assets/Math.png",
          Title: "Lesson",
          Subject: "Science",
          Location: "London",
          Price: "£120",
          Spaces: 5,
        },
        {
          url: "../assets/Math.png",
          Title: "Lesson",
          Subject: "geography",
          Location: "London",
          Price: "£60",
          Spaces: 5,
        },
        ],
    }
  },
  computed: {
    assetsPath: function(file) {
      return '../assets/' + file + '.png'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    width: 16rem;
  }
  #addtocart {
    margin-left: 130px;
  }
</style>
