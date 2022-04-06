<template>
  <div id="contact">
    <b-row>
      <b-col cols="3">
        <h3>Contact us</h3>
      </b-col>
      <b-col cols="9">
        email, socia medial
      </b-col>
    </b-row>
    <b-row class="container">
      <b-col>
        <b-row>
          <b-col cols="6" class="mt-2">
            <b-form-input
              id="input-2"
              v-model="first"
              placeholder="First name"
              required
            ></b-form-input>
          </b-col>
          <b-col cols="6" class="mt-2">
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
      <b-col>
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

<style>
#contact{
  min-height: 700px;
}
</style>