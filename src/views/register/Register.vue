<template>
  <!-- 注册页面 -->
  <div class="register">
    <!-- 注册盒子 -->
    <div class="reg-box">
      <!-- 标题 -->
      <div class="reg-title"></div>
      <!-- 注册表单区域 -->
      <el-form
        :model="regForm"
        :rules="regRules"
        ref="regRef"
        label-width="100px"
      >
        <!-- 用户名 -->
        <el-form-item label="用户名" prop="username">
          <el-input
            type="text"
            v-model="regForm.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="regForm.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- 确认密码 -->
        <el-form-item label="确认密码" prop="repassword">
          <el-input
            type="password"
            v-model="regForm.repassword"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- 提交 -->
        <el-form-item>
          <el-button type="primary" class="btn-reg" @click="RegnewUser"
            >注册</el-button
          >
        </el-form-item>
        <el-link @click="$router.push('/login')">去登录</el-link>
      </el-form>
    </div>
  </div>
</template>

<script>
import '@/assets/css/regAndlogin.css'
import { request } from '@/network'
export default {
  name: 'Register',
  data () {
    const samePwd = (rule, value, callback) => {
      if (value !== this.regForm.password) {
        // 如果验证失败，则调用 回调函数时，指定一个 Error 对象。
        callback(new Error('两次输入的密码不一致!'))
      } else {
        // 如果验证成功，则直接调用 callback 回调函数即可。
        callback()
      }
    }
    return {
      // 注册表单的数据对象
      regForm: {
        username: '',
        password: '',
        repassword: ''
      },
      // 注册表单的验证规则对象
      regRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            pattern: /^[a-zA-Z0-9]{1,10}$/,
            message: '用户名必须是1-10的大小写字母数字',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            pattern: /^\S{6,15}$/,
            message: '密码必须是6-15的非空字符',
            trigger: 'blur'
          }
        ],
        repassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { pattern: /^\S{6,15}$/, message: '密码必须是6-15的非空字符', trigger: 'blur' },
          { validator: samePwd, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 注册提交按钮
    RegnewUser () {
      this.$refs.regRef.validate(async (valid) => {
        if (!valid) return false
        // 拿到用户输入的内容
        // console.log(this.regForm)
        await request({
          url: 'api/reg',
          methods: 'post',
          data: this.regForm
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })


      })
    }
  },
  components: {
  }
}
</script>
<style scoped>
</style>

