<template>
  <div>
  <h1>{{title}}</h1>
  <el-tabs v-model="activeName">
    <el-tab-pane label="List" name="first">
      <ToDoList />
    </el-tab-pane>
    <el-tab-pane label="Calendar" name="second"></el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
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
      activeName: 'first'
    }
  }
  // methods: {
  //   handleClick (tab, event) {
  //     console.log(tab, event)
  //   }
  // }
}

</script>

<style scoped>

</style>
