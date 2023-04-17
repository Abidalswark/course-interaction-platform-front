<script setup lang="ts">
import type { Dayjs } from 'dayjs';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

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
    value4: []
});

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


/**
 * 富文本编辑器配置
 */
let editorContent = $ref('')
const EditorOptions = {
    modules: {
        toolbar: [
            [
                { header: [1, 2, 3, 4, false] },
                'bold',
                'italic',
                'underline',
                { color: [] },
                { background: [] },
                { align: [] },
                { list: 'ordered' },
                { list: 'bullet' },
                { font: [] }
            ],
            ['code-block']
        ]
    },
    placeholder: '请输入内容'
}
/**
 * 编辑器内容改变事件触发
 */
let quillRef = $ref<any>()
const update = () => {
    editorContent = quillRef.getHTML()
}
</script>

<template>
    <!-- 页面标题 -->
    <PageTitle title="上传资讯" />
    <div style="margin:20px auto;width: 1024px;">
        <a-form :model="formState" name="basic" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
            <a-form-item label="新闻标题" autocomplete="off">
                <a-input v-model:value="formState.name" placeholder="请输入新闻内容"/>
            </a-form-item>
            <a-form-item label="新闻内容" autocomplete="off">
                <!-- 编辑器 -->
                <QuillEditor :options="EditorOptions" ref="quillRef" @update:content="update" 
                    style="color:#000000;height: 480px;" />
            </a-form-item>
            <!-- 上传附件 -->
            <a-form-item label="上传资源文件">
                <a-upload v-model:file-list="fileList" name="file" action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    :headers="headers" @change="handleChange">
                    <a-button>
                        <upload-outlined></upload-outlined>
                        点击上传
                    </a-button>
                </a-upload>
            </a-form-item>
        </a-form>
        <!-- 操作按钮 -->
        <div style="text-align: center;">
            <a-button type="primary">保存</a-button>
            <a-button type="primary" style="margin-left: 20px;">发布</a-button>
        </div>
    </div>
</template>
<style lang="less" scoped></style>
