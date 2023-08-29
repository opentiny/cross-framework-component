<template>
  <WujieVue
    width="100%"
    height="100%"
    name="vue2"
    :url="vue2Url"
    :sync="true"
  ></WujieVue>
</template>

<script>
export default {
  data() {
    return {
      vue2Url: 'http://localhost:2003/'
    }
  }
}
</script>

<style lang="scss" scoped></style>
