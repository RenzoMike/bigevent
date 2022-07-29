<template>
  <el-container class="main-container">
    <!-- 头部区域 -->
    <el-header>
      <!-- 左侧的 logo -->
      <img src="../../assets/images/logo.png" alt="" />
      <!-- 右侧的菜单 -->
      <el-menu
        class="el-menu-top"
        mode="horizontal"
        background-color="#23262E"
        text-color="#fff"
        active-text-color="#409EFF"
      >
        <el-submenu index="1">
          <template slot="title">
            <!-- 头像 -->
            <img src="../../assets/images/logo.png" alt="" class="avatar" />
            <span>个人中心</span>
          </template>
          <el-menu-item index="1-1"
            ><i class="el-icon-s-operation"></i>基本资料</el-menu-item
          >
          <el-menu-item index="1-2"
            ><i class="el-icon-camera"></i>更换头像</el-menu-item
          >
          <el-menu-item index="1-3"
            ><i class="el-icon-key"></i>重置密码</el-menu-item
          >
        </el-submenu>
        <el-menu-item index="2" @click="logoutFn"
          ><i class="el-icon-switch-button"></i>退出</el-menu-item
        >
      </el-menu>
    </el-header>
    <el-container>
      <!-- 侧边栏区域 -->
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <!-- 页面主体区域 -->
        <el-main> Main.vue后台主页 </el-main>
        <!-- 底部 footer 区域 -->
        <el-footer>© www.itheima.com - 黑马程序员</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>


<script>
import '@/assets/css/regAndlogin.css'
export default {
  name: 'name',
  props: {},
  data () {
    return {

    }
  },
  // 这时可以访问data和methods
  created () { },
  // 方法
  methods: {
    logoutFn () {
      // 询问用户是否退出登录
      this.$confirm('您确认退出登录吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // TODO：执行退出登录的操作
        })
        .catch((err) => err)
        .then(() => {
          // TODO：执行退出登录的操作
          // 1. 清空 token
          this.$store.commit('updateToken', '')
          // 2. 跳转到登录页面
          this.$router.push('/login')
        })
    }
  },
  // 计算属性
  computed: {},
  // 组件注册
  components: {},
}
</script>

<style scoped>
</style>
