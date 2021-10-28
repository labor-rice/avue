<template>
  <div>
    <avue-form ref="form" v-model="obj" :option="option" @reset-change="emptytChange" @submit="submit">
    </avue-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      obj: {},   // form 数据
      option: {  // form 配置
        column: [
          {
            label: '用户名',
            prop: 'username',
            tip: '用户名',
            disabled: true,
            span: 8,
            maxlength: 3,
            suffixIcon: 'el-icon-tickets',
            prefixIcon: 'el-icon-tickets',
            minlength: 2,
            mock: {
              type: 'name',
              en: true
            },
            rules: [
              {
                required: true,
                message: '请输入用户名',
                trigger: 'blur'
              }
            ]
          },
          {
            label: '姓名',
            prop: 'name',
            mock: {
              type: 'name'
            },
            span: 8
          },
          {
            label: '密码',
            prop: 'password',
            type: 'password',
            mock: {
              type: 'name'
            },
            span: 8
          },
          {
            label: '数字',
            prop: 'number',
            type: 'number',
            span: 8,
            precision: 2,
            mock: {
              type: 'number',
              max: 1,
              min: 2,
              precision: 2
            },
            minRows: 0,
            maxRows: 3
          },
          {
            label: '类型',
            prop: 'type',
            type: 'select',
            dicData: [
              {
                label: '真',
                value: 'true'
              },
              {
                label: '假',
                value: 'false'
              }
            ],
            span: 8,
            mock: {
              type: 'dic'
            }
          },
          {
            label: '权限',
            prop: 'grade',
            span: 8,
            type: 'checkbox',
            dicData: [
              {
                label: '真',
                value: 'true'
              },
              {
                label: '假',
                value: 'false'
              }
            ],
            mock: {
              type: 'dic'
            }
          },
          {
            label: '开关',
            prop: 'switch',
            span: 8,
            type: 'switch',
            dicData: [
              {
                label: '男',
                value: 0
              },
              {
                label: '女',
                value: 1
              }
            ],
            mock: {
              type: 'dic'
            },
            hide: true
          },
          {
            label: '性别',
            prop: 'sex',
            span: 8,
            type: 'radio',
            dicData: [
              {
                label: '男',
                value: 0
              },
              {
                label: '女',
                value: 1
              }
            ],
            mock: {
              type: 'dic'
            }
          },
          {
            label: '网站',
            span: 8,
            prop: 'url',
            prepend: 'http://',
            mock: {
              type: 'url',
              header: false
            },
            append: 'com',
            row: true
          },
          {
            label: '日期',
            prop: 'date',
            type: 'date',
            span: 8,
            format: 'yyyy-MM-dd',
            valueFormat: 'yyyy-MM-dd',
            mock: {
              type: 'datetime',
              format: 'yyyy-MM-dd'
            }
          },
          {
            label: '日期时间',
            prop: 'datetime',
            type: 'datetime',
            span: 8,
            format: 'yyyy-MM-dd hh:mm:ss',
            valueFormat: 'yyyy-MM-dd hh:mm:ss',
            mock: {
              type: 'datetime',
              format: 'yyyy-MM-dd hh:mm:ss',
              now: true
            }
          },
          {
            label: '时间',
            prop: 'time',
            type: 'time',
            span: 8,
            format: 'hh:mm:ss',
            valueFormat: 'hh:mm:ss',
            mock: {
              type: 'datetime',
              format: 'hh:mm:ss'
            }
          },
          {
            label: '地址',
            span: 24,
            prop: 'address',
            mock: {
              type: 'county'
            }
          },
          {
            type: 'textarea',
            label: '建议',
            span: 24,
            prop: "adit",
            mock: {
              type: 'word',
              min: 10,
              max: 30
            }
          }
        ],
        labelPosition: 'right'
      }
    }
  },
  mounted () {
    this.obj = {
      username: 'smallwei',
      switch: 0,
      phone: '17547400800'
    }
  },
  methods: {
    emptytChange () {
      this.$message.success('清空方法回调');
    },
    submit () {
      this.$message.success('当前数据' + JSON.stringify(this.obj));
    }
  }
}
</script>

<style scoped>
</style>
