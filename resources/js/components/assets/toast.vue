<template>
    <div v-if="Toast == 'success'"
        class="flex items-center custom-tost absolute top-20 right-10 z-40 bg-white shadow-lg gap-3">

        <div>
            <h5 class="font-semibold">{{ToastMassage}}</h5>
        </div>

        <div class="icon" @click="CloseToast()">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                fill="currentColor"
                class="text-red-500 hover:text-red-300 bi bi-dash-circle"
                viewBox="0 0 16 16">
                <path
                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path
                    d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
        </a>
        </div>
    </div>
</template>

<script>
export default {


    methods:{

        CloseToast(){
            this.$store.commit('SET_TOAST', false);
        }

    },


    computed:{

        Toast(){
            return this.$store.getters.Get_TOAST;
           },

        ToastMassage(){
            return this.$store.getters.Get_TOAST_MASSAGE;
           },

    }

}
</script>

<style scoped>
.custom-tost{
    padding: 25px 30px;
    border-radius: 5px;
}
</style>
