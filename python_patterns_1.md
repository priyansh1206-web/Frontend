# 🐍 PYTHON — ALL PATTERNS

---

## 📌 LIST PATTERNS

```python
# 1. Filter list
result = []
for i in lst:
    if condition:
        result.append(i)

# 2. Filter + Sort
result = []
for i in lst:
    if condition:
        result.append(i)
result.sort()

# 3. Unique elements
result = []
for i in lst:
    if i not in result:
        result.append(i)

# 4. Unique + Sorted
result = list(set(lst))
result.sort()

# 5. Merge two lists
result = lst1 + lst2

# 6. Merge + Remove duplicates + Sort
merged = lst1 + lst2
result = []
for i in merged:
    if i not in result:
        result.append(i)
result.sort()

# 7. Sum of list
total = 0
for i in lst:
    total += i

# 8. Count elements matching condition
count = 0
for i in lst:
    if condition:
        count += 1

# 9. Max without max()
max_val = lst[0]
for i in lst:
    if i > max_val:
        max_val = i

# 10. Min without min()
min_val = lst[0]
for i in lst:
    if i < min_val:
        min_val = i

# 11. Reverse list
lst[::-1]
# ya
lst.reverse()

# 12. Sort ascending
lst.sort()

# 13. Sort descending
lst.sort(reverse=True)

# 14. List comprehension — filter
result = [i for i in lst if condition]

# 15. List comprehension — transform
result = [i*2 for i in lst]

# 16. List comprehension — filter + transform
result = [i*2 for i in lst if i > 5]

# 17. Squares
squares = [i**2 for i in range(1, n+1)]

# 18. Cubes
cubes = [i**3 for i in range(1, n+1)]

# 19. Even numbers
evens = [i for i in range(1, n+1) if i%2 == 0]

# 20. Odd numbers
odds = [i for i in range(1, n+1) if i%2 != 0]

# 21. Flatten nested list
result = []
for sublist in nested:
    for i in sublist:
        result.append(i)

# 22. Second largest
unique = sorted(list(set(lst)))
second_largest = unique[-2]

# 23. Remove specific element
result = [i for i in lst if i != target]

# 24. Count occurrences of element
count = lst.count(element)

# 25. Index of element
idx = lst.index(element)
```

---

## 📌 STRING PATTERNS

```python
# 26. Reverse string
result = s[::-1]

# 27. Palindrome check
is_palindrome = s == s[::-1]

# 28. Count vowels
vowels = "aeiou"
count = 0
for c in s:
    if c in vowels:
        count += 1

# 29. Remove vowels
vowels = "aeiou"
result = ""
for c in s:
    if c not in vowels:
        result += c

# 30. Count consonants
vowels = "aeiou"
count = 0
for c in s:
    if c.isalpha() and c not in vowels:
        count += 1

# 31. Count character types
upper = lower = digits = spaces = 0
for c in s:
    if c.isupper(): upper += 1
    elif c.islower(): lower += 1
    elif c.isdigit(): digits += 1
    elif c == " ": spaces += 1

# 32. Longest word
words = s.split()
max_word = ""
for w in words:
    if len(w) > len(max_word):
        max_word = w

# 33. Shortest word
words = s.split()
min_word = words[0]
for w in words:
    if len(w) < len(min_word):
        min_word = w

# 34. Word count
count = len(s.split())

# 35. Unique words sorted
result = []
for w in s.split():
    if w not in result:
        result.append(w)
result.sort()

# 36. Word frequency
freq = {}
for w in s.split():
    if w in freq:
        freq[w] += 1
    else:
        freq[w] = 1

# 37. Character frequency
freq = {}
for c in s:
    if c in freq:
        freq[c] += 1
    else:
        freq[c] = 1

# 38. Run length encode
result = ""
count = 1
for i in range(1, len(s)):
    if s[i] == s[i-1]:
        count += 1
    else:
        result += s[i-1] + str(count)
        count = 1
result += s[-1] + str(count)

# 39. Run length decode
result = ""
for i in range(0, len(s), 2):
    result += s[i] * int(s[i+1])

# 40. Replace character
result = s.replace(old, new)

# 41. Check substring
if sub in s:
    print("Found")

# 42. All words uppercase
result = s.upper()

# 43. Title case
result = s.title()

# 44. Remove spaces
result = s.strip()

# 45. Split and rejoin
words = s.split()
result = " ".join(words)

# 46. Anagram check
result = sorted(s1) == sorted(s2)

# 47. Count specific char
count = s.count(char)

# 48. String slicing
s[start:stop]      # from start to stop-1
s[::2]             # every 2nd char
s[::-1]            # reverse
s[:n]              # first n chars
s[-n:]             # last n chars
```

