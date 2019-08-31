<template>
  <div>
    <Section 
      v-for="section in sections" 
      :key="section.id" 
      :section="section"
    />
  </div>
</template>

<script>
import SectionsRepo from '@/repositories/SectionsRepo';
import Section from '@/components/Section';

const repo = new SectionsRepo();

export default {
  data: () => ({
    sections: repo.getAllSections(),
  }),
  components: {
    Section,
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