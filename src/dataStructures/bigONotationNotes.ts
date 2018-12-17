/* Big O of Arrays */

const newArray: string[] = ['Tyler', 'Austin', 'Sean'];
newArray.unshift('Tom');

// Unshift / shift is O(n) time complexity because with each insert, it has to update the index
// of each item in the array as it gets moved to the right.

newArray.push('Amber');

// Push / pop is O(1) time complexity because with each insert, you're just adding it to the end
// and it doesn't have to update the index of every other item.

const getFirstItemInArray = (arr: string[]) => arr[0];
getFirstItemInArray(newArray);

// Searching / accessing in array is O(1) time complexity because JS does not loop through each item
// There's a direct shortcut to each element that you can jump to

// Most array methods are O(n) with the exceptions of push / pop && sort, which is O(n * log(n))

/* Big O of Objects */

const address = {
  fistName: 'Tyler',
  lastName: 'Greulich',
  city: 'Florence',
  state: 'Arizona'
};

console.log(Object.keys(address));

// Object.keys / entries / values is O(n) because it has to search through each item
// in the object and return whatever it's asked to

// Everything else (ie: inserting, removing, accessing) is O(1) because you can access
// the object directly without it needing to update anything else in the object

// Objects are good if you don't need any ordering
