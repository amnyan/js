function deepDiffChecker(obj1, obj2) {
    const report = [];

    function compareObjects(o1, o2, path = '') {
        const keys = new Set([...Object.keys(o1 || {}), ...Object.keys(o2 || {})]);

        for (const key of keys) {
            const fullPath = path ? `${path}.${key}` : key;

            if (!(key in o1)) {
                report.push(`Missing in obj1: ${fullPath}`);
            } else if (!(key in o2)) {
                report.push(`Missing in obj2: ${fullPath}`);
            } else {
                const val1 = o1[key];
                const val2 = o2[key];

                if (val1 === null && val2 === undefined) {
                    report.push(`Difference at ${fullPath}: null in obj1, undefined in obj2`);
                } else if (val1 === undefined && val2 === null) {
                    report.push(`Difference at ${fullPath}: undefined in obj1, null in obj2`);
                } else if (typeof val1 === 'object' && val1 !== null && typeof val2 === 'object' && val2 !== null) {
                    compareObjects(val1, val2, fullPath);
                } else if (val1 !== val2) {
                    report.push(`Value mismatch at ${fullPath}: ${val1} vs ${val2}`);
                }
            }
        }
    }

    compareObjects(obj1, obj2);

    if (report.length === 0) {
        console.log('Objects are identical.');
    } else {
        console.log('Differences found:');
        for (const line of report) {
            console.log(line);
        }
    }
}

const obj1 = {
    a: null,
    b: undefined,
    c: 2,
    d: {
        e: null,
        f: 'as',
    },
};

const obj2 = {
    a: undefined,
    b: null,
    c: 2,
    d: {
        e: undefined,
        g: 'asd',
    },
    h: 1,
};

deepDiffChecker(obj1, obj2);
