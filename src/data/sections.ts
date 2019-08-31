import ISection from '../interfaces/ISection';

const sections: ISection[] = [
  {
    id: 1,
    slug: 'basic',
    name: 'Basic Words',
    categories: [
      {
        name: 'Single Words',
        wordPairs: [
          {
            word: 'Apple',
            image: {
              url: '/images/apple.jpg',
              alt: 'Image of an apple',
            },
          },
        ],
      },
    ],
  },
];

export default sections;