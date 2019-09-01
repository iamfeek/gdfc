<template>
  <div class="fc-section">
    <h1 class="is-size-3">
        {{section.name}}
      </h1>
      <div class="columns">
        <div
          class="column is-one-quarter is-mobile"
          :key="category.name"
          v-for="category in section.categories"
        >
          <div class="card" >
            <div class="card-content">
                <div
                    class="column is-half is-mobile"
                    :key="wordPair.name"
                    v-for="wordPair in category.wordPairs"
                >
                <p class="title">
                    {{wordPair.word}}
                </p>
              
                <figure class="image is-128x128">
                    <img :src="wordPair.image.url">
                </figure>
            </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

// interfaces
import ISection from '@/interfaces/ISection'

@Component({
    props: {
        section: Object
    }
})
export default class Flashdeck extends Vue {
}
</script>

<style scoped>
  .fc-section {
    margin-bottom: 12px;
  }
</style>