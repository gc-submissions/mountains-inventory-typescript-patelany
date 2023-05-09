import { Product } from "./models/Product";

const products: Product[] = [
  { name: "socks", price: 4 },
  { name: "gloves", price: 5 },
  { name: "scarf", price: 2 },
  { name: "hat", price: 3 },
];

export const calcAverageProductPrice = (array: Product[]): number => {
  if (array.length === 0) {
    return 0;
  } else {
    return (
      array.reduce((acc, cv) => {
        return (acc += cv.price);
      }, 0) / array.length
    );
  }
};

let avgPrice = calcAverageProductPrice(products);
console.log(avgPrice);
