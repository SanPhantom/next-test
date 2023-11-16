import {faker}  from '@faker-js/faker';

export interface Product {
  id: string;
  title: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
}

export const createProducts = (size: number = 10): Product[] => {
  return new Array(size).fill(0).map(() => ({
    id: faker.string.uuid(),
    title: faker.word.words({ count: { min: 3, max: 6 } }),
    price: 10,
    quantity: faker.number.int({min: 10, max: 90}),
    description: faker.word.words({count: {min: 10, max: 40}}),
    image: "https://picsum.photos/seed/8v4uGkT/1024/998"
  }))
}

const products = createProducts(20);

export  default  products;