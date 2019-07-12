import { empty } from "/src/solutions/group_two_solution";
import { clone } from "/src/solutions/group_three_solution";

// Pair exercise 2 - Update reset to NOT MUTATE the original
function reset(input) {
  const clonedData = clone(input);

  Object.keys(clonedData).forEach(key => {
    clonedData[key] = empty(clone(clonedData[key]));
  });

  return clonedData;
}

// In our tests, we will re-create the petData object and run it through reset()
// At the end of it, none of the references _inside_ the two objects should be the same
// AND the original should not be altered
const petDataCopy = {
  cats: ["whiskers", "mittens", "phoebe"],
  dogs: ["spot", "sebastian", "hank"],
  owners: {
    Bob: { cats: 1, dogs: 1 },
    Dan: { cats: 0, dogs: 1 },
    Sally: { cats: 1, dogs: 2 }
  }
};

const originalCats = petDataCopy.cats;
const originalDogs = petDataCopy.dogs;

const reseted = reset(petDataCopy);

export { reset };
