// Assalamualaikum @everyone 👋

// 🚀 Day 20 Challenge: Start Coding! 🚀

// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function averageScore(...scores:number[]):number{
    let totalScore = scores.reduce((sum, score)=> sum+ score, 0);
    return totalScore/ scores.length;
}
console.log(averageScore(90,99,76,66,85));
console.log(`\n`);

// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function makeAdder(valueToAdd: number): (number)=> number{
    return function(number: number): number{
        return number + valueToAdd;
    };
}
let addFive = makeAdder(5);
console.log(addFive(39));
console.log(`\n`);

// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
let userProfile = (function() {
    let name= "Ali";
    let age = 52;
    return{
        displayInfo: function(){
            console.log(`Name: ${name} , Age: ${age}`);
        }
    };
})();
userProfile.displayInfo();