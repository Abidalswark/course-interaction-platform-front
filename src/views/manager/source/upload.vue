<script setup lang="ts">
import type { Dayjs } from 'dayjs';
import type { SelectProps } from 'ant-design-vue';

type RangeValue = [Dayjs, Dayjs];

const formState = reactive({
    name: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
    value1: '0',
    value2: ref<RangeValue>(),
    value3: ref<Dayjs>(),
    value4:[]
});
const shequ = ['承泽园','畅春园','中关园','燕北园','燕园街道','朗润园','蔚秀园','燕东园']

const options = ref<SelectProps['options']>([
      {
        value: 'a1',
        label: 'a1',
      },
    ]);

    const handleChange = info => {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        // message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        // message.error(`${info.file.name} file upload failed.`);
      }
    };
    const fileList = ref([]);
    const headers = {
        authorization: 'authorization-text',
      }
</script>

<template>
    <!-- 页面标题 -->
    <PageTitle title="资源上传" />
    <!-- 选项 -->
    <div class="select-upload-type">
        上传类型：
        <a-select ref="select" v-model:value="formState.value1">
            <a-select-option value="0">电子期刊(个人小组)</a-select-option>
        </a-select>
    </div>
    <!-- 上传表单 -->
    <div style="margin:20px auto;width: 600px;">
        <a-form :model="formState" name="basic"  :label-col="{span:4}" :wrapper-col="{ span: 20 }">
          
            <a-form-item label="实习社区" autocomplete="off">
                <a-select ref="select" v-model:value="formState.name" placeholder="请输入选择社区">
                    <a-select-option v-for="(item,index) in shequ" value="index" :key="index">{{item}}</a-select-option>
                </a-select>
            </a-form-item>

            <a-form-item label="实习时间">
                <a-range-picker v-model:value="formState.value2" show-time style="width: 498px;" />
            </a-form-item>

            <a-form-item label="工作地点">
                <a-input v-model:value="formState.name" placeholder="请输入工作地点"/>
            </a-form-item>

            <a-form-item label="篇名">
                <a-input v-model:value="formState.name" placeholder="请输入篇名"/>
            </a-form-item>

            <a-form-item label="关键词">
                <a-select
                    v-model:value="formState.value4"
                    mode="tags"
                    style="width: 100%"
                    :token-separators="[',']"
                    placeholder="请输入关键字"
                    :options="options"
                ></a-select>
            </a-form-item>

            <a-form-item label="服务对象">
                <a-input v-model:value="formState.name" placeholder="请输入服务对象"/>
            </a-form-item>

            <a-form-item label="上传资源日期">
                <a-date-picker v-model:value="formState.value3" style="width: 498px;" placeholder="请输选择上传资源日期"/>
            </a-form-item>

            <a-form-item label="上传资源文件">
                <a-upload
                    v-model:file-list="fileList"
                    name="file"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    :headers="headers"
                    @change="handleChange"
                >
                    <a-button>
                    <upload-outlined></upload-outlined>
                    点击上传
                    </a-button>
                </a-upload>
            </a-form-item>
           
               
        </a-form>
        <div style="text-align: right;">
            <a-button type="primary" >确定提交</a-button>
        </div>
    </div>
</template>
<style lang="less" scoped>
.select-upload-type {
    margin: 40px 0;
    font-weight: bold;
    text-align: center;
    :deep(.ant-select:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector) {
        border-color: transparent;
        box-shadow: none;
    }
}
</style>
