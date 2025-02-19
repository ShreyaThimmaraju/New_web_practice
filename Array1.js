// Average of all Elements

arr = [10, 20, 30, 40, 50];
console.log("Original Array: " + arr);
total = arr.reduce((sum, value) => sum + value);
average = total / arr.length;

console.log("Average:", average);