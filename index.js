// ================= A. Q +A  =================

/*

1. How do we assign a value to a variable?
    // Using the equal operator
2. How do we change the value of a variable?
    // Calling the variable and setting it to a different value
3. How do we assign an existing variable to a new variable?
    // By setting the new variable to the existing variable
4. Remind me, what are declare, assign, and define?
    // Declare - Creating a variable to be called upon
    // Assign - assigning a value to the variable
    // Define - Global scope or local scope
5. What is pseudocoding and why should you do it?
    // Pseudocoding - helps plan out your steps before implementing. To be more organized and efficient
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it
    // 30%-40% / 70%-60%
*/
// ================= B. Strings  =================

/*

1. Create a variable called firstVariable
2. Assign it the value of the string "Hello World"
3. Change the value of this variable to some number
4. Store the value of firstVariable in a new variable called secondVariable
5. Change the value of secondVariable to any string.
6. What is the value of firstVariable?
7. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.

*/
    // 1.
        let firstVariable = ""
    // 2. 
        firstVariable += "Hello World"
    // 3. 
        firstVariable = 23
    // 4. 
        let secondVariable = firstVariable
    // 5.
        secondVariable = "Zyshawn"
    // 6.
        // The value is 23
    // 7.
        yourName = "Serjay Parks"
        // console.log(`Hello, my name is ${yourName}`)
// ================= C. Booleans  =================

const a = 4;
        //   const b = 53;
        //   const c = 57;
        //   const d = 16;
        //   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' == 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
        //   console.log(true || false);
        //   console.log(false && false && false && false && false || true);
        //   console.log(false === false)
        //   console.log(e === 'Kevin');
        //   console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
        //   console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
        //   console.log(48 == '48');

// ================= D. The farm  =================

  const animal = "dog"
  if (animal === "cow"){
    // console.log("mooooo")
  } else {
    // console.log("Hey! You're not a cow.")
  }

// ================= E. Driver's Ed  =================
        let age = 23
        if (age >= 16){
            // console.log("Here are the keys!")
        } else {
            // console.log("Sorry, you're too young.")
        }

// =================== II. Loops  ===================

// ================ A. The basics  ================
        for(let i = 0; i <= 10; i++){
            // console.log(i)
        }
        for(let i = 10; i <= 400; i++){
            // console.log(i)
        }
        for(let i = 12; i < 4000; i+=3){
            // console.log(i)
        }

// ================ B. Get even  ================

for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        // console.log(`${i} <-- is an even number`)
    } else {
        // console.log(i)
    }
}

// ================ C. Give me Five  ================

for(let i = 0; i <= 100; i++){
    if(i % 5 === 0 && i % 3 === 0 ){
        // console.log(`I found a ${i}. High five! Three is a crowd`)
    } else if (i % 3 == 0){
        // console.log(`I found a ${i}. Three is a crowd`)
    } else if(i % 5 == 0){
        // console.log(`I found a ${i}. High five!`)
    }
}

// ================ D. Savings account  ================

let bank_account1 = 0
for(let i = 1; i<=10; i++){
    bank_account1 +=i
}
// console.log(bank_account)
let bank_account2 = 0
for(let i = 1; i<=100; i++){
    bank_account2 +=i *2
}
// console.log(bank_account2)

// ================ III. Arrays & Control flow  ================

// ================ A. Talk about it  ================

/*
1. What are the things in an array called?
    // data types in square brackets
2. Do Arrays guarantee those things will be in order?
    // no you can shift things arround
3. What real-life thing could you model with an array?
    // making a list of items
*/

// ================ B. Easy Does it   ================

const quotes = ["Just one small positive thought in the morning can change your whole day.", "Opportunities don't happen, you create them.", "It is never too late to be what you might have been."]

// ================ C. Accessing elements  ================

const randomThings = [1, 10, "Hello", true]

randomThings[0]
randomThings[2] = "World"
// console.log(randomThings[2])

// ================ D. Changing values  ================

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

ourClass[2]
ourClass[4] = "Octocat"
ourClass.push("Cloud City")

// console.log(ourClass)

// ================ E. Mix It Up  ================

const myArray = [5, 10, 500, 20]

myArray.push("Aegon", "Serjay")
myArray.shift()
myArray.unshift("Bob Marley")
myArray.pop()
myArray.reverse()
    // Yes.
    // Changes the form of an array
    // Reversed the array

// console.log(myArray)

// ================ F. Biggie Smalls  ================

let number = 100

if (number < 100){
    // console.log("little number")
} else {
    // console.log("big number")
}

