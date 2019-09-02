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
          <div class="card" @click="select(section, category)">
            <div class="card-content">
              <p class="title">
                {{category.name}}
              </p>
              
              There are a total of {{category.wordPairs.length}} words!
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    select: function(section, category) {
      // .../basic/fruits
      this.$router.push({ path: `${section.slug}/${category.slug}` });
    }
  },
  name: "Section",
  props: ['section']
}
</script>

<style scoped>
  .fc-section {
    margin-bottom: 12px;
  }
</style>