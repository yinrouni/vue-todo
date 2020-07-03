<template>
  <div class="ToDoList">
    <h1>{{title}}</h1>

        <el-row v-for="item in items"
                :key="item.id"
                :gutter="20"
        >
          <el-col :span="2">
        <el-button v-bind:type="item.done?'success':'plain'" icon="el-icon-check" size="mini" circle @click="toggleDone(item)"></el-button>
          </el-col>
          <el-col :span="14">
        <span>{{item.title}}</span>
          </el-col>
          <el-col :span="2">
        <el-button type="primary" icon="el-icon-edit" size="mini" circle></el-button>
          </el-col>
          <el-col :span="2">
        <el-button type="danger" icon="el-icon-delete" size="mini" circle @click="toggleDelete(item)"></el-button>
          </el-col>
        </el-row>

    <div>
      <el-input type="text" v-model="newItem"/>
      <el-button @click="addTask">Add</el-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data () {
    return {
      title: 'My ToDoList',
      newItem: '',
      newId: 4,
      items: [{id: 1, title: 'task1', done: false}, {id: 2, title: 'task2', done: false},
        {id: 3, title: 'task3', done: false}
      ]
    }
  },
  methods: {
    toggleDelete (i) {
      this.items.map((item, index) => {
        if (item.id === i.id) {
          this.items.splice(index, 1)
        }
      })
    },
    addTask () {
      this.items.push({id: this.newId++, title: this.newItem, done: false})
      this.newItem = ''
    },
    toggleDone (item) {
      item.done = !item.done
    }
  }

}
</script>

<style scoped>
  ul {
    list-style-type: none;
  }
</style>
