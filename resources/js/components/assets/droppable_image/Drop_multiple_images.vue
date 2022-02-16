<template>
    <div class="flex items-center justify-center  text-center mt-2">
        <div class="p-6 bg-gray-100 image_drop  "
            @dragover="dragover" @dragleave="dragleave" @drop="drop">
            
            <input type="file" name="fields[assetsFieldHandle][]" id="assetsFieldHandle"
                class="w-px h-px opacity-0 overflow-hidden absolute" @change="onChange" ref="file"
                accept=".pdf,.jpg,.jpeg,.png" multiple />

            <label for="assetsFieldHandle" class="mb-2 block cursor_pointer">
                <p class="text-center">
                    Drop your file
                    or <span class="underline">click here </span>
                </p>
            </label>

            <!-- images showing -->
            <ul class="mt-4" v-if="filelist.length" v-cloak>
                <li class="text-sm p-1" v-for="file in filelist" :key="file.name">

                    {{ file.name }}<span class="ml-2" type="button" @click="remove(filelist.indexOf(file))"
                        title="Remove file">remove</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
   export default {
     data: () => ({
      filelist:[],
      files:[],
      isEditingImage:false

      }),

        methods: {
              addFile(e) {
                let droppedFiles = e.dataTransfer.files;
                if(!droppedFiles) return;
                 e.currentTarget.classList.add('bg-green-300');

                ([...droppedFiles]).forEach(f => {
                    this.files.push(f);
                });

                },
                removeFile(file){

                    this.files = this.files.filter(f => {
                        return f != file;
                    });

                   this.$emit('new_images',this.filelist); 

                },
                onChange() {
                    this.filelist = [...this.$refs.file.files];
                    // console.log(this.filelist);
                    this.$emit('new_images',this.filelist);
                   },
                    remove(i) {
                    this.filelist.splice(i, 1);
                    },
                    dragover(event) {
                    event.preventDefault();
                    // Add some visual fluff to show the user can drop its files
                    if (!event.currentTarget.classList.contains('bg-green-300')) {
                        event.currentTarget.classList.remove('bg-gray-100');
                        event.currentTarget.classList.add('bg-green-300');
                    }
                    },
                    dragleave(event) {
                    // Clean up
                    event.currentTarget.classList.add('bg-gray-100');
                    event.currentTarget.classList.remove('bg-green-300');
                    },
                    drop(event) {
                    event.preventDefault();
                    this.$refs.file.files = event.dataTransfer.files;
                    this.onChange(); // Trigger the onChange event manually
                    // Clean up
                    event.currentTarget.classList.add('bg-gray-100');
                    event.currentTarget.classList.remove('bg-green-300');
                  },
        },

    }
</script>

<style scoped>

.imgdelete {
    position: absolute;
    top: -7px !important;
    left: -4px !important;
    background: red;
    color: white;
    border-radius: 70px !important;
    width: 20px !important;
}

.image_drop{
    border-radius: 8px;
    border: dotted rgb(97, 207, 83) 2px;
    padding: 40px 20px;
}
.cursor_pointer{
    cursor: pointer;
}

</style>



