import { Mountain } from "../src/models/Mountain";

const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];
const dummyArray: Mountain[] = [];

export const findNameOfTallestMountain = (array: Mountain[]): string => {
  let tallestMountain: Mountain = array[0];
  if (array.length === 0) {
    return "";
  } else {
    array.forEach((item) => {
      if (item.height > tallestMountain.height) {
        tallestMountain = item;
      }
    });
    return tallestMountain.name;
  }
};

let nameOfTallestMountain = findNameOfTallestMountain(dummyArray);
console.log(nameOfTallestMountain);
