<template>
  <div>
    <h1>{{category}}</h1>
    <Flashdeck 
      :categoryData="data"
      :categoryName="category"
    />
  </div>
</template>

<script>

import SectionsRepo from '@/repositories/SectionsRepo';
import CategoryRepo from '@/repositories/CategoryRepo';
import Flashdeck from '@/components/Flashdeck';

const repo = new SectionsRepo();
const CatRepo = new CategoryRepo();

var data = null;

export default {
  data: () => ({
    sections: repo.getAllSections(),
    data: data,
  }),
  created() {
    data = CatRepo.getAllWordPairs(this.$route.params.category);
  },
  components: {
    Flashdeck,
  }, 
  props: ['category']
};

</script>

<style scoped>
  #view-all-work-link{
    color: white;
    font-weight: bold;
    text-decoration: underline;
    margin: 0 auto;
  }
</style>