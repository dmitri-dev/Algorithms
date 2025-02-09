import math
from functools import lru_cache


# Fibonacci
def fibonacci(n):
    sequence = [0, 1, 1]
    for i in range(3, n + 1):
        sequence.append(sequence[i - 1] + sequence[i - 2])
    return sequence[n]


def fibonacci_2(n, memo):
    if n in memo:
        return memo[n]
    if n <= 2:
        result = 1
    else:
        result = fibonacci_2(n - 1, memo) + fibonacci_2(n - 2, memo)
    memo[n] = result
    return result


@lru_cache(maxsize=None)
def fibonacci_3(n):
    if n <= 2:
        return 1
    return fibonacci_3(n - 1) + fibonacci_3(n - 2)


# Is Prime
def is_prime(n):
    for i in range(2, int(math.sqrt(n))):
        if n % i == 0:
            return False
    return True


# Minimum Integer Element
def min_int_element(a):
    currentmin = a[0]
    for i in a:
        if i < currentmin:
            currentmin = i
    return currentmin


# Is Even
def is_even(n):
    return n % 2 == 0


def is_even_2(n):
    return (n / 2).is_integer()


# Is Power of Two
def is_power_of_two(n):
    dividend = n
    while n != 1:
        if dividend % 2 != 0:
            return False
        dividend /= 2
    return True


def is_power_of_two_2(n):
    if n < 1:
        return False
    return (n & (n - 1)) == 0


# Factorial
def factorial(n):
    product = 1
    for i in range(2, n + 1):
        product *= i
    return product


def factorial_2(n):
    if n <= 1:
        return 1
    return n * factorial_2(n - 1)

















string1 = "<<>><" # 4
string2 = ">----<"
string3 = "<--><>-<><>--><"
string4 = "---<->><->-----"


def solution(s):
    salutes = 0
    if len(s) < 2:
        return salutes
    s = list(s)
    while s[0] != '>' or s[-1] != '<':
        if s[0] != '>':
            del s[0]
        if s[-1] != '<':
            del s[-1]
    arrows = {}
    for i in range(len(s)):
        if s[i] == '<':
            arrows[i] = '<'
    for i in range(len(s)):
        if s[i] == '>':
            count = 0
            for k, v in arrows.items():
                if k < i:
                    del arrows[k]
                else:
                    count += 2
            salutes += count

    return salutes


print(solution(string4))


# def solution(s):
#     salutes = 0
#     if len(s) < 2:
#         return salutes
#     s = list(s)
#     while s[0] != '>' or s[-1] != '<':
#         if s[0] != '>':
#             del s[0]
#         if s[-1] != '<':
#             del s[-1]
#     for i in range(len(s) - 1):
#         if s[i] == '>':
#             for j in range(i + 1, len(s)):
#                 if s[j] == '<':
#                     salutes += 2
#     return salutes

























