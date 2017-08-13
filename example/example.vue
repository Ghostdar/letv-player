<template>
<div id="app">
  <letvPlayer
    :params="letvparam"
    @error="onError"
    @play="onPlay"
    @resume="onResume"
    @pause="onPause"
    @ended="onEnd"
    ref="player">
  </letvPlayer>
</div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      //初始化参数
      letvparam: {
        'uu': 'sxmar7dgim',
        'vu': '5e6531ff64',
        'dfull': '0',
        'playsinline': '0',
        'autoSize': '1'
      }
    }
  },
  computed:{
    player() {
      return this.$refs.player || {}
    }
  },
  methods: {
    //播放
    onPlay () {
      console.log('onPlay', this.player.getTime())
    },
    //继续播放
    onResume () {
      console.log('onResume', this.player.getTime())
    },
    //暂停
    onPause () {
      console.log('onPause', this.player.getTime())
    },
    //播放结束
    onEnd () {
      console.log('onEnd', this.player.getTime())
    },
    //设置播放时间
    setTime(){
      this.player.setTime(100)  //时间 
    }
  }
}
</script>

<style>
#app .letv div{
  height:400px !important;
}
</style>