// ================ G. Monkey in the Middle ================

let num = 11

if (num < 5){
    // console.log("little number")
} else if(num > 10){
    // console.log("big number")
} else {
    // console.log("monkey")
}

// ================ H. What's in Your Closet ================

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

//   console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)
  kristynsCloset.splice(6, 0, "raybans")
  kristynsCloset[5] = "stained knit hat"

//  console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][2]} and ${thomsCloset[2][2]}!`)
 thomsCloset[1][2] = "Footie Pajamas"

//  console.log(thomsCloset)

 // ================IVH. Functions ================

 // ================ A. printGreeting ================

 function printGreeting(name){
    return `Hello there, ${name}`
 }
// console.log(printGreeting("Serjay"))

 // ================ B. printCool ================

 function printCool(name){
    return `${name} is cool`
 }
// console.log(printCool("Serjay"))

 // ================ C. calculateCube ================

 function calculateCube(num){
    num *= num * num
    return num
 }
//  console.log(calculateCube(5))

  // ================ D. isVowel ================

  const vowels = "aeiou"

  function isVowel(char){
    for(let i = 0; i < vowels.length; i++){
        if (vowels[i] === char.toLowerCase()){
            return true
        } 
    }
    return false
  }

//   console.log(isVowel("I"))

// ================ E. getTwoLengths ================


function getTwoLengths(str1, str2){
    let numOfChars = []
    numOfChars.push(str1.length, str2.length)
    return numOfChars
}

// console.log(getTwoLengths("stop", "go"))

// ================ F. getMultipleLengths ================

function getMultipleLengths(arr){
    let strLength = []
    arr.forEach((check)=>{
        strLength.push(check.length)
    })
    return strLength
}

// console.log(getMultipleLengths(["store", "texas", "new york", "zyshawn"]))

// ================ G. maxOfThree ================

function maxOfThree(a,b,c){
    let moreThan = 0
        if (a > b){
            moreThan = a
        } else {
            moreThan = b
        }
        return moreThan > c ? moreThan:c
}

// console.log(maxOfThree(1000,1456200,562))

// ================ H. printLongestWord ================

function printLongestWord(arr){
    let longestWord = arr[0]
    let longestWordNum = arr[0].length
     
    for (let i = 1; i < arr.length; i++){
        if (longestWordNum < arr[i].length){
            longestWord = arr[i]
            longestWordNum = arr[i].length
        }
    }
    return longestWord
}

// console.log(printLongestWord(["Per Scholas", "appAcademy", "money", "Zyshawn goes to school"]))

// ==================================== Objects ====================================

const user = {
    name: "Serjay Parks",
    email: "sparks@gmail.com",
    age: 23,
    purchased: []
}
user.email = "parksS@gmail.com"

user.age++
// console.log(user)

user.purchased.push ('carbohydrates', 'peace of mind', 'Merino jodhpurs')

// console.log (user)
// console.log (user.purchased[2])

user.friend = {
    name: "Dre",
    age: 22,
    location: "Hampton",
    purchased:  []
}

// console.log(user.friend.name)
user.friend.age = 55

user.friend.purchased.push("The One Ring")
user.friend.purchased.push("A latte")

// console.log(user.friend.purchased[1])

function userList (arr) {
    arr.purchased.forEach ((x) => {
        // console.log (x)
    })
}

function friendsList (arr) {
    arr.friend.purchased.forEach ((z) => {
        // console.log (z)
    })
}

userList(user)
friendsList(user)

function oldAndLoud (person) {
    person.age++
    person.name = person.name.toUpperCase()
}

oldAndLoud(user)
oldAndLoud(user.friend)
// console.log (user)
// console.log (user.friend)

// ==================================== Hungry for More ====================================

// ============================== 1. Mama Cat ==============================

const mama = {
    name: "Speedy",
    breed: "Persian cat",
    age: 9
}
// console.log(mama.name, mama.age)

// ============================== 2. Papa Cat ==============================

const papa = {
    name: "Tom",
    breed: "Sphynx cat",
    age: 15
}

// ============================== 3. CombineCats ==============================

function combineCats(cat1, cat2){
    return {name: `${cat1.name}${cat2.name}`, age : 1, breed: `${cat1.breed}-${cat2.breed}`}
}

// console.log(combineCats(mama, papa))

// ============================== 3. Cat brain bender ==============================

console.log(combineCats(combineCats(combineCats(mama, papa), combineCats(combineCats(mama, papa), combineCats(mama, papa))),combineCats(mama, papa)))