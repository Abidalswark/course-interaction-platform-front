<script setup lang="ts">

const formState = reactive({
    user: '',
    password: '',
    value1: '0',
});

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
            title: '资源类型',
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
            title: '实习时间',
            dataIndex: 'integral',
            key: 'integral'
        },
        {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation'
        },
    ]
})

</script>

<template>
    <!-- 页面标题 -->
    <PageTitle title="课程资源管理" />
    <!-- 查询条件 -->
    <div class="search" flexb>
        <div></div>
        <a-form layout="inline" :model="formState">
            <a-form-item label="资源类型" id="select-cls">
                <a-select ref="select" v-model:value="formState.value1">
                    <a-select-option value="0">电子期刊(个人小组)</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item>
                <a-input v-model:value="formState.user" placeholder="请输入你要搜索的内容">
                    <template #prefix><search-outlined style="color: #000000" /></template>
                </a-input>
            </a-form-item>
            <a-form-item>

            </a-form-item>
            <a-form-item>
                <a-button type="primary" html-type="submit">
                    查询
                </a-button>
            </a-form-item>
        </a-form>
    </div>
    <!-- 表格 -->
    <div class="data-table">
        <a-table :columns="tables.columns" :data-source="tables.data" :pagination="pagination" :loading="loading"
            size="small">
        </a-table>
    </div>
</template>
<style lang="less" scoped>
.search {
    text-align: right;
}

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
