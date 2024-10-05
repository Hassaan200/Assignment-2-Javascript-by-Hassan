// Chapter 6 to 9

// First question
var a = 10
document.write("The value of a is " + a)
var b = ++a
document.write(" <br>The value of ++a is: " + a)
document.write(" <br>Now the value of a is: " + a)

var c = b++
document.write(" <br>The value of a++ is: " + c)
var c = b++
document.write(" <br>Now the value of a is: " + c)

var d = --c
document.write(" <br>The value of --c is: " + d)
document.write(" <br>Now the value of a is: " + d)

var e = d--
document.write(" <br>The value of d-- is: " + e)
var e = d--
document.write(" <br>Now the value of a is: " + e)

// Second Question

var a = 2, b = 1;
var result = --a - --b + ++b + b--  /* 1 - 0 + 1 + 1 = 3 */
document.write("a = " + a)
document.write("<br>b = " + b)
document.write("<br>Result is " + result)


// Third Question


var name1 = prompt("Enter your Name:");
alert("Hello " +  name1 + "! Welcome to our website");
console.log(name1);



// fivth question



var number = prompt("Enter a number:") || 5;


number = parseInt(number) || 5;

console.log("Multiplication Table of " + number);

for (var i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));



}

// Sixth Question

var sub1 = prompt("Enter 1st subject");
var sub2 = prompt("Enter 2nd subject");
var sub3 = prompt("Enter 3rd subject");
console.log(sub1);
console.log(sub2);
console.log(sub3);

var totalmarks = 100
var obt1 = parseFloat(prompt("Enter your marks of " + sub1));


var obt2 = parseFloat(prompt("Enter your marks of " +  sub2));

var obt3 = parseFloat(prompt("Enter your marks of " +   sub3));

var total_obt_marks = obt1 + obt2 + obt3;

var full_marks = totalmarks * 3;
var percentage =  (total_obt_marks / full_marks) * 100;

alert(
    "Subject 1: " + sub1 + "\n" +
    "Subject 2: " + sub2 + "\n" +
    "Subject 3: " + sub3 + "\n\n" +
    "Total Marks: " + full_marks + "\n" +
    "Obtained Marks: " + total_obt_marks + "\n" +
    " Your Percentage is : " + percentage + "%"
);

// Chapter 9 to 11
// question 1

var city =  prompt("Enter your city");
if(city == "karachi"){
    alert("Welcome to city of lights");
}
else{
    alert("Welcome to our city " + city );
}

// Question 2

var gender = prompt("Enter your gender")
if(gender == "male"){
    alert("Good morning sir");
}
else{
    alert("Good morning ma'am");
}


// Question 3

var color =  prompt("Enter signal color");
if(color == "red"){
    alert("Signal " +   " Message " + " \n" + "Red  "  + " Must stop")
}
else if(color =="yellow"){
    alert("Signal " +    " Message " + " \n" + "Yellow  "  + " Ready to move")
}
else{
    alert("Signal "  + " Message " + " \n" + "Green  "  + " Move now")
}

// Question 4

var fuel =  prompt("How much fuel reamin in your car?");
if(fuel < 0.25 ){
alert("Please Refill the fuel in your car")
}
else{
    alert("The Fuel is sufficient in your car")

}

