import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.blue.darken3,
                secondary: colors.blue.darken1,
                accent: colors.blue.accent1
            }
        }
    }
});
