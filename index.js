function fibs(num) {
    let arr = []
    for (let i=0; i<num; i++) {
    if (i == 0 || i == 1) {arr.push(i)}
    else {
    arr.push(arr[i-2] + arr[i-1])
    }
    }
    return arr
    }
    
    console.log(fibs(8))
    
    function fibsRec(num, arr = [0, 1]) {
      if (num == 1) { return [0] }
      if (num == 2) { return [0, 1]}
      if (num == 0) { return [] }
    
      if (arr.length == num) {return arr}
      arr.push(arr[arr.length-2] + arr[arr.length-1])
     
     return fibsRec(num, arr) 
    
    
    }
    
    console.log(fibsRec(8))