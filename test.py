def babis_function():
    x = int(input())
    def sum_of_digits(n):
        return sum(int(digit) for digit in str(n))
    double_sum = 2 * sum_of_digits(x)
    all_nums = []
    for i in range(1, 10000):
        if sum_of_digits(i) == double_sum:
            all_nums.append(i)
    for i in all_nums:
        if i > x:
            return(i)


print(babis_function())
