<template>
  <el-card :body-style="{ padding: '0px' }">
    <a :href="this.user.html_url">
    <img src="https://avatars3.githubusercontent.com/u/46579290?v=4" class="image">
    </a>
    <div style="padding: 14px;">
      <span>{{this.user.name}}</span>
      <div class="bottom clearfix">
        <span class="time">Joined at: </span>
        <time class="time">{{this.user.created_at}}</time>
        <div class="bottom clearfix">
        <span>Followers: {{this.user.followers}}</span>
        <span>Following: {{this.user.following}}</span>
        </div>
      </div>
    </div>
  </el-card>

</template>

<script>
import axios from 'axios'
export default {
  name: 'GithubCard',
  props: {
    username: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      user: {}
    }
  },
  created () {
    axios.get(`https://api.github.com/users/${this.username}`).then((res) => {
      this.user = res.data
    })
  }

}
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

</style>
