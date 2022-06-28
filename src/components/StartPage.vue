<template>

  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm6 class="mt-10">
        <v-card flat class="ma-3" @click="$emit('startQuiz')">
          <v-card-text>
            <v-list>
              <v-list-item class="mb-2 list-item">
                <v-list-item-content class="pl-5">
                  <v-layout column wrap justify-center>
                    <v-flex sm8 class="text-center py-15">
                      <span> Click here to start </span>
                    </v-flex>
                  </v-layout>
                </v-list-item-content>
              </v-list-item>
            </v-list>

          </v-card-text>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>


</template>

<script>
export default {
  emits: ['startQuiz'],
  data() {
    return {

    }
  }
}
</script>

<style scoped>
</style>