let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

console.log("Original Array:", arr);

odd_arr = [];
even_arr = [];

for(i = 0; i< arr.length; i++)
    if(arr[i] % 2 === 0) {
        even_arr.push(arr[i])
    }
    else {
        odd_arr.push(arr[i])
    }

    console.log("Odd Array:", odd_arr);
    console.log("Even Array:", even_arr);