import IWordPair from './IWordPair';

export default interface ICategory {
  name: string;
  wordPairs: IWordPair[];
}