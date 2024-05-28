// Assalamualaikum @everyone 👋
// 🚀 Day 20 Challenge: Start Coding! 🚀
// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var totalScore = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return totalScore / scores.length;
}
console.log(averageScore(90, 99, 76, 66, 85));
console.log("\n");
// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
var addFive = makeAdder(5);
console.log(addFive(39));
console.log("\n");
// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
var userProfile = (function () {
    var name = "Ali";
    var age = 52;
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, " , Age: ").concat(age));
        }
    };
})();
userProfile.displayInfo();
