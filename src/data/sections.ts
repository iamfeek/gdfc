import ISection from '../interfaces/ISection';

const sections: ISection[] = [
  {
    id: 1,
    slug: 'basic',
    name: 'Basic Words',
    categories: [
      {
        name: 'Fruits',
        wordPairs: [
          {
            word: 'Apple',
            image: {
              url: '/images/fruits/apple.jpg',
              alt: 'Image of an apple',
            },
          },
          {
            word: 'Pear',
            image: {
              url: '/images/fruits/pear.jpg',
              alt: 'Image of a pear',
            },
          },
        ],
      },
      {
        name: 'Vehicles',
        wordPairs: [
          {
            word: 'Car',
            image: {
              url: '/images/vehicle/car.jpg',
              alt: 'Image of a car',
            },
          },
          {
            word: 'Bus',
            image: {
              url: '/images/vehicle/bus.jpg',
              alt: 'Image of a bus',
            },
          },
          {
            word: 'Bicycle',
            image: {
              url: '/images/vehicle/bicycle.jpg',
              alt: 'Image of a bicycle',
            },
          },
        ],
      },
    ],
  },
];

export default sections;