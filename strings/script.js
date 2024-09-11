// create strings

let str = "Apna college"

// to print the length of string
console.log(str.length);

// to acces any character from the string
console.log(str[1]);
console.log(str[8]);

// Template literals

let specialString= ` this is a template literal`;
console.log(specialString); 

let obj ={
    item: "pen",
    price:10,
};

// instead of writing as
// console.log("the price of", obj.item, "is", obj.price, "rupees");
// we can use template literals

let templateString = `the price of ${obj.item} is ${obj.price} rupees`;
console.log(templateString);

// to print something in a next line use \n
// similarily to apply tab space  use\t

console.log("Gajendra \n arya");
console.log("Up\tes");

// String methods in JS
// 1. toUpperCase()
// 2. toLowerCase()
// 3. trim()
// 4. slice() returns part of string
// 5. substring()
// 6. str1.concat(str2) joins str2 with str1
// 7. charAt() returns character at specified index
// 8. str.replace(searchVal, newVal)


let string = "Apna College";
console.log(string.toUpperCase());

// NOTE-  str.toUpperCase does not change the original string instead creates a new one

let strn = "    Apna College   JS  ";
console.log(strn.trim()); 

// slicing
 let name = "Gajendra";
 console.log(name.slice(1,3));

 let str1= "Apna";
 let str2 = "College";

 let result = str1.concat(str2);
 console.log(result);

 // shortcut let result = str1 + str2

 let stringg = "hello";
 console.log(stringg.replace("lo","p"));

 let newString = "ILoveJS";
 console.log(newString.charAt(3));

 let newname = "gajendra";
 console.log(newname.toUpperCase());
 console.log(newname.concat(newString));







