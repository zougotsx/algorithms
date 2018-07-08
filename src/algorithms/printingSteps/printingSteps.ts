const printingSteps = (num: number): void | boolean => {
  let hash = '';
  if (num < 0 || num === 0) {
    return false;
  } else {
    for (let i = 0; i < num; i++) {
      if (hash.length < num || hash.length === num) {
        console.log(hash.concat('#').repeat(i + 1));
      }
    }
  }
};

printingSteps(10);
