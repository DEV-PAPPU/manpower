<template>
<!-- Eta TailwindCss Diye Kora -->
    <div class="content-info ml-6 mr-6">
        <div class="hidden lg:block">
            <p class="mt-2 w-full h-2 lg:h-3"><p/>
            <p class="mt-2 w-full h-2 lg:h-3"><p/>
            <p class="mt-2 w-full h-2 lg:h-3"><p/>
        </div>
        <div class="lg:mt-4 mb-4">
            <p class="mt-2 w-full h-2 lg:h-3"><p/>
            <p class="mt-2 w-full h-2 lg:h-3"><p/>
            <p class="mt-2 w-full h-2 lg:h-3"><p/>
        </div>
        <div>
            <p class="mt-2 w-full h-2 lg:h-3"><p/>
            <p class="mt-2 w-full h-2 lg:h-3"><p/>
            <p class="mt-2 w-full h-2 lg:h-3"><p/>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.content-info p {
  animation: pulse-bg 1s infinite;
}

.content-info p {
  border-radius: 50px;
}
@keyframes pulse-bg {
  0% {
    background-color: rgb(216, 214, 214);
  }
  50% {
    background-color: #e7e6e6;
  }
  100% {
    background-color: rgb(226, 226, 226);
  }
}
</style>
