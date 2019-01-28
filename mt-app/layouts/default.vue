<template>
  <el-container class="layout-default">
    <el-header style="height:auto;">
      <my-header/>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import MyHeader from "@/components/public/header/index.vue"
export default {
  components: {
    MyHeader
  }
}
</script>
<style>
@import "@/assets/css/public/layout.scss";
</style>
