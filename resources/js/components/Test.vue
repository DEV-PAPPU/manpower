<template>
    <div class="mt-3">
        <div class="form-group">
            <div class="form-control">
            <p v-for="item in selectedNames" :key="item.name" >{{ item.name }}</p>
            </div>
        </div>

        <div v-for="veggie in veggies" :key="veggie.name" @click="sent(veggie)" class="list-of-yards">
            <div class="d-flex gap-2">
                <input type="checkbox" :value="veggie.name">
                <p>{{veggie.name}}</p>
            </div>
        </div>
        
    </div>
</template>


<script>
import axios from 'axios'
    export default {
        components: { Multiselect: window.VueMultiselect.default },
        data: () =>{
            return {

               visaForm:{
                 visa_no: '',
                 visa_qty: '',
                 trade: '',
                 salary: '',
                 price_reference: '',
                 duty_hours: '',
               },
               checked:[],
               visaFormdata:[],
               veggies: [
        { id: 1, name: "a", selected: true },
        { id: 2, name: "c", selected: false },
        { id: 3, name: "v", selected: false },
        { id: 4, name: "f", selected: true }
      ]
            }
        },

        methods:{
            formvisa(){

                console.log('hello test',this.visaForm)

                let  newData = {
                    visa_no: this.visaForm.visa_no,
                    visa_qty: this.visaForm.visa_qty,
                    trade: this.visaForm.trade,
                    salary: this.visaForm.salary,
                    price_peference: this.visaForm.price_peference,
                    duty_hours: this.visaForm.duty_hours,
                };

                this.visaFormdata.push(newData);

            },


            sent(data){
                
                //checking is item in list  or not
                let item = this.checked.filter(a => a.id == data.id)
                if(item.length){

                    let index = this.checked.indexOf(data);
                    this.checked.splice(index, 1);

                   console.log('new items',this.checked.length)
                }

                // if item not in list then push this iten in list
                else{
                    this.checked.push(data);
                    console.log('old items',this.checked.length)
                }
            }


        },

        computed: {
        selectedNames() {
            return this.checked;
        }
  },
    }
</script>

<style scoped>

@media only screen and (max-width: 768px){
	.container{
        padding: 20px 20px;
    }
}
</style>