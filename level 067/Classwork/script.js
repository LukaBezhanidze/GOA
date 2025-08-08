const words = ['I', 'love', 'code'];
const result = words.reduce((a, b) => a + ' ' + b);
console.log(result);



function Reduce(arr, fn, result) {
  for (let i = 0; i < arr.length; i++) {
    result = fn(result, arr[i]);
  }
  return result;
}

