<template>
  <div id="contact">
    <b-row class="hbar">
      <b-col cols="3" class="al-s">
        <h3><b>Contact us</b></h3>
      </b-col>
      <b-col cols="9" class="al-s">
        email, socia medial
      </b-col>
    </b-row>
    <b-row id="form">
      <b-col lg="6" sm="12" class="input-f">
        <b-row>
          <b-col lg="6" sm="12" class="mt-2">
            <b-form-input
              id="input-2"
              v-model="first"
              placeholder="First name"
              required
            ></b-form-input>
          </b-col>
          <b-col lg="6" sm="12" class="mt-2">
            <b-form-input
              id="input-2"
              v-model="last"
              placeholder="Surname"
              required
            ></b-form-input>
          </b-col>
          <b-col cols="12" class="mt-2">
            <b-form-input
              id="input-1"
              v-model="email"
              type="email"
              placeholder="Email"
              required
            ></b-form-input>
          </b-col>
          <b-col cols="12" class="mt-2">
            <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="Messages..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-col>
        </b-row>
        <b-button class="mt-2" variant="outline-success">Send</b-button>
      </b-col>
      <b-col lg="6" sm="12">
        <h1>Map</h1>
      </b-col>
    </b-row>
    
  </div>
</template>

<script>

export default {
  name: 'Contact'
}
</script>

<style scoped>
#contact{
  min-height: 600px;
}

#form{
  background: url('../assets/img/contact/bg.svg') no-repeat scroll 0px 100% / cover transparent;
  min-height: 600px;
}

.form-control{
  background-color:unset;
  border: 1px solid #2d2d2d;
  border-radius: 10px;
}

.input-f{
  padding: 50px 50px;
}
</style>