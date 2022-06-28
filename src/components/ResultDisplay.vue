<template>

  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm6 class="mt-10">
        <v-card flat class="ma-3">
          <v-card-title>
            Quiz Result
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div class="text-h5 text-center black--text text--lighten-4 mb-3 ">Your Score : {{ quizStats.score }}</div>
            <v-list>
              <!-- List Item -->
              <v-list-item class="mb-2 list-item">
                <v-list-item-content class="">
                  <v-layout row wrap justify-center>
                    <v-flex xs6 class="text-center">
                      <span> Attempted </span>
                    </v-flex>
                    <v-flex xs6 class="text-center">
                      <span> {{ quizStats.attempted }} </span>
                    </v-flex>
                  </v-layout>
                </v-list-item-content>
              </v-list-item>
              <!-- List Item -->
              <v-list-item class="mb-2 list-item">
                <v-list-item-content class="">
                  <v-layout row wrap justify-center>
                    <v-flex xs6 class="text-center">
                      <span> Correct </span>
                    </v-flex>
                    <v-flex xs6 class="text-center">
                      <span> {{ quizStats.correct }} </span>
                    </v-flex>
                  </v-layout>
                </v-list-item-content>
              </v-list-item>
              <!-- List Item -->
              <v-list-item class="mb-2 list-item">
                <v-list-item-content class="">
                  <v-layout row wrap justify-center>
                    <v-flex xs6 class="text-center">
                      <span> Wrong </span>
                    </v-flex>
                    <v-flex xs6 class="text-center">
                      <span> {{ quizStats.wrong }} </span>
                    </v-flex>
                  </v-layout>
                </v-list-item-content>
              </v-list-item>
              <!-- List Item -->
              <v-list-item class="mb-2 list-item">
                <v-list-item-content class="">
                  <v-layout row wrap justify-center>
                    <v-flex xs6 class="text-center">
                      <span> Percentage </span>
                    </v-flex>
                    <v-flex xs6 class="text-center">
                      <span> {{ percentage === '-' ? '-' : percentage.toPrecision(percentage >= 10 ? 4 : 3) + '%' }} </span>
                    </v-flex>
                  </v-layout>
                </v-list-item-content>
              </v-list-item>

            </v-list>

            <div class="d-flex justify-end">
              <v-btn depressed class="primary px-10 mr-0" router to="/best">
                Best Scores
              </v-btn>
            </div>

          </v-card-text>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>


</template>

<script>
export default {
  props: ["quizStats"],
  data() {
    return {
      percentage: this.quizStats.attempted === 0 ? '-' : (this.quizStats.score / this.quizStats.attempted) * 100
    }
  },
  mounted() {
    console.log(this.quizStats)
  }
}
</script>

<style scoped>

.list-item {
  border: 1px solid grey;
  border-radius: 4px;
}
</style>