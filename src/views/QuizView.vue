<template>
  <div>

    <DifficultyLevel v-if="showDifficultyLevel" @selectDifficulty="(diff) => handleSelectDifficulty(diff)" />

    <StartPage v-if="showStartPage" @startQuiz="handleStartQuiz" />

    <QuizDisplay v-if="showQuiz" :difficulty="difficultyLevel" @endQuiz="(stats) => handleEndQuiz(stats)" />

    <ResultDisplay v-if="showResult" :quizStats="quizStats" />
  </div>

</template> 

<script>
import QuizDisplay from '../components/QuizDisplay'
import ResultDisplay from '../components/ResultDisplay'
import StartPage from '../components/StartPage'
import DifficultyLevel from '../components/DifficultyLevel'

export default {
  
  components: { QuizDisplay, ResultDisplay, StartPage, DifficultyLevel },
  data() {
    return {
      showDifficultyLevel: true,
      showStartPage: null,
      showQuiz: null,
      showResult: null,

      quizStats: null,
      difficultyLevel: null,
    }
  },
  methods: {

    // event handlers
    handleSelectDifficulty(diff) {
      this.difficultyLevel = diff
      this.showDifficultyLevel = false
      this.showStartPage = true
    },
    handleStartQuiz() {
      this.showStartPage = false
      this.showQuiz = true
    },
    handleEndQuiz(stats) {
      this.quizStats = stats
      this.showQuiz = false
      this.showResult = true;
    },

  }
}
</script>

<style scoped>


</style>