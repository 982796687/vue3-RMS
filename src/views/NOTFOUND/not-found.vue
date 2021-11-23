<template>
  <div><h2>404-NOYFOUND</h2></div>
  <button @click="callBack">返回上一层</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const callBack = () => {
      setTimeout(function () {
        window.location.href = 'http://' + window.location.host
      }, 1)
      console.log(window.location)
    }
    return { callBack }
  }
})
</script>

<style scoped></style>
