arr = [10, 20, 30, 40, 50]
console.log(arr);

arr[2] = 99
console.log(arr);

for(i = 0; i < arr.length; i++)
{
    if(arr[i] % 2 == 0)
        arr[i] = "e";
    else
    arr[i] = "o";
}
console.log(arr);
