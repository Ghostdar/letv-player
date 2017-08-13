import letvplayer from './letv-player.vue'

const letvPlayer = {
  install: function (Vue) {
    Vue.component('letvPlayer', letvplayer)
  }
}

export default letvPlayer
