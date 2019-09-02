import IWordPair from './IWordPair';

export default interface ICategory {
  slug: string;
  name: string;
  wordPairs: IWordPair[];
}