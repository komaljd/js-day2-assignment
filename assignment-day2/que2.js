console.log("================ String Methods ============")

//  substring
// ==>extract characters from the string from 1 to 3
console.log("===substring");

var str = "Hello World";
var substr = str.substring(1, 4);
console.log(substr);


// slice
// ==> from 1 to 5 between extract out and display 
// ==>Extract parts of a string:
console.log("===slice");
var sliceout = str.slice(1, 7)
console.log(sliceout);



// replaceAll

// let replaceall = replaceAll('abba', 'a', 'i');
// console.log(replaceall);



// replaceś
// ==> replace text with new text which we are assign
console.log("===replaceAll");
let lang = "js";
console.log("replace:" + lang + " with LetsUpgrade" );
let replce = lang.replace("js", "LetsUpgrade");
console.log("Output of replce js: "+ replce);


console.log("================ Array Methods ============")
// ex================================
console.log("=== 1) Orignal array");
let arr = ["India", true, 20] ;
console.log(arr);

// 1.Changing Elements
// ==> replace array with index number
// ==> array elements are accessed using their index number:
// ex================================ 
    console.log("=== 2) replace 20 with kiwi");
    arr[2]= 'kiwi';
    console.log(arr);

    
// 2.tostring()
// ==>  using toString [convert array into string ]
// ex================================
    console.log("=== 2) toString() ");
    console.log(arr.toString());

// 3.Length()
// ==> The length property provides an easy way to append a new element to an array:
// ex================================
    console.log("=== 3) length");
    arr[arr.length] = 'komal';
    console.log(arr);


// 4. delete
// ==> Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:
// ==> it will only hide and show empty text 
// ==> Not just like pop did
// ex================================
    console.log("=== 3) delete ");
    delete arr[2];
    console.log( arr);

/* 5.splice()
 ==> The splice() method can be used to add new items to an array:
he first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("javascript" , "letsupgrade") define the new elements to be added.
The splice() method returns an array with the deleted items:
*/
//ex================================
    console.log("5.=========splice()");
 
    let remove = arr.splice(2, 2, 'javascripti','letupgrade');
    console.log(arr);

// he splice() method returns an array with the deleted items:
    console.log("5.=========splice() shows remove element");
    console.log(remove);

    // Using splice() to Remove Elements
console.log("5.=========splice() remove element");

arr.splice(0,2);
console.log(arr);

//==>The concat() method can also take strings as arguments:


console.log("5.=========concat for string");


// new ARRay
console.log("NEW ARRAY");

let arr2 = ["komal", "learning", "nerul"];
console.log(arr2);
// Merging an Array with Values)
console.log("6 ======= Merging an Array with (Values)");
var a = arr2.concat("Front End Developer");
console.log(a);


/* 7. slice()
==> This example slices out a part of an array starting 
from array element 1 ("value"):
syntax:
    arr2.slice()

*/
console.log("7 ======= slice()");

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(2);
console.log(citrus);
















    








