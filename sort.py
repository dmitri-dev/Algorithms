# Bubble Sort
import math


def bubble_sort(arr):
    result_arr = [*arr]
    for outer in range(0, len(result_arr)):
        outer_element = result_arr[outer]
        for inner in range(outer + 1, len(result_arr)):
            inner_element = result_arr[inner]
            if inner_element < outer_element:
                result_arr[outer] = inner_element
                result_arr[inner] = outer_element
                outer_element = result_arr[outer]
                inner_element = result_arr[inner]
    return result_arr


# Quick Sort
def quick_sort(arr):
    copied_arr = [*arr]

    if len(copied_arr) <= 1:
        return copied_arr

    smaller_elements = []
    bigger_elements = []
    pivot_element = copied_arr.pop(0)
    center_elements = [pivot_element]

    while len(copied_arr):
        current_element = copied_arr.pop(0)
        if current_element == pivot_element:
            center_elements.append(current_element)
        elif current_element < pivot_element:
            smaller_elements.append(current_element)
        else:
            bigger_elements.append(current_element)

    smaller_sorted_elements = quick_sort(smaller_elements)
    bigger_sorted_elements = quick_sort(bigger_elements)
    return smaller_sorted_elements + center_elements + bigger_sorted_elements


print(quick_sort([54, -23, 876, -1234, 12, -54, -765, -3, 6543]))


# Merge Sort
# index out of range error
def merge_sort(arr):
    if len(arr) < 2:
        return arr
    if len(arr) == 2:
        return [arr[1], arr[0]] if arr[1] < arr[0] else arr
    median = int(len(arr) / 2)
    left_arr = arr[:median]
    right_arr = arr[median:]

    print(median, left_arr, right_arr)

    left_sorted_arr = merge_sort(left_arr)
    right_sorted_arr = merge_sort(right_arr)

    print(left_sorted_arr, right_sorted_arr)

    merged_arr = []
    left_arr_index = 0
    right_arr_index = 0
    while left_arr_index < len(left_sorted_arr) or right_arr_index < len(right_sorted_arr):
        print(left_arr_index, right_arr_index)
        if left_arr_index > len(left_sorted_arr) or left_sorted_arr[left_arr_index] or left_sorted_arr[left_arr_index] > right_sorted_arr[right_arr_index]:
            merged_arr.append(right_sorted_arr[right_arr_index])
            right_arr_index += 1
        else:
            merged_arr.append(left_sorted_arr[left_arr_index])
            left_arr_index += 1
    return merged_arr


merge_sort([54, -23, 876, -1234, 12, -54, -765, -3, 6543])

