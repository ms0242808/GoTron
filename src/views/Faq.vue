<template>
  <div id="faq">
    <h1 class="title">Frequently Asked Questions</h1>
    <b-container class="mt-2">
      <b-row>
        <b-col cols="5">
          <h1 class="qtitle">General</h1>
        </b-col>
        <b-col cols="7">
          <div class="accordion" role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-1>Question 1</b-button>
              </b-card-header>
              <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>content</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-2>Question 2</b-button>
              </b-card-header>
              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>content</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>
        <b-col cols="5">
          <h1 class="qtitle">Account</h1>
        </b-col>
        <b-col cols="7">
          <div class="accordion" role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-3>Question 1</b-button>
              </b-card-header>
              <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>content</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-4>Question 2</b-button>
              </b-card-header>
              <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>content</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>
      </b-row>
      <div id="help">
        <h3>Still need help?</h3>
        <h5>Feel free to contact us</h5>
      </div>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'FAQ'
}
</script>

<style>
#help{
  min-height: 550px;
  margin-top: 5rem;
}

.qtitle{
  border-top: solid 2px black;
}
</style>