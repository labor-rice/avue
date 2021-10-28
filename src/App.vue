<template>
  <div id="app">
    <avue-tabs :option="option" @change="handleChange"></avue-tabs>
    <span>
      <router-view />
    </span>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      option: {
        column: [
          {
            icon: 'el-icon-info',
            label: '表单',
            prop: 'form',
          },
          {
            icon: 'el-icon-info',
            label: '表格',
            prop: 'table',
          }
        ]
      }
    }
  },
  methods: {
    handleChange (column) {
      this.$message.success(JSON.stringify(column));
      this.$router.push({ path: '/' + column.prop })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 30px;
}
</style>
