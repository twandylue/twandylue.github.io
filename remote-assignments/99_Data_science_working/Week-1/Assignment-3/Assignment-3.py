def find_max(numbers): 
    num = numbers[0]
    n = 0
    while n < len(numbers):
        if num < numbers[n]:
            num = numbers[n]
        elif num > numbers[n]:
            num = num
        else:
            num = num
        n += 1
    return(num)

def find_position(numbers, target):
    i = 0
    while i < len(numbers):
        if target == numbers[i]:
            return i
        i += 1
    return(-1)

print(find_max([1, 2, 4, 5])); # should print 5 
print(find_max([5, 2, 7, 1, 6])); # should print 7 

print(find_position([5, 2, 7, 1, 6], 5)) # should print 0 
print(find_position([5, 2, 7, 1, 6], 7)) # should print 2 
print(find_position([5, 2, 7, 7, 7, 1, 6], 7)) # should print 2 (the first one) 
print(find_position([5, 2, 7, 1, 6], 8)) # should print -1