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
    
    <b-button-group class="mx-1 ">
      <b-button variant="outline-secondary">This week</b-button>
      <b-button variant="outline-secondary">This Month</b-button>
      <b-button variant="outline-secondary">Last Month</b-button>
    </b-button-group>

    <b-row class="mt-2 m-50">
      <b-col lg="6" sm="12">
        <h3><font-awesome-icon size="sm" icon="fa-solid fa-music" />Music</h3>
        <div class="mt-2">
          <b-card no-body class="overflow-hidden musicCard" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="musicImg"></b-card-img>
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
          <b-card no-body class="overflow-hidden musicCard" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="musicImg"></b-card-img>
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
          <b-card no-body class="overflow-hidden musicCard" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="musicImg"></b-card-img>
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
        <h3><font-awesome-icon size="sm" icon="fa-solid fa-file-signature" />Lyrics</h3>
        <b-container class="bv-example-row">
          <b-row class="mt-2">
            <b-col cols="6">
              <b-card class="lyricsCard">
                <h5>Lyrics Title</h5>
                <p>by AT</p>
                <b-button variant="outline-primary"><font-awesome-icon icon="fa-solid fa-plus" /></b-button>
              </b-card>
            </b-col>
            <b-col cols="6">
              <b-card class="lyricsCard">
                <h5>Lyrics Title</h5>
                <p>by Author</p>
                <b-button variant="outline-primary"><font-awesome-icon icon="fa-solid fa-plus" /></b-button>
              </b-card>
            </b-col>
          </b-row>

          <b-row class="mt-2">
            <b-col cols="6">
              <b-card class="lyricsCard">
                <h5>Lyrics Title</h5>
                <p>by Author</p>
                <b-button variant="outline-primary"><font-awesome-icon icon="fa-solid fa-plus" /></b-button>
              </b-card>
            </b-col>
            <b-col cols="6">
              <b-card class="lyricsCard">
                <h5>Lyrics Title</h5>
                <p>by Author</p>
                <b-button variant="outline-primary"><font-awesome-icon icon="fa-solid fa-plus" /></b-button>
              </b-card>
            </b-col>
          </b-row>

          <b-row class="mt-2">
            <b-col cols="6">
              <b-card class="lyricsCard">
                <h5>Lyrics Title</h5>
                <p>by Author</p>
                <b-button variant="outline-primary"><font-awesome-icon icon="fa-solid fa-plus" /></b-button>
              </b-card>
            </b-col>
            <b-col cols="6">
              <b-card class="lyricsCard">
                <h5>Lyrics Title</h5>
                <p>by Author</p>
                <b-button variant="outline-primary"><font-awesome-icon icon="fa-solid fa-plus" /></b-button>
              </b-card>
            </b-col>
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
  .m-50{
    margin: 0 50px;
  }

  .slideshow{
    background-color: #2d2d2d;
  }

  .musicCard{
    border-radius: 100px 0 0 100px;
  }

  .musicImg{
    border-radius: 100px;
  }

  .card{
    height: 180px !important;
  }

  .lyricsCard{
    background-color:antiquewhite;
    border: unset;
    margin: 0 10px;
    box-shadow: #eaeaea 3px 3px;
  }
</style>