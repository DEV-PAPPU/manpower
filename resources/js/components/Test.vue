<template>
  <div class="container">
    <vue-multi-select
      v-model="values"
      search
      historyButton
      :filters="filters"
      :options="options"
      :selectOptions="data"/>
      <button
        @click="reloadFunction" >
        Change v-model
      </button>

      {{values}}
  </div>
</template>

<script>
import vueMultiSelect from 'vue-multi-select';
import 'vue-multi-select/dist/lib/vue-multi-select.css';
import axios from 'axios';

export default {
  data() {
    return {
      name: 'first group',
      values: [],
      data: [{
        title: 'part one',
        elements: [],
      }],
      filters: [{
        nameAll: 'Select all',
        nameNotAll: 'Deselect all',
        func() {
          return true;
        },
      }],
      options: {
        multi: true,
        groups: true,
        labelName: 'sector_name',
        labelList: 'elements',
        groupName: 'title',
        cssSelected: option => (option.selected ? { 'background-color': '#5764c6' } : ''),
      },
    };
  },
  methods: {
    reloadFunction() {
      this.values = [
        { label: '2' },
        { label: '3' },
      ];
    },
  },
  components: {
    vueMultiSelect,
  },

  mounted(){
    axios.get("sectors").then(res =>{

                     this.data[elements] = res.data;

            })
  }
};
</script>