// Bubble Sort
function bubbleSort(arr) {
    const resultArray = [...arr]
    for (let outer = 0; outer < resultArray.length; outer++) {
        let outerElement = resultArray[outer]
        for (let inner = outer + 1; inner < arr.length; inner++) {
            let innerElement = resultArray[inner]
            if (innerElement < outerElement) {
                resultArray[outer] = innerElement
                resultArray[inner] = outerElement
                outerElement = resultArray[outer]
                innerElement = resultArray[inner]
            }
        }
    }
    return resultArray
}

console.log(bubbleSort([0, 24, -43, 2, -8, 98, -87, 41, 90, -76, -34, 54]))
// Quick Sort
function quickSort(arr) {
    const copiedArr = [...arr]

    if (copiedArr.length <= 1) {
        return copiedArr
    }

    const smallerElements = []
    const biggerElements = []
    const pivotElement = copiedArr.shift()
    const centerElements = [pivotElement]

    while (copiedArr.length) {
        const currentElement = copiedArr.shift()
        if (currentElement === pivotElement) {
            centerElements.push(currentElement)
        } else if (currentElement < pivotElement) {
            smallerElements.push(currentElement)
        } else {
            biggerElements.push(currentElement)
        }
    }

    const smallerSortedElements = quickSort(smallerElements)
    const biggerSortedElements = quickSort(biggerElements)
    return smallerSortedElements.concat(centerElements, biggerSortedElements)
}

// Merge Sort
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    if (arr.length === 2) {
        return arr[1] < arr[0] ? [arr[1], arr[0]] : arr
    }
    const median = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, median)
    const rightArr = arr.slice(median)

    const leftSortedArr = mergeSort(leftArr)
    const rightSortedArr = mergeSort(rightArr)

    const mergedArr = []
    let leftArrIndex = 0
    let rightArrIndex = 0
    while (leftArrIndex < leftSortedArr.length || rightArrIndex < rightSortedArr.length) {
        console.log(leftArrIndex, rightArrIndex)
        if (leftArrIndex >= leftSortedArr.length || leftSortedArr[leftArrIndex] > rightSortedArr[rightArrIndex]) {
            mergedArr.push(rightSortedArr[rightArrIndex])
            rightArrIndex++
        } else {
            mergedArr.push(leftSortedArr[leftArrIndex])
            leftArrIndex++
        }
    }
    return mergedArr
}

console.log(mergeSort([0, 24, -43, 2, -8, 98, -87, 41, 90, -76, -34, 54]))
