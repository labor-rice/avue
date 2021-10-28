<template>
  <div>
    <avue-crud :data="data" :option="option" v-model="tableObj"></avue-crud>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data () {
    return {
      tableObj: {},
      data: [   // 表格数据
        {
          name: '张三',
          sex: '男'
        }, {
          name: '李四',
          sex: '女'
        }, {
          name: '王五',
          sex: '女'
        }, {
          name: '赵六',
          sex: '男'
        }
      ],
      option: {  // 表格配置
        align: 'center',
        menuAlign: 'center',
        column: [
          {
            label: '姓名',
            prop: 'name'
          },
          {
            label: '性别',
            prop: 'sex'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
</style>
