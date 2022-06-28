<template>

  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm6 class="mt-10">
        <v-card flat class="ma-3">
          <v-card-title class="d-flex justify-center">
            <div>Choose difficulty level: </div>

          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <!-- <div class="text-h5 ml-2 mb-3 text-center">2 + 2 = ?</div> -->

            <v-list rounded>
              <v-list-item-group>
                <v-list-item v-for="(level, i) in levels" :key="i"
                  class="border primary lighten-1 white--text  text-center mb-2 rounded"
                  @click="$emit('selectDifficulty', level.name)">
                  <v-list-item-content>
                    <v-list-item-title>{{ level.name }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-divider class="mb-3"></v-divider>

            <!-- <div class="d-flex justify-end">
              <v-btn depressed class="primary px-10 mr-0">End Quiz</v-btn>
            </div> -->
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
      levels: [
        { name: 'Easy' },
        { name: 'Medium' },
        { name: 'Hard' },
      ]
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>

.border {
  border: 1px solid grey;
}
.timer-box {
  border: 1px solid grey;
  padding: 4px 10px 4px 10px;
  border-radius: 4px;
}
</style>