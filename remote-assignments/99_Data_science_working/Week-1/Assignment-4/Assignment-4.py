def binary_search_position(numbers, target): 
    index_a = 0
    index_b = len(numbers)-1
    i = 0
    while i < len(numbers):
        index_mid = (index_a+index_b)//2
        if target < numbers[index_mid]:
            index_b = index_mid - 1
        elif target > numbers[index_mid]:
            index_a = index_mid + 1
        else:
            return index_mid
        i += 1
    # return(-1)
    return(numbers[index_a])
    # 小數會有問題 會無條件進位
    # print(i)

print(binary_search_position([1, 2, 5, 6, 7], 1)) # should print 0 
print(binary_search_position([1, 2, 5, 6, 7], 6)) # should print 3
# print(binary_search_position([1, 2, 5, 6, 7], 7)) 
# print(binary_search_position([1, 2, 5, 6, 7, 8, 9, 10], 10)) 
print(binary_search_position([1, 2, 5, 6, 10], 7)) 