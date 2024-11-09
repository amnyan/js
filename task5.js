function validateSchema(obj, schema) {
    for (const key in schema) {
      const rules = schema[key];
      const value = obj[key];
  
      if (value === undefined) return false;

      if (typeof value !== rules.type) {
        if (rules.type === 'array' && Array.isArray(value)) {
        } else {
          return false;
        }
    }
      switch (rules.type) {
        case 'string':
          if (rules.minLength !== undefined && value.length < rules.minLength) return false;
          if (rules.maxLength !== undefined && value.length > rules.maxLength) return false;
          break;
  
        case 'number':
          if (rules.min !== undefined && value < rules.min) return false;
          if (rules.max !== undefined && value > rules.max) return false;
          break;
  
        case 'array':
          if (rules.itemType) {

            for (const item of value) {
              if (typeof item !== rules.itemType) return false;
            }
          }
          break;
        
        case 'boolean':
          if (typeof value !== 'boolean') return false;
          break;
  
        case 'object':
          if (typeof value !== 'object' || Array.isArray(value)) return false;
          break;
  
        default:
          return false;
      }
    }
    
    return true;
  }
  

  const schema = {
    name: { type: "string", minLength: 2 },
    age: { type: "number", min: 18 },
    isActive: { type: "boolean" },
    tags: { type: "array", itemType: "string" },
  };
  
  const obj = { name: "Alice", age: 25, isActive: true, tags: ["admin", "user"] };
  console.log(validateSchema(obj, schema));
  