def binary_search_position(numbers, target): 
    left = 0
    right = len(numbers)-1
    i = 0
    while left <= right:
        index_mid = (left+right)//2
        if target < numbers[index_mid]:
            right = index_mid - 1
        elif target > numbers[index_mid]:
            left = index_mid + 1
        else:
            return index_mid
        i += 1
    # return(-1)
    # return(numbers[left])
    print(i)
    return(left)

# print(binary_search_position([1, 2, 5, 6, 7], 1)) # should print 0 
# print(binary_search_position([1, 2, 5, 6, 7], 6)) # should print 3
# print(binary_search_position([1, 2, 5, 6, 7], 7)) 
# print(binary_search_position([1, 2, 5, 6, 7, 8, 9, 10], 10)) 
print(binary_search_position([1, 3, 4, 7, 8, 10], 11)) 