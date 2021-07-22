// ---------solved by s3sivaram------on 21-Jul-21
// arrayDiff([1,2],[1]) == [2]

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {
  let res1 = loop(a, b);

  let res2 = loop(b, a);

  let com = new Set([...res1, ...res2]);
  return com;
}
let result = [];
let found;

function loop(arr1, arr2) {
  result = [];
  for (let i = 0; i <= arr1.length; i++) {
    found = 0;
    for (let j = 0; j <= arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        found = 1;
      }
    }
    if (found == 0) {
      result.push(arr1[i]);
    }
  }
  return result;
}