---

## 📌 DICTIONARY PATTERNS

```python
# 49. Filter by value
result = {}
for k, v in d.items():
    if condition:
        result[k] = v

# 50. Filter by key
result = {}
for k, v in d.items():
    if k_condition:
        result[k] = v

# 51. Frequency count
freq = {}
for i in lst:
    if i in freq:
        freq[i] += 1
    else:
        freq[i] = 1

# 52. Frequency count — short way
freq = {}
for i in lst:
    freq[i] = freq.get(i, 0) + 1

# 53. Max value key
max_key = ""
max_val = 0
for k, v in d.items():
    if v > max_val:
        max_val = v
        max_key = k

# 54. Min value key
min_key = ""
min_val = float('inf')
for k, v in d.items():
    if v < min_val:
        min_val = v
        min_key = k

# 55. Sort dict by value
sorted_d = sorted(d.items(), key=lambda x: x[1])

# 56. Sort dict by key
sorted_d = sorted(d.items(), key=lambda x: x[0])

# 57. Merge two dicts
result = {**d1, **d2}

# 58. Dict comprehension
result = {k: v for k, v in d.items() if condition}

# 59. Squares dict
squares = {i: i**2 for i in range(1, n+1)}

# 60. Invert dict (swap key-value)
result = {v: k for k, v in d.items()}

# 61. Sum of all values
total = sum(d.values())

# 62. Keys as list
keys = list(d.keys())

# 63. Values as list
values = list(d.values())

# 64. Check key exists
if key in d:
    print("Found")

# 65. Nested dict access
value = d["outer"]["inner"]
```

---

## 📌 SET PATTERNS

```python
# 66. Remove duplicates from list
result = list(set(lst))

# 67. Common elements (intersection)
common = list(set(lst1) & set(lst2))

# 68. All unique elements (union)
all_unique = list(set(lst1) | set(lst2))

# 69. Elements in lst1 but not lst2
diff = list(set(lst1) - set(lst2))

# 70. Elements not common (symmetric diff)
result = list(set(lst1) ^ set(lst2))

# 71. Check if subset
set(lst1).issubset(set(lst2))

# 72. Check if superset
set(lst1).issuperset(set(lst2))
```

---

## 📌 NUMBER PATTERNS

```python
# 73. Prime check
def is_prime(n):
    if n < 2: return False
    for i in range(2, n):
        if n % i == 0: return False
    return True

# 74. All primes up to n
result = []
for num in range(2, n+1):
    if is_prime(num):
        result.append(num)

# 75. Factorial — loop
def factorial(n):
    result = 1
    for i in range(1, n+1):
        result *= i
    return result

# 76. Factorial — recursion
def factorial(n):
    if n == 0: return 1
    return n * factorial(n-1)

# 77. Fibonacci — loop
a, b = 0, 1
for i in range(n):
    print(a)
    a, b = b, a+b

# 78. Fibonacci — recursion
def fib(n):
    if n <= 1: return n
    return fib(n-1) + fib(n-2)

# 79. Sum of digits
def digit_sum(n):
    total = 0
    while n > 0:
        total += n % 10
        n //= 10
    return total

# 80. Reverse number
def reverse_num(n):
    result = 0
    while n > 0:
        result = result * 10 + n % 10
        n //= 10
    return result

# 81. Palindrome number check
n == int(str(n)[::-1])

# 82. Armstrong number check
digits = str(n)
n == sum(int(d)**len(digits) for d in digits)

# 83. Perfect number check
total = sum(i for i in range(1, n) if n % i == 0)
is_perfect = total == n

# 84. GCD
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

# 85. Factors of n
factors = [i for i in range(1, n+1) if n % i == 0]

# 86. Even/Odd check
is_even = n % 2 == 0

# 87. Count moderate (between range)
count = 0
for i in lst:
    if low <= i <= high:
        count += 1
```

---

## 📌 MATRIX PATTERNS

