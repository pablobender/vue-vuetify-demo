import Vue from 'vue'
import Vuetify, {
  VApp, // required
  VCard,
  VCardTitle,
  VCardText
} from 'vuetify/lib'

import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp, // required
    VCard,
    VCardTitle,
    VCardText
  },
  iconfont: 'md',
})
