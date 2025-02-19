// Rotate array elements by 1 (clock wise)

a = [10, 15, 20, 25, 30, 35, 40, 45, 50]
console.log("Original Array:" + a);
temp = a[a.length-1]
    for(i = a.length-1 ; i >= 0 ; i--)
{
    a[i] = a[i-1];
}
    a[0] = temp;
    console.log("array after rotation: " + a);