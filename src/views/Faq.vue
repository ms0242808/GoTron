<template>
  <div id="faq">
    <h3 class="title hbar t-l ml-2"><b>Frequently Asked Questions</b></h3>
    <div class="mt-2" id="quiz">
      <b-row>
        <b-col lg="5" sm="12">
          <h3 class="qtitle">General</h3>
        </b-col>
        <b-col lg="7" sm="12">
          <div class="accordion apanel" role="tablist">
            <b-card no-body class="mb-1 cpanel">
              <b-card-header header-tag="header" class="p-1 qheader" role="tab">
                <b-button block v-b-toggle.accordion-1 class="qbtn">Question 1</b-button>
              </b-card-header>
              <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>content</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1 cpanel">
              <b-card-header header-tag="header" class="p-1 qheader" role="tab">
                <b-button block v-b-toggle.accordion-2 class="qbtn">Question 2</b-button>
              </b-card-header>
              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>content</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>
        <b-col lg="5" sm="12">
          <h3 class="qtitle">Account</h3>
        </b-col>
        <b-col lg="7" sm="12">
          <div class="accordion apanel" role="tablist">
            <b-card no-body class="mb-1 cpanel">
              <b-card-header header-tag="header" class="p-1 qheader" role="tab">
                <b-button block v-b-toggle.accordion-3 class="qbtn">Question 1</b-button>
              </b-card-header>
              <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>content</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1 cpanel">
              <b-card-header header-tag="header" class="p-1 qheader" role="tab">
                <b-button block v-b-toggle.accordion-4 class="qbtn">Question 2</b-button>
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
    </div>
    <div id="help">
      <h3>Still need help?</h3>
      <h5>Feel free to contact us</h5>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FAQ'
}
</script>

<style>
#quiz{
  background: url('../assets/img/faq/bg.svg') no-repeat scroll 0px 100% / cover transparent;
  min-height: 1000px;
}

#help{
  min-height: 550px;
  background: url('../assets/img/faq/bottom bg.png') no-repeat scroll 0px 100% / cover transparent;
}

.qtitle{
  border-top: solid 2px black;
  margin-top: 30px;
  margin-left: 2rem;
  width: 50%;
  text-align: left;
  font-weight: bold;
  padding-top: 10px;
}

.apanel{
  margin: 0 2rem;
  margin-top: 30px;
}

.qheader{
  background-color: unset !important;
  border: unset !important;
  border-top: 1px solid #2d2d2d !important;
  border-width: 3px !important;
}

.qbtn{
  background: unset !important;
  border: unset !important;
  color: black !important;
}

.cpanel{
  border: unset !important;
}
</style>