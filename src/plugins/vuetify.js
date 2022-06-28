import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary:'#009688',
        // secondary: '#',
        success: '#3cd1c2',
        info: '#ffaa2c',
        error: '#f83e70',
      }
    }
  }
});
