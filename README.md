# Visual Sorting

A visual Sorting  built using **HTML, CSS and vanilla JS** which visualizes various sorting algorithms







## Sorting Algorithms visualized
1. Bubble sort
2. Insertion sort
3. Selection sort
4. Merge sort
5. Quick sort
6. Heap

#Bubble Sort:

Time complexity: O(n^2) in the worst and average cases, O(n) in the best case (when the input array is already sorted) 
Space complexity: O(1)
Basic idea: Iterate through the array repeatedly, comparing adjacent pairs of elements and swapping them if they are in the wrong order. Repeat until the array is fully sorted.

#Insertion Sort:

Time complexity: O(n^2) in the worst and average cases, O(n) in the best case (when the input array is already sorted) 
Space complexity: O(1) 
Basic idea: Build up a sorted subarray from left to right by inserting each new element into its correct position in the subarray. Repeat until the array is fully sorted. 


#Selection Sort:

Time complexity: O(n^2) in the worst, average, and best cases 
Space complexity: O(1) 
Basic idea: Divide the array into a sorted subarray and an unsorted subarray. Find the minimum element from the unsorted subarray and swap it with the first element of the unsorted subarray. Repeat until the array is fully sorted. 

#Merge Sort:

Time complexity: O(n log n) in all cases 
Space complexity: O(n) 
Basic idea: Divide the array into two halves, recursively sort each half, and then merge the two sorted halves to obtain the fully sorted array. 


#Quick Sort:

Time complexity: O(n log n) in the average and best cases, O(n^2) in the worst case 
Space complexity: O(log n) 
Basic idea: Select a pivot element, partition the array into two subarrays (elements less than the pivot and elements greater than the pivot), and recursively sort each subarray. 


#Heap Sort:

Time complexity: O(n log n) in all cases 
Space complexity: O(1) 
Basic idea: Build a max heap from the array, repeatedly remove the maximum element from the heap and place it at the end of the array, and decrease the heap size. Repeat until the array is fully sorted. 

