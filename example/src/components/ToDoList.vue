<template>
  <div class="ToDoList">
    <h1>{{title}}</h1>
    <el-row>
      <el-col :span="2">
        <el-button icon="el-icon-plus" size="small" @click="addTask">Add task</el-button></el-col>
    </el-row>
    <el-table
      :data="items"
      style="width: 100%">
      <el-table-column label="Status">
        <template slot-scope="scope">
          <el-button v-bind:type="scope.row.done?'success':'plain'" icon="el-icon-check" size="mini" circle @click="toggleDone(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
      <el-table-column label="Task" align="center">
        <template slot-scope="scope">
          <span v-show="!scope.row.isEditing">{{scope.row.title}}</span>
          <el-input v-show="scope.row.isEditing" v-model="editItem" :placeholder="scope.row.title" autofocus="true"
                    @change="edit(scope.row)"/>
        </template>
      </el-table-column>

      <el-table-column label="Edit" align="right">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini" circle @click="scope.row.isEditing = !scope.row.isEditing"></el-button>
        </template>
      </el-table-column>

      <el-table-column label="Delete" align="right">
        <template slot-scope="scope">
          <el-button type="danger" icon="el-icon-delete" size="mini" circle @click="toggleDelete(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
<!--      <el-row v-for="item in items"-->
<!--                :key="item.id"-->
<!--                :gutter="20"-->
<!--        >-->
<!--          <el-col :span="2">-->
<!--        <el-button v-bind:type="item.done?'success':'plain'" icon="el-icon-check" size="mini" circle @click="toggleDone(item)"></el-button>-->
<!--          </el-col>-->
<!--          <el-col :span="14">-->
<!--        <span v-show="!item.isEditing">{{item.title}}</span>-->
<!--            <el-input v-show="item.isEditing" v-model="editItem" :placeholder="item.title" autofocus="true"-->
<!--                                            @change="edit(item)"/>-->
<!--          </el-col>-->
<!--          <el-col :span="2">-->
<!--        <el-button type="primary" icon="el-icon-edit" size="mini" circle @click="item.isEditing = !item.isEditing"></el-button>-->
<!--          </el-col>-->
<!--          <el-col :span="2">-->
<!--        <el-button type="danger" icon="el-icon-delete" size="mini" circle @click="toggleDelete(item)"></el-button>-->
<!--          </el-col>-->
<!--        </el-row>-->

  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data () {
    return {
      title: 'My ToDoList',
      newItem: '',
      editItem: '',
      newId: 4,
      items: [{id: 1, title: 'task1', done: false, isEditing: false},
        {id: 2, title: 'task2', done: false, isEditing: false},
        {id: 3, title: 'task3', done: false, isEditing: false}
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
      this.items.push({id: this.newId++, title: this.newItem, done: false, isEditing: true})
      this.newItem = ''
    },
    toggleDone (index, row) {
      row.done = !row.done
    },
    edit (i) {
      this.items.map((item) => {
        if (item.id === i.id) {
          item.title = this.editItem
          item.isEditing = false
          this.editItem = ''
        }
      })
    }
  }

}
</script>

<style scoped>

</style>
