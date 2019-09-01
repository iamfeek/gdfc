<template>
  <div>
    <Flashdeck 
      v-for="section in sections" 
      :key="section.id" 
      :section="section"
    />
  </div>
</template>

<script>
import SectionsRepo from '@/repositories/SectionsRepo';
import Flashdeck from '@/components/Flashdeck';

const repo = new SectionsRepo();

export default {
  data: () => ({
    sections: repo.getAllSections(),
  }),
  components: {
    Flashdeck,
  }
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