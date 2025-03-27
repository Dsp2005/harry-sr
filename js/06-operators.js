let a=45
let b=5

//arithmatic operators
console.log("a + b", a+b);
console.log("a - b", a-b);
console.log("a * b", a*b);
console.log("a / b", a/b);
console.log("a ** b", a**b);
console.log("a % b ", a%b);
console.log("++a= ",++a);   //45+1 -> 46(first add 45 the a becomes 46)
console.log("a++= ",a++);   //46 (46 is printed first then added that is it becomes 47)
console.log("--a =",--a);   //46(since it became 47 up then it subtarcts 1 first then prints a i.e 46)
console.log("a-- =",a--);   //46(46 is printed first then it becomes 45 in back )
console.log("a =",a);       //45( hence 'a' we got is 45)
console.log("--a=",--a);    //44(a is subtracted again and 44 is assigned to a in back)

//assignment operators
let a1 = 8;
a += 2       //a=a+2  //can also be written as (a+=2)
console.log(a);

//comparison operators
let comp1=6;
let comp2=8;
console.log("comp1==comp2 is :", comp1==comp2);
console.log("comp1!=comp2 is :", comp1!=comp2);
console.log("comp1===comp2 is :", comp1===comp2);
console.log("comp1!==comp2 is :", comp1!==comp2);

let comp3=6;
let comp4="6";
console.log("comp3==comp4 is :", comp3==comp4);
console.log("comp3!=comp4 is :", comp3!=comp4);
console.log("comp3===comp4 is :", comp3===comp4); /// (=== is used to check if datatype like one is num and string is same hence false)
console.log("comp3!==comp4 is :", comp3!==comp4); ///(=== is used to check if datatype like one is num and string is not same hence true)
