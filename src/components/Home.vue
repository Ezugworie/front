<template>
  <div>
    <nav />
    Sars
  </div>
</template>

<script>
import Nav from './Nav.vue';
export default {
  name: 'Home',
  props: {
    msg: String,
  },
  components: {
    Nav,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
