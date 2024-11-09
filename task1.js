function hasProperties(obj, paths) {
    const result = {};
  
    paths.forEach(path => {
      const keys = path.split('.');
      let curent = obj;
      let exist = true;
  
      for (const key of keys) {
        if (key in curent) {
          curent = curent[key];
        } else {
          exist = false;
          break;
        }
      }
  
      result[path] = exist;
    });
  
    return result;
  }

  const user = { name: "Alice", address: { city: "Wonderland" } };
  console.log(hasProperties(user, ["name", "address.city", "address.zip"]));

  