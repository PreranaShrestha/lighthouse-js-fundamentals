var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
//Write a while loop that prints out the contents of ingredients:
var repeat = 0;
console.log("Print the ingredients using while loop:");
while (repeat < ingredients.length) {
  console.log(ingredients[repeat]);
  repeat++;
}
//write afor loop that prints out the contents of ingredients:
console.log("Print the ingredients using for loop:");
for (var i = 0; i< ingredients.length; i++) {
  console.log(ingredients[i]);
}
//Write anty loop(while or for) that pringts out the conbtents of ingredients backwards:
console.log("Print the ingredients backward using for loop:");
for (var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}