<!-- Vue component -->
<template>
  <div>
    <Multiselect v-model="value" :options="options"></Multiselect>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'

  export default {
    // OR register locally
    components: { Multiselect },
    data () {
      return {
        value: '',
        options: ['list', 'of', 'options']
      }
    }
  }
</script>

<!-- New step!
     Add Multiselect CSS. Can be added as a static asset or inside a component. -->
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
