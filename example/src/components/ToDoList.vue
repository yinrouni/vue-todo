<template>
  <div class="ToDoList">
    <h1>{{title}}</h1>

    <ul>
      <li v-for="item in items"
          :key="item.id"
      >
        <span>{{item.title}}</span>
        <button @click="toggleDone(item)">Done</button>

      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data () {
    return {
      title: 'My ToDoList',
      items: [{id: 1, title: 'task1'}, {id: 2, title: 'task2'},
        {id: 3, title: 'task3'}
      ]
    }
  },
  methods: {
    toggleDone (i) {
      this.items.map((item, index) => {
        if (item.id === i.id) {
          this.items.splice(index, 1)
        }
      })
    }
  }

}
</script>

<style scoped>
ul{
  list-style-type: none;
}
</style>
