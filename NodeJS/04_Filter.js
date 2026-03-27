// 04_Filter.js

// used to filter value of array (Same as JS filter method)
// Ex. In Array perform some operation and filter the value of array


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.filter((value) => {
    console.log(value);             // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
});


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredArr = arr.filter((value) => {
    return value % 2 === 0;
});
console.log("filteredArr : ",filteredArr);       // [ 2, 4, 6, 8, 10 ]


const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 arr2.filter((value) => {
    console.log(value % 2 == 0);            // op in boolean
                                            // False, True, False, True, False, True, False, True, False, True
});


// Find Reapeated Value in array
    const arr3 = [1, 2, 3, 4, 3, 6, 7, 3, 9, 3];
    const findArr = arr3.filter((item) => {
        return item === 3;
    });
    console.log("findArr : ", findArr);     // [3, 3, 3, 3]


// Find Value in array how many times repeated
    const arr4 = [1, 2, 3, 4, 3, 6, 7, 3, 9, 3];
    const findArr2 = arr4.filter((item) => {
        return item === 3;
    });
    console.log("findArr2 : ", findArr2.length);     // 4


