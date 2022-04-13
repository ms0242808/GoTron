<template>
  <div class="about">
    <div id="top">
      <b-container>
        <b-row class="row500">
          <b-col lg="6" sm="12" class="al-s">
            <h3><b>About us</b></h3>
            <h5><b>Inspire & Be Inpsired</b></h5>
            <p>Collbration brings synergy, possibility ignites creativity</p>
          </b-col>
          <b-col lg="6" sm="12" class="al-s">
            <h1>image (logo/music,etc)</h1>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div id="mid">
      <b-container>
        <b-row class="row400">
          <b-col lg="6" sm="12" class="al-s">
            <h1>image (logo/music,etc)</h1>
          </b-col>
          <b-col lg="6" sm="12" class="al-s">
            <h3><b>Revolutionize the musical industry</b></h3>
            <p>Minimizing the barrier to music creation to create a new music development collbration ecosystem with everyone is being heard.</p>
            <b-button variant="primary" class="float-right">Let's Create</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div id="bot">
      <b-container class="al-s row600">
        <h3><b>Our Story</b></h3>
        <p>In GoTron, we all come together to revolutionize the conventional music development industry. To join hands of our talented musicians in the creation of quality musical pieces, Online.</p>
        <p>Music production is rolling in the hand of a niche circle. Music doesn't go far without connections. Song composers seek hard for suitable lyrics. Lyricists look forward to an inspiring music piece. Singers are eager to perform their own song. Without knowing each other, pleasant melody may become obsolete (be archived). Meaningful lyrics only be rewritten on existing songs. Great voice will only be heard in covers. Before, talented musicians do not come across each other. Now, GoTron merge them at the crossroad, to team up and create music online. We create a perfect convenient environment for musicians to achieve their dreams.</p>
        <p>Throughout the rise of social media, publicity is borderless, advertising without limit. GoTron partner (match) our musicians base on the obsession to the quality of music itself. Unlimited possible pairings inspire limitless (infinite) creativity. We empower every musician with passion and dreams in this cozy ecosystem. Bringing “YOU” to shine.</p>
        <p>Come and join the revolution with other talents and make yourselves heard.</p>
      </b-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'About'
}
</script>

<style>
  .about{
    /* min-height: 600px; */
    background: url('../assets/img/about/bg.svg') no-repeat scroll 0px 50% / cover transparent;
  }

  #top{
    min-height: 600px;
    text-align: left;
    /* background: url('../assets/img/about/top.png') no-repeat scroll 150px 100% / cover transparent; */
  }
  #mid{
    min-height: 600px;
    text-align: left;
    /* background-image: url('../assets/img/about/mid.png'); */
    /* background-repeat: no-repeat; */
    /* background-position: bottom 10px left -250px; */
  }
  #bot{
    min-height: 600px;
    margin: 0 10rem;
    text-align: left;
    /* background: url('../assets/img/about/bot.png') no-repeat scroll 150px 100% / cover transparent; */
  }
</style>
