var print = 0;
var sum = 0;
while (print < 1001) {
    sum = sum + print;
    print = print + 1;
    console.log("sum of all the numbers from one  to one thousand = " + sum);
}
console.log("The sum of all the numbers from one to one thousand is =" + sum);



var create = 1;
var even = 0;
while (create < 501) {


    if (create % 2 != 0) {
        even = even + create;
        console.log("sum of the odd numbers from one to five hundred is = " + even);
    }

    create = create + 1;
}
console.log("The sum of all the odd numbers is =" + even);