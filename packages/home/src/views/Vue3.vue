<template>
  <WujieVue
    width="100%"
    height="100%"
    name="vue3"
    :url="vue3Url"
    :sync="true"
  ></WujieVue>
</template>

<script>
export default {
  data() {
    return {
      vue3Url: 'http://localhost:2004/'
    }
  }
}
</script>

<style lang="scss" scoped></style>
