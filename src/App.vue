<template>
  <div id="app">
    <Navbar />
    <div class="container is-fluid">
      <router-view></router-view>
    </div>  
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
.container {
  padding-left: 12px;
  padding-right: 12px;
}
</style>
