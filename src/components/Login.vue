<template>
  <div class="login">
    <el-container>
      <el-main>
        <el-form label-position="right" label-width="80px" :model="formLabelAlign">
          <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="formLabelAlign.pwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="register">注册</el-button>
            <el-button type="primary" @click="Submitlogin">登录</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { Login, Register } from "../api/user"
import { SetToken } from "../unitls/auth"

export default {
  data() {
    return {
      formLabelAlign: {}
    }
  },
  methods: {
    async Submitlogin() {
      var aa = await Login(this.formLabelAlign)
      if (aa.code === 0) {
        SetToken(aa.data.token)
         this.$message.success(aa.msg)
      } else {
        this.$message.error(aa.msg)
      }

    },
    async register() {
      var aa = await Register(this.formLabelAlign)
      if (aa.code === 0) {
        this.$message.success(aa.msg)
      } else {
        this.$message.error(aa.msg)

      }
    }
  },
  created() {
  },
}
</script>

 