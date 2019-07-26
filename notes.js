Java Script Notes

Tool to check our javascript
  -console.log("insert variable here")
Note: User never sees this, only a developers tool

VARIABLE: defining an idea or quantity for the computer for it to remember
    *camelCase- first word is lower case, first letter of second word is capitalized

Data Types:
1) "STRING": Must be put into quotes, represents texts
    var harryStyles = "perfect human being";

2) NUMBERS: Do NOT use quotes, represents a quantity or amount. Can use operators to perform math.
    var harryNumber = 1;
  a) < --> greater than or less than. Ex: 8>5
  b)+, -, *, /-->addition, subtraction, multiplication, division
  c) == or === --> equal to
  d)<= or >= --> less than or equal to and greater than or equal to
  e) % --> remainder ex: 16%3 computer will return 1 because that's the remainder of 16/3.

HOW TO USE NUMBER AND STRING VARIABLES

var dogName = "Cricket";
var dogLeash = 1;
var poopBags = 2;
var waterBottle = 1;

var numItems = dogLeash + poopBags + waterBottle;

SUMMARY: 1) Broke down our problem into parts (variables), 2) Defined our variables, 3) Used our variables to perform a task

INTERPOLATION: integrating numerical values into strings using variables. MUST USE BACKTICK (`)

console.log(`Take ${dogName} on a walk! Don't forget to bring ${numItems} items!`)

ARRAYS: a list of strings and/or numbers. Represented using square brackets. First item, assigned an index number of 0.
  var arraySports = ["soccer", "basketball", "football", "discus", "diving"]

  console.log(arraySports[0]) -->"soccer"
  console.log(arraySports[4]) -->"diving"

arraySports.length --> .length tells computer to print the number of items in an array

arraySports.push("gymnastics")--> adds an item to the end of an arrayTruth

arraySports.pop()--> removes the last item of an array

jQuery (ELEMENT ASCESSORS): library of shortcuts we download onto our html page. Link goes on second to last line of our body, right above the javascript link

<script src="https://ajax.googleapis.com/ajax/libs//jquery/2.1.3/jquery.min.js"></script>

EVENT HANDLERS (EVENT LISTENERS): tells the computer to listen to a certain area (often times a button) for a click. On the click, perform a function (action)

Define a specific area on HTML page using jQuery ($)
var dareButton = $('.darebutton');

area     listen for    action
dareButton.on('click , showDare');

ADDING ELEMENTS TO OUR WEBPAGE
1)Think of user experience? What do we want the user to see/do?
2)Create an area or <div> in my html page to add the elements
3)Use jQuery -- $('nameofdiv') to tell computer where to look in my html WEBPAGE
4) Create a function (action) to add the items to the html <div>
  a) .text --> only adds the words without any formatting. CSS does NOT apply
  b) .append --> adds html elements to the html file. MUST use BACKTICKS

  var dareButton = $('.darebutton');
  dareButton.on('click' , showDare);

  var dareContainer = $('.darecontainer')

  function showDare() {

  dareContainer.text(arrayDare[2]);
  dareContainer.append(`<img src="cs">`);
  }

CONDITIONALS

1. Define the condition (what do you want be true?)
2. Determine the action if the user meets the condition
3. Determine the action if the user does NOT meet the condition
4. Conditionals exist in functions
if (condition) {
  action if user meets the condition
}
else {
  action if user does not meet the condition
}

Example

if(userNumber > 7) {
  container.append(`<img src= ""`)
}
else {
  container.append(`<p>Sorry, Not Sorry</p>`)
}
