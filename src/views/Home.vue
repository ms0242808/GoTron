<template>
  <div class="home">
    <div id="intro" class="title">
      <b-row>
        <b-col>GoTron, Create Together <b-button size="sm" variant="outline-dark">Create Now</b-button></b-col>
        <b-col>images</b-col>
      </b-row>
    </div>
    <div id="steps" class="m-a">
      <div class="title"><h3 class="pd-20">Create Now</h3></div>
      <b-container class="box">
        <b-row>
          <b-col class="align-self-center">Share Your Creation</b-col>
          <b-col class="align-self-center">Inspire & Be Inspired</b-col>
          <b-col class="align-self-center">Add Partners</b-col>
          <b-col class="align-self-center">Create Mucis</b-col>
        </b-row>
        <b-button variant="primary">Let's Create</b-button>
      </b-container>
    </div>
    <div id="features">
      <h3 class="pd-20">Features</h3>
      <b-container>
        <b-row>
          <b-col cols="4" class="align-self-center">
            <b-card>Feature 1</b-card>
          </b-col>
          <b-col cols="4" class="align-self-center">
            <b-card>Feature 2</b-card>
          </b-col>
          <b-col cols="4" class="align-self-center">
            <b-card>Feature 3</b-card>
          </b-col>
          <b-col cols="4" class="align-self-center">
            <b-card>Feature 4</b-card>
          </b-col>
          <b-col cols="4" class="align-self-center">
            <b-card>Feature 5</b-card>
          </b-col>
          <b-col cols="4" class="align-self-center">
            <b-card>Feature 6</b-card>
          </b-col>
        </b-row>
        <b-button variant="primary">Let's Create</b-button>
      </b-container>
    </div>
    <div id="projects" class="m-a">
      <b-row>
        <b-col id="p-left">
          <b-container>
            <a>HI</a>
            <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
              fade
              indicators
              img-width="1024"
              img-height="480"
            >
              <b-carousel-slide
                caption="First slide"
                img-src="https://picsum.photos/1024/480/?image=10"
              ></b-carousel-slide>
              <b-carousel-slide
                caption="Second Slide"
                img-src="https://picsum.photos/1024/480/?image=12"
              ></b-carousel-slide>
              <b-carousel-slide
                caption="Third Slide"
                img-src="https://picsum.photos/1024/480/?image=22"
              ></b-carousel-slide>
            </b-carousel>
          </b-container>
        </b-col>
        <b-col id="p-right">
          <b-container>
            <h3>Music/Lurics/Artists</h3>
            <p>Content......</p>
            <b-button variant="outline-primary">Explore</b-button>
          </b-container>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home'
}
</script>

<style>
#intro{
  min-height: 600px;
}

#steps{
  background: url('../assets/img/landing/steps.png')  no-repeat scroll 0px 100% / cover transparent;
  min-height: 350px;
}

#features{
  background-image: url('../assets/img/landing/features.png');
  background-repeat: no-repeat;
  background-size: 100px 100px;
  background-position: right top;
  background-color: #f0f0f0;
  min-height: 550px;
}

#projects{
  min-height: 550px;
}

#p-left{
  background: url('../assets/img/landing/p-left.png') no-repeat scroll 0px 100% / cover;
  min-height: 550px;
}

#p-right{
  background: url('../assets/img/landing/p-right.svg') no-repeat scroll 0px 100% / cover;
  background-position: left 200px top 150px;
  min-height: 550px;
}

.box{
  background-color: white;
  border-radius: 20px;
  height: 250px;
}
</style>
