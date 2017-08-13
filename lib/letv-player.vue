 <template>
  <div :id="id" class="letv"></div>
</template>

<script>
import './bcloud.js'
export default {
  computed: {
    id () {
      let hash = Date.now().toString(32).toUpperCase()
      return `LetvPlayer_${hash}`
    },
    callBackName () {
      let hash = Date.now().toString(32).toUpperCase()
      return `LetvCallback_${hash}`
    }
  },
  props: {
    params: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      control: null,
      callback () {}
    }
  },
  watch: {
    'params': 'render'
  },
  methods: {
    render () {
      this.control = new CloudVodPlayer()
      let params = Object.assign({}, this.params, {
        callbackJs: this.callBackName
      })
      this.control.init(params, this.id)
    },
    //设置时间
    setTime (time) {
      if (!this.control) {
        return -1
      }
      this.control.sdk.seekTo(time)
      return this.control.sdk.getVideoTime()
    },
    //获取时间
    getTime () {
      if (!this.control) {
        return -1
      }
      return this.control.sdk.getVideoTime()
    },
    //暂停
    pause () {
      if (!this.control) {
        return -1
      }
      return this.control.sdk.pauseVideo()
    },
    //续播
    resume () {
      if (!this.control) {
        return -1
      }
      return this.control.sdk.resumeVideo()
    }
  },
  created () {
    //回调方法
    this.callback = function (type, data) {
      switch (type) {
        case 'videoStart':
          this.$emit('play')
          break
        case 'videoStartReady ':
          this.$emit('canplay')
          break
        case 'videoPause':
          this.$emit('pause')
          break
        case 'videoResume':
          this.$emit('resume')
          break
        case 'videoStop':
          this.$emit('ended')
          break
        case 'errorInConfig':
          this.$emit('error', '配置错误~')
          break
        case 'errorInLoadPlugins':
          this.$emit('error', '插件加载失败~')
          break
        case 'errorInKernel':
          this.$emit('error', '内核插件错误~')
          break
      }
    }
    window[this.callBackName] = this.callback.bind(this)
  },
  mounted () {
    this.render()
  },
  beforeDestroy () {
    // 防止内存泄露
    delete window[this.callBackName]
  }
}
</script>
