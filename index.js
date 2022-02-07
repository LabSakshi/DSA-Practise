//QUESTION//To check the common element in 2 arrays

//1st approach- TIME COMPLEXITY: O(a*b); SPACE COMPLEXITY: O(1)

const arr1 = ['a', 'z', 'k', 's', 'n', 'i']
const arr2 = ['s', 'g', 'k']

function toCheckCommonElement(arr1, arr2) {
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true
            }

        }
    }
    return false
}

const result = toCheckCommonElement(arr1, arr2)
console.log(result)

//2nd approach: time complexity: O(a+b); SPACE COMPLEXITY: O(a)
//to loop over array1 and create object with properties as the elements of array 
//to loop over arr2 and object has the property of arr2 element
//In this approach we can modularize our code as well

const checkIfCommonElementExist = (arr1, arr2) => {
    let map = {}
    for (i = 0; i < arr1.length; i++) {
        map[arr1[i]] = 'true'
    }
    console.log(map)
    for (j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true
        }
    }
    return false
}

const result2 = checkIfCommonElementExist(arr1, arr2)
console.log(result2)

//3rd approach: using inbuilt methods:

const checkIfCommonElementExist3 = () => {
    return arr1.some(item => arr2.includes(item))
}
//==================================================================================================================================//
//BUILDING ARRAY:-

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    get(index) {
        const item = this.data[index];
        return item
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length
    }

    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItem(index);

    }

    shiftItem(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--;
    }
}

const newArray = new MyArray()


//////=================================================================================================================////

//TO REVERSE STRING:
function reverse(str) {
    //check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm that is not good'
    }
    const strtArr = str.split('').reverse().join('')
    return strtArr;

}

//2nd approach
function reverse2(str) {
    //check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm that is not good'
    }
    const backwards = [];
    const totalItems = str.length - 1
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i])
    }
    console.log(backwards)
    return backwards.join('')

}

const reverse3 = (str) => [...str].reverse().join('')
const rev = reverse2("Hi my name is sakshi")
console.log(rev)

//////=================================================================================================================////
//To merge sorted arrays:

function mergeSortedArray(arr1, arr2) {
    const array = [...arr1, ...arr2];
    array.sort((a, b) => a - b)
    return array;

}

//2nd approach

function mergeSortedArray2(arr1, arr2) {
    const mergedArr = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0]
    let i = 1;
    let j = 1;
    if (arr1.length === 0) {
        return arr2
    }
    if (arr2.length === 0) {
        return arr1
    }

    if (arr1[length - 1] < arr2[0]) {
        return [...arr1, ...arr2]
    }
///////
    while (array1Item || array2Item) {
        if (!array2Item || array1Item < array2Item) {
            mergedArr.push(array1Item)
            array1Item = arr1[i]
            i++
        }

        else mergedArr.push(array2Item)
        array2Item = arr2[j]
        j++
    }

}

const sortedArr = mergeSortedArray([2, 4, 9, 8, 7], [3, 6, 34, 44, 49])
console.log(sortedArr)

///Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
var twoSum = function(nums, target) {
    const obj={}
    for(let i=0;i<nums.length;i++){
        let diff=target-nums[i]
        if(nums[i] in obj){
            return [obj[nums[i]],i]
        }
        else obj[diff]=i
            
        }
    };

