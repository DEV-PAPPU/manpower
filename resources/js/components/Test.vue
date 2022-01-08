<template>
    <div class="container">
        <h1>Vue 3 jQuery DataTable Example Tutorial - Tutsmake.com</h1>
        <div class="">
            <p><input type="file"  name="image" id="file" @change="changeImg()"
                    style="display: none;"></p>
            <p><label for="file" style="cursor: pointer;">Upload Image</label></p>
            <p><img id="output" width="200" /></p>
        </div>
    </div>
</template>
 
<script>
 
export default {
  data: function() {
        return {
            image:[]
        }
    },

  methods:{

   changeImg(){
     var image = document.getElementById('file');
     var output = document.getElementById('output');
	   output.src = URL.createObjectURL(image.files[0]);
   }
  }
}
</script>