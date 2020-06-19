import math
import numpy

array = [10, 30, 324, 564, 764, 999, 10000, 675654]
objArr = [{'name': 'Dmitri', 'age': 21}, {'name': 'Max', 'age': 30},
          {'name': 'John', 'age': 40}, {'name': 'Bill', 'age': 50}]
# quarry = object of search


# Linear Search
def linear_search(arr, quarry, comparator):
    index = 0
    for i in arr:
        if type(quarry) == object and comparator(quarry, i):
            return index
        if i == quarry:
            return index
        index += 1


def comparator1(q, i):
    return q == i


# print(linear_search(objArr, {'name': 'Bill', 'age': 50}, comparator1))
# COMPARATOR FLAWED


# Binary Search (requires sorted array)
# Note: start_index + end_index
def binary_search(arr, quarry):
    start_index = 0
    end_index = len(arr) - 1

    while start_index <= end_index:
        median_index = int((start_index + end_index) / 2)

        if quarry == arr[median_index]:
            return median_index
        if quarry > arr[median_index]:
            start_index = median_index + 1
        else:
            end_index = median_index - 1


def binary_search_2(arr, quarry, offset):
    start_index = 0
    end_index = len(arr) - 1

    median_index = int((start_index + end_index) / 2)

    if quarry == arr[median_index]:
        return offset + median_index
    if quarry > arr[median_index]:
        start_index = median_index + 1
        offset += median_index + 1
    else:
        end_index = median_index
    return binary_search_2(arr[start_index:end_index + 1], quarry, offset)


# Recursive Time Complexity Master Theorem:
# Runtime of recursion: O(n^logb(a))
# Where:
# a = number of sub-problems (recursive splits)
# b = relative sub-problem size (input reduction per split)
# Overall Algorithm Time Complexity - Three Cases:
# 1) Recursion does most work - O(n^logb(a))
# 2) Same work inside and outside of recursion - O(n^logb(a) log n)
# 3) Non-recursive part does more work - O(fn(n))
