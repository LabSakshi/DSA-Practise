//To check the common element in 2 arrays

//1st approach- TIME COMPLEXITY: O(a*b)

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

//2nd approach: time complexity: O(a+b)
//to loop over array1 and create object with properties as the elements of array 
//to loop over arr2 and object has the property of arr2 element

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

const result2= checkIfCommonElementExist(arr1, arr2)
console.log(result2)
