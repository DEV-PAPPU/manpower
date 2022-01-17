<template>
    <div class="flex items-center justify-center text-center mt-2 align-middle">
        <div class="p-6 bg-gray-100 rounded-lg border-dotted border-4  border-blue-500 w-full py-16" @dragover="dragover"
            @dragleave="dragleave" @drop="drop">
            <input type="file" name="fields[assetsFieldHandle][]" id="assetsFieldHandle"
                class="opacity-0 overflow-hidden absolute" @change="onChange" ref="file"
                accept=".pdf,.jpg,.jpeg,.png" />

            <label for="assetsFieldHandle" class="block cursor-pointer">
                <div>
                    Drop your file
                    or <span class="underline">click here</span>
                </div>
            </label>

            <ul class="mt-4" v-if="this.filelist.length" v-cloak>
                <div class="image">
                    {{filelist[0].name }} <button class="ml-2" type="button" @click="remove()"
                        title="Remove file">remove</button>
                </div>

            </ul>

             <!-- if editing product -->
            <div v-if="isEdit" v-cloak class="image flex gap-3">
                <img :src="image" alt="" class="mx-auto" style="width:60px" srcset="">
            </div>

            <!-- <div v-if="!img" class="my-3 mr-2 flex items-center justify-center">
                <img :src="websiteaddress+'images/upload-icon.png'" alt="" style="width:70px" srcset="">
            </div> -->
        </div>
    </div>
</template>

<script>
   export default {
     props:['image'],
     data: () => ({
      filelist:'',
      files:'',
      isEdit:false
      }),

        methods: {
              addFile(e) {
                let droppedFiles = e.dataTransfer.files;
                if(!droppedFiles) return;
                 e.currentTarget.classList.add('bg-green-300');

                ([...droppedFiles]).forEach(f => {
                    this.files.push(f);
                });

                console.log(this.files)
                },
                removeFile(file){
                this.files = this.files.filter(f => {
                    return f != file;
                });
                },

                onChange() {
                    this.filelist = [...this.$refs.file.files];
                    this.$emit('image',this.filelist[0]);

                   },
                    remove() {
                    this.filelist = ''
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

        computed:{
            img(){
                return this.filelist
            }
        }

    }
</script>



