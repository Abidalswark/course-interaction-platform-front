<script setup lang="ts">

const current = ref(2)
</script>

<template>
    <PageTitle title="资源资讯" />
    <div class="list">
        <ul>
            <li flexb v-for="item in 20" >
                <div style="display: flex;">
                    <div class="dian"></div>
                    <span>
                        北京大学博士后研究人员管理办法
                    </span>
                </div>
                <div>
                    2022-01-26
                </div>
            </li>
        </ul>
    </div>
    <!-- 分页 -->
    <div style="text-align:center;margin-top: 10px;">
        <a-pagination v-model:current="current" :total="50" show-less-items />
    </div>
</template>
<style lang="less" scoped>
.list {
    .dian{
        margin-top: 18px;
    margin-right: 5px;
        width: 5px;
        height: 5px;
        background-color: #be0000;
    }
    color: #525252;
    font-size: 15px;
    margin: 0 150px;

    li {
        border-bottom: 1px solid rgb(212, 212, 212);
        line-height: 40px;
        cursor: pointer;
    }
}
</style>
