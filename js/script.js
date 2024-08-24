"use strict";
const theif = {
   jacket: "black",
   height: 1.7,
   color: {
      hair: "gray",
      style: "curley",
   },
   howOut: function() { 
      console.log("Fast with door");
   },
};

const hair = theif.color.hair; // ozimizga kerakli metodni chaqirib olish 
const style = theif.color.style;
console.log(hair);
console.log(style);

theif.howOut(); // funcsiya chaqirish 
// console.log(theif["colors"])
console.log(Object.keys(theif).length); // obyekt uzunligi aniqlash
let count = 0;
for (let key in theif) { 
   count++;
}  // bu yolda ham biz ichida qancha va nechta element borligini korishimiz mumkin  bu yol xunuk yol lekin osson yol 
// for of sikl bilan ishlamaydi // for of array bilan ishlaydi

// for (let key in theif) { 
//    if(typeof theif[key] === "object") { 
//       for (let i in theif[key]) { 
//          console.log(`Property ${i} has value ${theif[typeof key][i]}`); 
//       }
//    } else {
//       console.log(`Property ${key} has value ${theif[typeof key]}`); 
//    }
// } // bunda ichidagi obyektlarni korvommiz

console.log(count);
