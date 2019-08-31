<template>
  <div class="navbar-wrapper">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container is-fluid">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <span @click="toggleMenuActive">
              FC
            </span>
          </router-link>

          <a @click="toggleMenuActive" role="button" v-bind:class="{'is-active': menuActive}" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu" :class="{'is-active': menuActive}">
          <div class="navbar-end">
            <router-link 
              :key="route.link"
              v-for="route in routes" :to="route.link" class="navbar-item">
              <span @click="toggleMenuActive">{{route.linkName}}</span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Navbar extends Vue {
  @Prop() private msg!: string;
  private menuActive = false;
  private routes = [

  ];
  private toggleMenuActive() {
    this.menuActive = !this.menuActive;
  }
}
</script>

<style lang="scss" scoped>
#title-midas{
  font-weight: 900;
  color: white;
}
#title-creatives{
  color: #d64021;
}
.navbar-item:hover, .navbar-item:focus {
  background-color: transparent;
  color: #d64021;
}
@media only screen and (max-width: 768px) {
  .navbar-burger {
    margin-right: -6px;
  }
}
</style>