<template>



  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm6 class="mt-10">
        <v-card flat class="ma-3">
          <v-card-title>
            Best Scorers
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(bestScorer, i) in bestScorers" :key="i" class="mb-2 list-item">
                <v-list-item-content class="pl-5">
                  <v-layout row wrap justify-center>
                    <v-flex xs1>
                      <span> {{ i+1 }}. </span>
                    </v-flex>
                    <v-flex xs7>
                      <span> {{ bestScorer.name }} </span>
                    </v-flex>

                    <v-flex xs4 class="text-center">
                      <span> {{ bestScorer.score }} </span>
                    </v-flex>
                  </v-layout>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <div class="text-h6 text-center mt-5 ">
              Your Position : 15<sup>th</sup>
            </div>

            <v-divider class="mt-3"></v-divider>

          </v-card-text>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>


</template>

<script>
export default {
  data() {
    return {
      bestScorers: [
        { name: 'Noman', score: 16 },
        { name: 'Usman', score: 19 },
        { name: 'Arslan', score: 13 },
        { name: 'Mansoor', score: 21 },
        { name: 'Faizan', score: 18 },
      ],
    }
  }
}
</script>

<style scoped>
.list-item {
  border: 1px solid grey;
  border-radius: 4px;
}
</style>