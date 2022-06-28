<template>

  <v-container>

    <v-layout row wrap justify-center>
      <v-flex xs12 sm6 class="mt-5">
        <v-card flat class="ma-3">
          <v-card-title class="mb-0">
            <div class="box" :class="{ 'red-warning': redWrong }">wrong: {{ quizStats.wrong }}</div>
            <v-spacer></v-spacer>
            <div class="box" :class="{ 'red-warning': redTimer }">{{ timerMins }} : {{ timerSecs }}</div>
          </v-card-title>
          <v-divider></v-divider>

          <v-card-title class="">
            Question: {{ questionNo }}
            <v-spacer></v-spacer>

          </v-card-title>

          <v-divider></v-divider>
          <v-card-text>
            <div class="text-h5 ml-2 mb-3">
              {{ nmbr1 }} + {{ nmbr2 }} = ?
            </div>
            <v-list class="grey--text">
              <div v-for="(option, i) in options" :key="i"
                class="grey lighten-3 grey--text text--darken-2 mb-2 pa-3 my-radio" @click="handleClick">
                <div class="pl-5">
                  {{ option }}
                </div>
              </div>
            </v-list>
            <v-divider class="mb-3"></v-divider>

            <div class="d-flex justify-end">
              <v-btn depressed class="primary px-10 mr-0" @click="$emit('endQuiz', quizStats)">End Quiz</v-btn>
            </div>
          </v-card-text>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>

export default {
  emits: ["endQuiz"],
  props: ['difficulty'],
  data() {
    return {
      nmbr1: null,
      nmbr2: null,
      options: [],
      answer: null,
      // operators: ['+', '-', '*', '/'],
      // operator: null, 
      interval: null,
      maxTime: 900,
      timeRemaining: 900,
      quizStats: {
        attempted: 0,
        correct: 0,
        wrong: 0,
        score: 0,
      },
      renderer: false,

      nmbrLimit: null,
      questionNo: 0,

      redWrong: null,
      redTimer: null,
    }
  },
  mounted() {
    this.setDifficultyLevel()
    this.populate()
    this.setTime()
  },
  unmounted() {
    clearInterval(this.myInterval)
  },
  watch: {
    renderer: function () {
      if(this.quizStats.wrong === 4) {
        this.redWrong = true
      }
      else if (this.quizStats.wrong === 5) {
        this.$emit('endQuiz', this.quizStats)
      }
    },
    timeRemaining: function(newState) {
      if (newState === 10) {
        this.redTimer = true
      }
        
    },
  },
  updated() {
    
  },
  methods: {
    populate() {
      // this.operator = this.operators[this.rand(this.operators.length)]
      this.nmbr1 = this.rand(this.nmbrLimit)
      this.nmbr2 = this.rand(this.nmbrLimit)
      // switch(this.operator) {
      //   case '+':
      //     this.answer = this.nmbr1 + this.nmbr2
      //     break
      //   case '-':
      //     this.answer = this.nmbr1 - this.nmbr2
      //     break
      //   case '*':
      //     this.answer = this.nmbr1 * this.nmbr2
      //     break
      //   case '/':
      //     this.answer = this.nmbr1 / this.nmbr2
      //     break

      // }
      this.answer = this.nmbr1 + this.nmbr2
      for(let i=0;i<4;i++) {
        this.options[i] = this.rand(2 * this.nmbrLimit)
      }
      this.options[this.rand(4)] = this.answer
      this.questionNo++

    },
    setTime() {
      setTimeout(() => {
        this.$emit('endQuiz', this.quizStats)
      }, this.maxTime * 1000)
      this.myInterval = setInterval(() => {
        this.timeRemaining--
      }, 1000)
    },
    rand(limit) {
      return Math.floor(Math.random() * limit)
    },
    handleClick(e) {
      this.quizStats.attempted++
      if (parseInt(e.target.innerText) === this.answer) {
        this.quizStats.correct++
        this.quizStats.score++
      } else {
        this.quizStats.wrong++
        this.quizStats.score--
      }
      this.renderer = !this.renderer
      this.populate()
    },
    setDifficultyLevel() {
      if(this.difficulty === 'Easy') {
        this.nmbrLimit = 100
      } else if (this.difficulty === 'Medium') {
        this.nmbrLimit = 1000
      } else if (this.difficulty === 'Hard') {
        this.nmbrLimit = 10000
      }
    },
    

  },
  computed: {
    timerMins() {
      let mins = ~~(this.timeRemaining / 60)
      return mins < 10 ? '0' + mins : mins
    },
    timerSecs() {
      let secs = this.timeRemaining % 60
      return secs < 10 ? '0' + secs : secs
    },
  }
}
</script>


<style scoped>


.my-radio {
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}
.my-radio:focus {
  background-color: red !important;
  /* opacity: 1; */
}
.box {
  border: 1px solid grey;
  padding: 4px 0px 4px 0px;
  border-radius: 4px;
  width: 35%;
  text-align: center;
}

.red-warning {
  color: red;
  border: 1px solid red;
}
</style>