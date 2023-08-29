<template>
  <div class="multiple" style="">
    <div class="home-box">
      <WujieVue class="item" name="vue2" :url="vue2Url" :sync="true"></WujieVue>
      <WujieVue
        class="item"
        name="react"
        :url="reactUrl"
        :sync="true"
      ></WujieVue
      ><WujieVue
        class="item"
        name="solid"
        :url="solidUrl"
        :sync="true"
      ></WujieVue>
    </div>
    <div>
      <WujieVue
        class="item item-vue3"
        name="vue3"
        :url="vue3Url"
        :sync="true"
      ></WujieVue>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      reactUrl: 'http://localhost:2001/',
      solidUrl: 'http://localhost:2002/',
      vue2Url: 'http://localhost:2003/',
      vue3Url: 'http://localhost:2004/'
    }
  }
}
</script>

<style scoped>
.multiple {
  width: 98%;
  height: 100%;
  padding: 5px 10px 0 10px;
}

.home-box {
  display: flex;
  justify-content: space-between;
}
.item {
  display: block;
  border: 1px dashed #ccc;
  border-radius: 8px;
  width: 32%;
  height: 30vh;
  overflow-y: auto;
}

.item-vue3 {
  width: 100%;
  height: 65vh;
  margin-top: 20px;
}
</style>
