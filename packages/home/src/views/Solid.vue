<template>
  <WujieVue
    width="100%"
    height="100%"
    name="solid"
    :url="solidUrl"
    :sync="true"
  ></WujieVue>
</template>

<script>

export default {
  computed: {
    solidUrl() {
      return 'http://localhost:2002/'
    }
  }
}
</script>

<style lang="scss" scoped></style>
