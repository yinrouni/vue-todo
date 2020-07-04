<template>
  <el-form ref="form" :model="form">
    <el-form-item label="Username">
      <el-input v-model="form.username"></el-input>
    </el-form-item>

    <el-form-item label="Password">
      <el-input type="password" v-model="form.password"></el-input>
    </el-form-item>

    <el-button @click="onLogin"> Login </el-button>

  </el-form>

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      credentials: [{username: 'yinrouni', password: '123456'}, {username: 'zoe', password: '54321'}],
      form: {
        username: '',
        password: ''
      }

    }
  },
  methods: {
    onLogin () {
      let found = false
      this.credentials.forEach((c) => {
        if (c.username === this.form.username && c.password === this.form.password) {
          found = true
        }
      })

      if (found) {
        this.success()
      } else {
        this.fail()
      }
    },

    success () {
      this.$message({
        showClose: true,
        message: 'Success!',
        type: 'success'
      })
      this.$router.push('/index')
      this.$store.dispatch('getUserInfo', {name: this.form.username})
    },
    fail () {
      this.$message({
        showClose: true,
        message: 'Check your credential...',
        type: 'error'
      })
    }
  }

}
</script>

<style scoped>

</style>
