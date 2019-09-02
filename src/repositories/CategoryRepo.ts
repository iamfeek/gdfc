import Sections from '@/data/sections';

export default class CategoryRepo {
  getAllWordPairs(categoryName: string){
      for (var sections of Sections) {
          for (var categories of sections.categories) {
              if (categoryName === categories.slug) {
                  return categories;
              }
          }
      }
  }
}