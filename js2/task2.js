function analyzeSparseArray(arr){
    let totalElements = arr.length; 
    let undefinedCount = 0;
    let nullCount = 0;
    let sparseCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!(i in arr)) {
            sparseCount++;
            console.log(arr[i])
        } else if (arr[i] === undefined) {
            undefinedCount++;
        } else if (arr[i] === null) {
            nullCount++; 
        }
    }

    console.log(`Total elements (including sparse indices): ${totalElements}`);
    console.log(`Number of undefined values: ${undefinedCount}`);
    console.log(`Number of null values: ${nullCount}`);
    console.log(`Number of missing (sparse) indices: ${sparseCount}`);
}

const sparseArray = [undefined, , null, 42, , , undefined];
analyzeSparseArray(sparseArray);