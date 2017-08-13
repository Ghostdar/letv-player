# letv-player
封装了乐视播放器的Vue组件

乐视云官方SDK: [http://static.lecloud.com/wiki/doc/websdk/WebSdkVod.pdf](http://static.lecloud.com/wiki/doc/websdk/WebSdkVod.pdf)
### 1. 用法

#### 1.0 安装

```
npm install vue-letv-player --save
```

#### 1.1 在 ```main.js```中引入组件

```
import letvPlayer from 'vue-letv-player'

Vue.use(letvPlayer)
```
#### 1.2 在项目中使用

```
<template>
<div id="letvplayer">
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
export default {
  name: 'letvplayer',
  data () {
    return {
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
    onPlay () {
      console.log('onPlay', this.player.getTime())
    },
    onResume () {
      console.log('onResume', this.player.getTime())
    },
    onPause () {
      console.log('onPause', this.player.getTime())
    },
    onEnd () {
      console.log('onEnd', this.player.getTime())
    },
    setTime(){
      this.player.setTime(100)  //时间 
    }
  }
}
</script>
```

### 2. 运行环境

```
Vue 2.x
```

### 3.注意事项

- 使用时，需要关闭 eslint ，否则会报错