const colors = ['blue', 'red']
const sizes = ['s', 'm', 'l', 'xl']
const styles = ['round neck', 'v neck']
const todoListItems = ['Walk the dog', 'clean the toilet', 'buy groceries', 'order food']

// Cartesian Product
function cartesianProduct(setA, setB) {
    const product = []

    for (let setAEl of setA) {
        if (!Array.isArray(setAEl)) {
            setAEl = [setAEl]
        }
        for (const setBEl of setB) {
            product.push([...setAEl, setBEl])
        }
    }

    return product
}

function unlimitedCartesianProduct(...sets) {
    let tempProduct = sets[0];

    for (let i = 1; i < sets.length; i++) {
        tempProduct = cartesianProduct(tempProduct, sets[i])
    }

    return tempProduct
}

// Permutations
// Without Repetitions
const factArray = Array.from(Array(5).keys());
console.log(factArray)
function Permutations(arr) {
    const permutations = []

    if (arr.length === 1) {
        return [arr]
    }

    const partialPermutations = Permutations(arr.slice(1))

    const firstItem = arr[0]

    for (let i = 0; i < partialPermutations.length; i++) {
        const partialPermutation = partialPermutations[i]

        for (let j = 0; j <= partialPermutation.length; j++) {
            const frontPermutation = partialPermutation.slice(0, j)
            const permutationAfter = partialPermutation.slice(j)
            permutations.push(frontPermutation.concat([firstItem], permutationAfter))
        }
    }

    return permutations
}


// With Repetitions
function repeatingPermutations (arr, length) {
    const permutations = []

    if (length === 1) {
        return arr.map(i => [i])
    }

    const partialPermutations = repeatingPermutations(arr, length - 1)

    for (const i of arr) {
        for (const existingPermutation of partialPermutations) {
            permutations.push([i].concat(existingPermutation))
        }
    }

    return permutations
}

const digits = [1, 2, 3]
const resultLength = 3



console.log(repeatingPermutations(digits, resultLength))

