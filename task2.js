function deepEqual(val1, val2) {
    if (val1 === val2) return true;
  
    if (val1 === null || val2 === null) return false;
  
    if (typeof val1 !== 'object' || typeof val2 !== 'object') return false;
  
    const keys1 = Object.keys(val1);
    const keys2 = Object.keys(val2);

    if (keys1.length !== keys2.length) return false;
  
    for (const key of keys1) {
      if (!keys2.includes(key) || !deepEqual(val1[key], val2[key])) {
        return false;
      }
    }
  
    return true;
  }
  
  const obj1 = { a: 1, b: { c: 2 } };
  const obj2 = { a: 1, b: { c: 2 } };
  console.log(deepEqual(obj1, obj2)); 
  