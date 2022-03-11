<template>
  <div class="App">
    <ContactForm msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import ContactForm from './components/ContactForm.vue'

export default {
  name: 'App',
  components: {
    ContactForm
  }
}
</script>

<style scoped>
  .App{
          font-size: 16px;
      }
</style>
