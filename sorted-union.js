function uniteUnique(arr) {
  let args = [... arguments];
  let flattenedArr = [];

  for(let i = 0; i < args.length; i++){
    flattenedArr.push(...args[i]);
  }
  
  return [... new Set(flattenedArr)];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
