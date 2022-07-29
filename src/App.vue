<template>
  <div id="app">跟组件</div>
</template>

<script>
import { request } from '@/network'
export default {
  name: 'App',
  props: {},
  data () {
    return {
    }
  },
  // 这时可以访问data和methods
  created () {
    this.getList()
  },
  // 方法
  methods: {
    async getList () {
      const res = await request({
        url: 'http://geek.itheima.net/v1_0/channels'
      })
      console.log(res)
    }
  },
  // 计算属性
  computed: {},
  // 组件注册
  components: {},
}
</script>

<style scoped lang="less">
</style>
