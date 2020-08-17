
// Knapsack Problem (0-1)
function knapsack(items, cap, index, memo) {
    console.log('running')
    if (memo[cap][index]) {
        return memo[cap][index]
    }

    if (cap === 0 || index < 0) {
        return {items: [], value: 0, weight: 0}
    }

    if (items[index].weight > cap) {
        return knapsack(items, cap, index - 1, memo)
    }

    const sackWithItem = knapsack(
        items, cap - items[index].weight, index - 1, memo
    )

    const sackWithoutItem = knapsack(items, cap, index - 1, memo)

    const valueWithItem = sackWithItem.value + items[index].value
    const valueWithoutItem = sackWithoutItem.value

    let resultSack

    if (valueWithItem > valueWithoutItem) {
        resultSack = {
            items: sackWithItem.items.concat(items[index]),
            value: sackWithItem.value + items[index].value,
            weight: sackWithItem.weight + items[index].weight,
        }
    } else {
        resultSack = sackWithoutItem
    }

    memo[cap][index] = resultSack

    return resultSack
}

function knapsackFn(items, cap, index) {
    const memo =
        Array.from(Array(cap + 1), () => Array(items.length).fill(undefined))
        Array(cap + 1).fill(Array(items.length).fill(undefined))
    return knapsack(items, cap, index, memo)
}

console.log(knapsackFn(items))

const items = [
    {name: 'a', value: 3, weight: 3},
    {name: 'b', value: 6, weight: 8},
    {name: 'c', value: 10, weight: 3},
];

// Greedy
function knapsack2(items, cap) {
    const sack = { items: [], value: 0, weight: 0 }
    let remainingCapacity = cap;
    for (const i of items) {
        if (i.weight <= remainingCapacity) {
            sack.items.push(i)
            sack.value += i.value
            sack.weight += i.weight
            remainingCapacity -= i.weight
        }
    }
    return sack
}

// Change Making
const availableCoins = [100, 50, 20, 10, 5, 2, 1]
const availableCoins2 = [8, 6, 5, 1]
const targetAmount = 129

function computeChange(coins, amount) {
    const transformedCoins = {}
    let remaining = amount

    const calculatedChange = {
        selectedCoins: {},
        numberOfCoins: 0
    }

    for (const coin of coins) {
        const count = Math.floor(remaining / coin)
        calculatedChange[coin] = count
        calculatedChange.numberOfCoins += count
        remaining -= (coin * count)
    }

    return calculatedChange
}

function leastCoins(coins, amount) {
    const results = []
    for (let i = 0; i < coins.length; i++) {
        results.push(computeChange(coins.slice(i), amount))
    }

    let leastCoins = Number.MAX_SAFE_INTEGER
    let finalResult
    for (const result of results) {
        if (result.numberOfCoins < leastCoins) {
            leastCoins = result.numberOfCoins
            finalResult = result
        }
    }

    return finalResult
}

console.log(leastCoins(availableCoins2, 11))