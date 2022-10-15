function mergeSort(n){
    if(n.length <= 1){
      return n;
    }
    const middle = Math.floor(n.length / 2);
    const left = n.slice(0, middle);
    const right = n.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right){
    let array = [];
    while(left.length && right.length){
      if(left[0] < right[0]){
        array.push(left.shift())
      }else{
        array.push(right.shift())
      }
    }
    return [...array, ...left, ...right];
  }
  console.log(mergeSort([2, 4, 6, 1, 3, 5, 9, 7, 8, 0])); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]