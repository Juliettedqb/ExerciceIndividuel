# https://www.tutorialspoint.com/perform-element-wise-comparison-of-two-string-arrays-using-a-comparison-operator-in-numpy
import numpy as np

# Create two One-Dimensional arrays of string
arr1 = np.array(["blue","red","yellow","green"])
arr2 = np.array(["blue", "yellow","red","green"])

# To perform element-wise comparison of two string arrays using a comparison operator, use the numpy.compare_chararrays() method in Python Numpy
# The arr1 and arr2 are the two input string arrays of the same shape to be compared
# The 3rd parameter is rstrip , if True, the spaces at the end of Strings are removed before the comparison.

print("Result...",np.compare_chararrays(arr1, arr2, "==", rstrip = True))

    
