function mapToBoolean(arr) {
    return arr.map(Boolean);
  }

  console.log(mapToBoolean([0, "hello", "", NaN, 42, {}, []]));