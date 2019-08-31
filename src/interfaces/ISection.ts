import ICategory from './ICategory';

export default interface ISection {
  id: number;
  name: string;
  categories: ICategory[];
  slug: string;
}