```python
# 88. Matrix border sum
total = 0
rows, cols = len(matrix), len(matrix[0])
for i in range(rows):
    for j in range(cols):
        if i==0 or i==rows-1 or j==0 or j==cols-1:
            total += matrix[i][j]

# 89. Matrix diagonal sum
total = 0
for i in range(len(matrix)):
    total += matrix[i][i]

# 90. Matrix transpose
result = [[matrix[j][i] for j in range(len(matrix))]
          for i in range(len(matrix[0]))]

# 91. Matrix flatten
result = []
for row in matrix:
    for val in row:
        result.append(val)

# 92. Row sums
row_sums = [sum(row) for row in matrix]

# 93. Column sums
col_sums = [sum(matrix[i][j] for i in range(len(matrix)))
            for j in range(len(matrix[0]))]

# 94. Max in matrix
max_val = matrix[0][0]
for row in matrix:
    for val in row:
        if val > max_val:
            max_val = val
```

---

## 📌 SORTING PATTERNS

```python
# 95. Sort list of tuples by 1st element
lst.sort(key=lambda x: x[0])

# 96. Sort list of tuples by 2nd element
lst.sort(key=lambda x: x[1])

# 97. Sort by string length
lst.sort(key=lambda x: len(x))

# 98. Sort by multiple keys
lst.sort(key=lambda x: (x[1], x[0]))

# 99. Custom sort descending
lst.sort(key=lambda x: x[1], reverse=True)

# 100. Sorted without modifying original
result = sorted(lst, key=lambda x: x[1])
```

---

## 📌 FUNCTION PATTERNS

```python
# 101. Basic function
def func(param):
    return result

# 102. Default argument
def func(n, p=2):
    return n**p

# 103. Multiple return values
def func(lst):
    return sum(lst), max(lst), min(lst)
s, mx, mn = func(lst)

# 104. *args
def func(*args):
    return sum(args)

# 105. **kwargs
def func(**kwargs):
    for k, v in kwargs.items():
        print(k, v)

# 106. Lambda
fn = lambda x: x**2
fn = lambda x, y: x + y

# 107. Lambda with sort
lst.sort(key=lambda x: x[1])

# 108. Recursive function template
def func(n):
    if base_case: return base_value
    return func(n-1)  # recursive call
```

---

## 📌 EXCEPTION PATTERNS

```python
# 109. Basic try-except
try:
    risky_code
except ErrorType:
    handle_error

# 110. Multiple exceptions
try:
    code
except ZeroDivisionError:
    print("Zero!")
except ValueError:
    print("Bad value!")

# 111. try-except-else-finally
try:
    code
except Error:
    handle
else:
    runs_if_no_error
finally:
    always_runs

# 112. File not found
try:
    with open("file.txt") as f:
        print(f.read())
except FileNotFoundError:
    print("File nahi mili!")
```

---

## 📌 FILE PATTERNS

```python
# 113. Write file
with open("file.txt", "w") as f:
    f.write("Hello\n")

# 114. Append file
with open("file.txt", "a") as f:
    f.write("New line\n")

# 115. Read full file
with open("file.txt", "r") as f:
    content = f.read()

# 116. Read line by line
with open("file.txt", "r") as f:
    for line in f:
        print(line.strip())

# 117. Read all lines as list
with open("file.txt", "r") as f:
    lines = f.readlines()

# 118. Count lines in file
with open("file.txt", "r") as f:
    count = len(f.readlines())
```

---

## 📌 REGEX PATTERNS

```python
import re

# 119. Find all numbers
re.findall(r'\d+', text)

# 120. Find all words
re.findall(r'\w+', text)

# 121. Validate email
re.match(r'\w+@\w+\.\w+', email)

# 122. Find all emails
re.findall(r'\w+@\w+\.\w+', text)

# 123. Replace numbers with *
re.sub(r'\d', '*', text)

# 124. Find phone numbers
re.findall(r'\d{10}', text)

# 125. Check string starts with pattern
re.match(r'^pattern', text)

# 126. Check string ends with pattern
re.search(r'pattern$', text)
```

---

## 📌 NUMPY PATTERNS

```python
import numpy as np

# 127. Create array
arr = np.array([1, 2, 3, 4, 5])

# 128. Basic operations
np.mean(arr)    # average
np.sum(arr)     # sum
np.max(arr)     # max
np.min(arr)     # min
np.sqrt(arr)    # square root
np.std(arr)     # standard deviation

# 129. Array math
arr + 2         # add 2 to all
arr * 2         # multiply all
arr ** 2        # square all

# 130. 2D array
arr2d = np.array([[1,2,3],[4,5,6]])
arr2d.shape     # (2, 3)
```

---

**TOTAL: 130 PATTERNS** 🔥
**ALL THE BEST! 💪**
