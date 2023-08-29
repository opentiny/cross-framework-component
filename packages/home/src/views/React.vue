<template>
  <WujieVue
    width="100%"
    height="100%"
    name="react"
    :url="reactUrl"
    :sync="true"
  ></WujieVue>
</template>

<script>
export default {
  data() {
    return {
      reactUrl: 'http://localhost:2001/'
    }
  }
}
</script>
