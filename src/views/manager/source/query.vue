<script setup lang="ts">
import type { Dayjs } from 'dayjs';
import type { SelectProps } from 'ant-design-vue';

type RangeValue = [Dayjs, Dayjs];
const formState = reactive({
    name: '',
    password: '',
    value: '0',
    value1: '承泽园',
    value3: '脆弱人群关怀服务',
    value2: ref<RangeValue>(),
    
});
const shequ = ['承泽园','畅春园','中关园','燕北园','燕园街道','朗润园','蔚秀园','燕东园']

const types = ['脆弱人群关怀服务','社区居民赋能服务','困难人群福利服务','重点重大事件应急服务']


let loading = $ref(false)

const pagination = reactive({
    defaultCurrent: 1, // 默认当前页数
    defaultPageSize: 10, // 默认当前页显示数据的大小
    total: 0, // 总数，必须先有
    showSizeChanger: true,
    showQuickJumper: true,
    pageSizeOptions: ["10", "20", "50", "100"],
    showTotal: (total: any) => `共 ${total} 条`, // 显示总数
    onShowSizeChange: (current: any, pageSize: number) => {
        pagination.defaultCurrent = 1;
        pagination.defaultPageSize = pageSize;
        // getAccountList(); //显示列表的接口名称
    },
    // 改变每页数量时更新显示
    onChange: (current: number, size: number) => {
        pagination.defaultCurrent = current;
        pagination.defaultPageSize = size;
        // getAccountList();
    },
})


// 分页数据
const tables = reactive({
    data: [],  // 列表
    //表头
    columns: [
        {
            title: '序号',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '资源名称',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: '资源类别',
            dataIndex: 'head_img',
            key: 'head_img'
        },
        {
            title: '实习社区',
            dataIndex: 'phone',
            key: 'phone'
        },
        {
            title: '上传时间',
            dataIndex: 'role',
            key: 'role'
        },
        {
            title: '处理状态',
            dataIndex: 'integral',
            key: 'integral'
        },
        {
            title: '退回原因',
            dataIndex: 'operation',
            key: 'operation'
        },
    ]
})

</script>

<template>
    <PageTitle title="资源查询" />
    <!-- 查询条件 -->
    <div>
        <div style="width: 300px;">
            <a-form-item label="资源类型" id="select-cls">
                <a-select ref="select" v-model:value="formState.value1">
                    <a-select-option value="0">电子期刊(个人小组)</a-select-option>
                </a-select>
            </a-form-item>
        </div>

        <a-form
        ref="formRef"
        name="advanced_search"
        class="ant-advanced-search-form"
        :model="formState"
        >
      <a-row :gutter="24">
          <a-col :span="8">
            <a-form-item label="实习社区">
                <a-select ref="select" style="width: 100%;" v-model:value="formState.value1" placeholder="请输入选择社区">
                    <a-select-option v-for="(item,index) in shequ" value="index" :key="index">{{item}}</a-select-option>
                </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="实习时间">
                <a-range-picker v-model:value="formState.value2" show-time style="width: 100%;" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="个案名称">
                <a-input v-model:value="formState.name" placeholder="请输入篇名"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="服务对象">
                <a-input v-model:value="formState.name" placeholder="请输入服务对象"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="个案类别">
                <a-select ref="select" v-model:value="formState.value3" style="width: 100%;">
                    <a-select-option v-for="(item,index) in types" value="index" :key="index">{{item}}</a-select-option>
                </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="8" style="text-align: right">
          <a-button type="primary" html-type="submit">查询</a-button>
          <a-button style="margin: 0 8px">清空</a-button>
        </a-col>
      </a-row>
    </a-form>
    </div>
    <!-- 表单显示数据 -->
    <div class="data-table">
        <a-table :columns="tables.columns" :data-source="tables.data" :pagination="pagination" :loading="loading" size="small">
        </a-table>
    </div>
</template>
<style lang="less" scoped>
#select-cls,.data-report {
    :deep(.ant-select:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector) {
        border-color: transparent;
        box-shadow: none;
    }
}
.data-table{
    margin: 30px 0;
}
</style>
