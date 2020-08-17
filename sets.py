def all_perms(n, k):
    arr = list(range(1, n))
    if len(arr) <= 1:
        yield arr
    else:
        for perm in all_perms(arr[1:], k):
            for i in range(len(arr)):
                result = perm[:i] + arr[0:1] + perm[i:]
    if len(result) == n - 1:
        return result[k]


print(all_perms(5, 3))
