<template>
  <div>
    <div class="right-align">
      <el-popover
        :title="this.$store.state.userInfo.name"
        placement="bottom"
        trigger="click">
          <div class="list-item" @click="activeName = 'third'">My Profile</div>
          <div class="list-item" @click="logout">Logout</div>

        <el-avatar slot="reference" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </el-popover>
    </div>
  <h1>{{title}}</h1>
  <el-tabs v-model="activeName">
    <el-tab-pane label="List" name="first">
      <ToDoList />
    </el-tab-pane>
    <el-tab-pane label="Calendar" name="second">
      <el-calendar v-model="date" />
    </el-tab-pane>
    <el-tab-pane label="Account" name="third"></el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import ToDoList from './ToDoList'
export default {
  name: 'Container',
  components: {ToDoList},
  data () {
    return {
      title: 'My ToDo List',
      activeName: 'first',
      date: new Date()
    }
  },
  methods: {
    logout () {
      this.$router.push('/login')
      this.$store.dispatch('getUserInfo', {name: ''})
    }
  }
}

</script>

<style scoped>
  .right-align{
    text-align: end;
  }
  .list-item {margin-bottom: 3px;}
  .list-item:hover{
    background: #e9e9e9;
    cursor: pointer;
  }

</style>
