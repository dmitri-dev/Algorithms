const randomArr = [5, 3, 10, -10, 33, 51]
const sortedArr = [1, 5, 9, 12, 99, 100]
const objectArr = [{name: 'Dmitri', age: 21}, {name: 'Max', age: 30}, {name: 'John', age: 40}, {name: 'Bill', age: 50},]
// quarry = object of search

// Linear Search
function linearSearch(arr, quarry, comparator) {
    let index = 0
    for (const i of arr) {
        if (typeof quarry === "object" && comparator(quarry, i)) {
            return index
        }
        if (i === quarry) {
            return index
        }
        index++
    }
}

function lsComparator(q, i) {
    return q.name === i.name
}

// Binary Search (requires sorted array)
// Note: endIndex - startIndex
function binarySearch(arr, quarry) {
    let startIndex = 0
    let endIndex = arr.length - 1

    while (startIndex <= endIndex) {
        const medianIndex = Math.floor((startIndex + endIndex) / 2)

        if (quarry === arr[medianIndex]) {
            return medianIndex
        }
        if (quarry > arr[medianIndex]) {
            startIndex = medianIndex + 1
        } else {
            endIndex = medianIndex - 1
        }
    }
}

console.log(binarySearch(sortedArr, 12))

function binarySearch2(arr, quarry, offset) {
    let startIndex = 0
    let endIndex = arr.length - 1

    const medianIndex = Math.floor((startIndex + endIndex) / 2)

    if (quarry === arr[medianIndex]) {
        return offset + medianIndex
    }

    if (quarry > arr[medianIndex]) {
        startIndex = medianIndex + 1
        offset += medianIndex + 1
    } else {
        endIndex = medianIndex
    }
    return binarySearch2(arr.slice(startIndex, endIndex + 1), quarry, offset)
}


/*
Recursive Time Complexity Master Theorem:
Runtime of recursion: O(n^logb(a))
Where:
a = number of sub-problems (recursive splits)
b = relative sub-problem size (input reduction per split)
Overall Algorithm Time Complexity - Three Cases:
1) Recursion does most work - O(n^logb(a))
2) Same work inside and outside of recursion - O(n^logb(a) log n)
3) Non-recursive part does more work - O(fn(n))
*/