// Question 5
var a = 4;
if (++a === 5) {
    alert("Given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
else{
    alert("Given condition for variable b is false");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
else{
    alert("condition 1 is false");
}
if (c === 13){
alert("condition 2 is true");
}
else{
    alert("condition 2 is false");
}
if (++c < 14){
alert("condition 3 is true");
}
else{
    alert("condition 3 is false");
}

if(c === 14){
alert("condition 4 is true");
}
else{
    alert("condition 4 is false");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
else{
    alert("The cost doesn't equals");
}


if (true){
    alert("True");
    }
    if(false){
        alert("False");
    }

if("car" < "cat"){
    alert("car is smaller than cat");
}
else{
    alert("cat is smaller than cat , condition is false");
}

// Question 6

alert("Welcome, We can give you the final result of your exam")
var totalmarks = prompt("Enter your total marks of three subject")
var obtmarks = prompt("Enter your total obtained marks in three subject")
var percentage = (obtmarks /  totalmarks) * 100

if(percentage >= 80){
alert("Total marks: " + totalmarks + " \n" + "Marks obtained: " + obtmarks +  "\n" + "Percentage: " + percentage + "%" +  "\n" + "Grade: " + "A-one" + "\n" + "Remarks:  " + "Excellent");

}
else if(percentage >= 70 && percentage <= 79){
    alert("Total marks: " + totalmarks + " \n" + "Marks obtained: " + obtmarks +  "\n" + "Percentage: " + percentage + "%" +  "\n" + "Grade: " + "A" + "\n" + "Remarks:  " + "Good");
}
else if(percentage >= 60 && percentage <= 69){
    alert("Total marks: " + totalmarks + " \n" + "Marks obtained: " + obtmarks +  "\n" + "Percentage: " + percentage + "%" +  "\n" + "Grade: " + "B" + "\n" + "Remarks:  " + "You Need to Improve");
}
else{
    alert("Total marks: " + totalmarks + " \n" + "Marks obtained: " + obtmarks +  "\n" + "Percentage: " + percentage + "%" +  "\n" + "Grade: " + "Fail" + "\n" + "Remarks:  " + "Sorry");
}

// Question 7


var secret = 7;
var  guess = prompt("Guess the secret number");
if(guess == secret){
    alert("Bingo! Correct answer. ");
}
else if(guess == +1){
    alert("Close enough to the correct answer.");
}
else{
    alert("Wrong number")
}

// Question 8

var num = +prompt("Enter a Number")
if(num % 3 === 0){
    alert(num + " is divisible by 3");
}
else{
    alert(num + " is not divisible by 3");
}

// Question 9

var num1 =  +prompt("Enter first number");
if(num1 % 2 === 0){
    alert(num1 + " is even");
}
else{
    alert(num1 + " is odd");
}

// Question 10

var temp = +prompt("Enter Wheather Temperature in celsius")
if(temp > 40){
    alert("It is too hot outside.")
}
else if(temp > 30 &&  temp <= 40){
alert("The Weather today is Normal.")
}
else if(temp > 20 &&  temp <= 30){
    alert("The Weather today is cool.")
}
else{
alert("OMG! Today's weather is so Cool.")
}

// Question  11

var firstnum = +prompt("Enter First Number")

var opt = prompt("Enter Operation")

var secondnum = +prompt("Enter Second Number")
if(opt === "+"){
    alert(firstnum + secondnum)
}
else if(opt ==="-"){
    alert(firstnum - secondnum)
}
else if(opt === "*"){
    alert(firstnum * secondnum)
}
else if(opt === "/"){
    alert(firstnum / secondnum)
}
else{
    alert(firstnum % secondnum)
}

// Chapter 12 -13

// Question 1

var userinput = prompt("Enter Character")
var a =  userinput.charCodeAt(0)
console.log("The charcode of " + userinput + " is " + a);
console.log("The " + a + " charcode is belongs to " + userinput)
if(a >= 48  && a <= 57){
    console.log(userinput + " is a Number")
}
else if(a >=  65 && a <= 90){
    console.log(userinput + " is a Uppercase letter")
}
else if(a  >= 97 && a <= 122){
    console.log(userinput + " is a Lowercase letter")
}
else{
    console.log(userinput  + " is neither a number nor a letter.")

}


// Question 2

var int1 =  +prompt("Enter First Integar")
var int2 =  +prompt("Enter Second Integar")

if(int1 >  int2){
    alert(int1 + " is greater ")
}
else if(int2 > int1){
    alert(int2 + " is greater" )
}

else{
    alert(int1 + " is equal to " + int2)
}

// Question 3

var number =  +prompt("Enter Number")
if(number > 0){
    alert("The Number is Positive")
}

else if(number < 0){
    alert("The Number is Negative")
    }
else{
    alert("Number is Zero")
}

// Question 4
var ipt  = prompt("Enter a single character");
var vowels = 'aeiouAEIOU'
var b = vowels.includes(ipt);
if(ipt.length === 1){
    if(b ==  true){
        alert(ipt + " is a Vowel")
console.log(ipt  + " is a Vowel")
}
else{
    alert(ipt  + " is not a vowel")
    console.log(ipt  + " is not a vowel")
}
}
else{
    alert(ipt  + " is not a single character")
    console.log(ipt  + " is not a single character")
}

//  Question 5

var password = "hassan123"
var  input = prompt("Enter Password")

if(input === ""){
  var input1 =  prompt("Please enter your password")
    if(input1 === password ){
        alert("Correct! The password you entered matches the original password.")
    }
    else{
        alert("Incorrect password")
    }
}
else if(input === password){
    alert("Correct! The password you entered matches the original password.")
}
else{
    alert("Incorrect password")
}

// Question 6

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
console.log(greeting);

// Question 7

var time = prompt("Enter time in 24 hour format");
if (time >= 0  && time < 12) {
alert("Good Morning");

}
else if(time >=  12 && time < 17){
    alert("Good Afternoon");
}
else if(time >= 17 && time < 21 ){
    alert("Good Evening");
}
else{
    alert("Good Night")
}

// Chapter 14 to 15
// Question 1

var array = [];
console.log(array);

array.push("John")
array.push("Cena")
console.log(array);

// Question 2

var studentname = []
console.log(studentname)
studentname.push("hassan", "noman",  "Ali");
console.log(studentname)

// Question  3
var stringarray = ["car",  "bike", "bus", "train", "airoplane"];
console.log(stringarray);
// Question 4
var numberarray = [1,  2, 3, 4, 5];
console.log(numberarray);

// Question 5

var booleanarray =  [true, false, true, false];
console.log(booleanarray[0]);
console.log(booleanarray[1]);

// Question  6

var mixedarray = [12, "Tree", true, 100, [1,2,3]];
console.log(mixedarray);

// Question 7

console.log("Qualifications");
var education = ["SSC", "HSC", "BCS",  "BS", "BCOM", "MS", "M.Phil.", "PhD"];
console.log(education)

// Question 8

var ary = ["Hassan", "Ali", "Hamza"];
var score = [320, 230, 480];
document.write("Score of " + ary[0] + " is 320. Percentage: " + (320 /500)*100 + "%");
document.write("<br>Score of " + ary[1] + " is 230. Percentage: " + (230 /500)*100  + "%");
document.write("<br>Score of " + ary[2] + " is 480. Percentage: " + (480 /500)*100   + "%");

// Question  9

var colors = ["Blue", "Red", "Green", "Yellow"];
document.write("Original colors: " + colors.join(", ") + "<br>");
var add = prompt("What color do you want to add ?");
colors.unshift(add);
document.write("Updated colors: " + colors.join(", "));

// Question 10
var score = [320, 230, 480, 120]
console.log("Scores of students " + score);
console.log("Ordered scores of students " + score.sort())

// Question 11

var cities = ["Karachi", "Lahore", "Peshawar", "Islamabad", "Quetta", "Multan"];
console.log("Cities List: " + "\n" + cities);
console.log("Selected Cities: " + "\n" + cities.splice(3,2));


// Question 12

var arr = ["This", "is",  "my", "cat"];
console.log("Array: " +  arr);

console.log("String: " + arr.join(" ")); 

// Question  13

var array = ["Keyboard",  "Mouse", "Printer", "Monitor"];
console.log("Devices: " + array);
console.log("Out: " + array.shift());
console.log("Out: " + array.shift());
console.log("Out: " + array.shift());
console.log("Out: " + array.shift());

// Question 14
var array1 = ["Keyboard",  "Mouse", "Printer", "Monitor"];
console.log("Devices: " + array1);
console.log("Out: " + array1.pop());
console.log("Out: " + array1.pop());
console.log("Out: " + array1.pop());
console.log("Out: " + array1.pop());

// Question 15

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write('<select>'); 
for (var i = 0; i < manufacturers.length; i++) {
    document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option> ');
}
document.write('</select>');

// Chapter 17 - 20
// Question 1

var multiArray = [[], [], []];
console.log(multiArray); 

// Question 2
var multiArray2 = [[1, 2, 3], [4, 5, 6], [7,  8, 9]];
console.log(multiArray2);
document.write(multiArray2[0]  + "<br>"  + multiArray2[1] + "<br>" + multiArray2[2]); 

// Question 3

var lumber = [1, 2,  3, 4, 5,  6, 7, 8, 9, 10];
for(i = 0; i < lumber.length; i++) {

document.write(lumber [i] + "<br>");
}

// Question 4

var table = prompt("Enter number to show its multiplication table")

var length = prompt("Enter Length of a multiplication table " + table);
if (!isNaN(table) && !isNaN(length)){
for (var i = 1; i <= length; i++) 
  document.write( table  + " x " + i + " = " + (table * i) + "<br>");
}
else {
    alert("Please enter valid numbers for both the table number and the length.");
}

// Question 5

var fruits = ["Apple",  "banana", "cherry", "date", "elderberry"];

for(i = 0 ; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>" );
}
for(i = 0 ; i < fruits.length; i++) {
  
    document.write("Element at Index " + i + " is " + fruits[i]  + "<br>");
}


// Question 6

var count = [];
for(i=1; i<= 15;  i++) {
    count.push(i);
    
    console.log("Counting:  " + count);
}
var revsere = [];
for(i=10; i>=1; i--){
revsere.push(i);
}
console.log("Revserse counting: " +  revsere.join(", "));
var even =  [];
for(i=2; i<=20; i+=2){
    even.push(i);
}
console.log("Even numbers: " + even.join(", "));

var  odd = [];
for(i=1; i<=20; i+=2){
    odd.push(i);
}
console.log("Odd numbers: " + odd.join(", "));
var series =  [];
for(i=2; i<=20; i+=2){
    series.push(i + "k");
}
console.log("Series: " + series.join(", "));


// Question  7

var a = ["cake", "apple pie",  "cookie", "patties","chips"];
var search = prompt("Welcome to our bakery. What do you want to  order?").toLowerCase();

if(a.includes(search)){
    alert(search + " is available at index " + a.indexOf(search) + " in our bakery");

}
else{
    alert(search + " is not available in our bakery");
}

// Question 8

var z =  ["24", "35", "44", "5", "91", "28", "12"];
var max = 0
for(i=0; i<z.length; i++){
    if(z[i] > max){
        max =  z[i];

    }
}
console.log("Array items: " + z)
console.log("Largest number is: " + max);

// Question 9

var x =  [24, 53, 78, 91, 12, 53, 78, 91,5,14,100];
var min = x[0];
for(i=0; i<x.length; i++){
    if(x[i] < min){
        min = x[i];

    }
}
console.log("Array items: " + x);
console.log("Smallest number is: " + min);

// Question 10

for(i=5;  i<=100; i+=5){
    console.log(i);
}








