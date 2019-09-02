<template>
  <div class="fc-section">
    <h1 class="is-size-3">
      {{categoryName}}
    </h1>
    <h1 class="is-size-3">
        {{categoryName}}
        {{data.name}}
        {{data.wordPairs.length}}
      </h1>
      <div class="columns">
        <div
          class="column is-one-quarter is-mobile"
          :key="wordpair.word"
          v-for="wordpair in data.wordPairs"
        >
          <div class="card" >
            <div class="card-content">
                <p class="title">
                    {{wordpair.word}}
                </p>
                <figure class="image is-128x128">
                    <img :src="wordpair.image.url">
                </figure>
            </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import CategoryRepo from '@/repositories/CategoryRepo';
const CatRepo = new CategoryRepo();

var data = null;

export default {
  data: () => ({
    data: data,
  }),
  created() {
    data = CatRepo.getAllWordPairs(this.categoryName);
    console.log("categoryName: " + this.categoryName);
    console.log("data: " + data);
  },
  name: "Section",
  props: ['categoryData', 'categoryName']
}
</script>

<style scoped>
  .fc-section {
    margin-bottom: 12px;
  }
</style>