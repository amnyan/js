function filterFalsyValues(arr) {
    return arr.filter(Boolean);
  }
  
  console.log(filterFalsyValues([0, 1, 0, 0, "", "hello", null, undefined, false, 42]));
  