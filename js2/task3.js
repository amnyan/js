function testJSONSerialization(obj) {
    function replaceUndefinedWithNull(input) {
        if (Array.isArray(input)) {
            return input.map(replaceUndefinedWithNull);
        } else if (typeof input === "object" && input !== null) {
            const result = {};
            for (const key in input) {
                result[key] = input[key] === undefined ? null : replaceUndefinedWithNull(input[key]);
            }
            return result;
        }
        return input;
    }

    const modifiedObject = replaceUndefinedWithNull(obj);
    const jsonString = JSON.stringify(modifiedObject);
    console.log("Serialized JSON:", jsonString);
}

const example = {
    name: "Arman",
    age: undefined,
    address: {
        country: "Armenia",
        city: undefined,
    },
    languages: [undefined, "english", undefined],
};

testJSONSerialization(example);
