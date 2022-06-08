<template>
  <div class="explore">
    <carousel-3d class="slideshow">
      <slide v-for="(n, i) in slides" :index="i" :key="i">
        <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480"
            alt="image slot"
          >
      </slide>
    </carousel-3d>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      hidden
    >
      <b-carousel-slide
        caption="First slide"
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <!-- <h1>Hello world!</h1> -->
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
    
    <b-button-group class="mx-1">
      <b-button>This week</b-button>
      <b-button>This Month</b-button>
      <b-button>Last Month</b-button>
    </b-button-group>

    <b-row class="mt-2">
      <b-col lg="6" sm="12">
        <h3>Music</h3>
        <div class="mt-2">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="8">
                <b-card-body title="Song name...">
                  <b-card-text>
                    content...
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
        <div class="mt-2">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="8">
                <b-card-body title="Song name...">
                  <b-card-text>
                    content...
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
        <div class="mt-2">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="8">
                <b-card-body title="Song name...">
                  <b-card-text>
                    content...
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <b-button variant="outline-primary" class="mt-2" to="/">More</b-button>
        </div>
      </b-col>
      <b-col lg="6" sm="12">
        <h3>Lyrics</h3>
        <b-container class="bv-example-row">
          <b-row class="mt-2">
            <b-col cols="12" md="8"><b-card></b-card></b-col>
            <b-col cols="6" md="4"><b-card></b-card></b-col>
          </b-row>

          <b-row class="mt-2">
            <b-col cols="6" md="4"><b-card></b-card></b-col>
            <b-col cols="6" md="8"><b-card></b-card></b-col>
          </b-row>

          <b-row class="mt-2">
            <b-col cols="6"><b-card></b-card></b-col>
            <b-col cols="6"><b-card></b-card></b-col>
          </b-row>
        </b-container>
        <b-button variant="outline-primary" class="mt-2" to="/">More</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {Carousel3d, Slide} from 'vue-carousel-3d';

export default {
  name: 'Explore',
  data() {
    return {
      slides: 7
    }
  },
  components:{
    Carousel3d,
    Slide
  },
  methods: {
   
  }
}
</script>

<style>
  .slideshow{
    background-color: #2d2d2d;
  }

  .card{
    height: 180px !important;
  }
</style>