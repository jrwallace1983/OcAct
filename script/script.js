/*var x = 1;
var y = 1;
console.log(y);
if (y == undefined){
console.log("Object is undefined");
}
else{
	console.log("Object is defnied" + y);
}
var s = "hello";
s += " World";
console.log(s + "!!!");

function myfunc(){
	var b = 1, c = 3;
	console.log(b * c);
	if (b == 1){
		console.log(b + 3);
		return 4;
	}
}
console.log(myfunc() ** myfunc());
function numfunc(){
	var sum = 0;
	for(var i = 0; i < 10; i++){
		sum = sum + i;
	}
	console.log(sum);
}
numfunc();
function myfor(){
	var list = ["a", "b", "c"];
	for(x in list){
		console.log(x);
	}
}
myfor();
function myal(){
	alert("this is writing");
	document.write("Please Subscribe NOW");
}
var testnum = 5;
console.log(testnum +=4);

//rpls
function number_to_name(number){
	if(number == 0){
		return "rock";
	} else if(number == 1){
		return "Spock";
	} else if(number == 2){
		return "paper";
	} else if(number == 3){
		return "lizard";
	} else if(number == 4){
		return "scissors";
	}
}
console.log(number_to_name(4))
function name_to_number(name){
	if(name == "rock"){
		return 0;
	} else if(name == "Spock"){
		return 1;
	} else if(name == "paper"){
		return 2;
	} else if(name == "lizard"){
		return 3;
	} else if(name == "scissors"){
		return 4;
	}
}
console.log(name_to_number("paper"))

function getRandom() {
  return Math.floor(Math.random() * 4);
}

function rpsls(player_choice){
	var computer_num = getRandom()%5;
	var computer_name = number_to_name(computer_num);
	var player_num = name_to_number(player_choice);
	console.log("player chooses " + player_choice);
	console.log("computer chooses " + computer_name);
	if (((player_num - computer_num)%5 == 3) || ((player_num - computer_num%5) ==4)){
        console.log("Computer Win's");
    }else if(((player_num - computer_num)%5 ==2) || ((player_num - computer_num)%5==1)){
        console.log("Player Wins");
	}
    else{
        console.log("tie");
	}
}
rpsls("Spock")
rpsls("scissors")
rpsls("rock")
rpsls("lizard")
rpsls("paper")
document.write("hellow World\r")

console.log(5==5);
console.log(5=="5");
console.log(5==="5");
console.log(5 + 5 != 5 + "5");
console.log(5 != "five");
console.log(true != false);
/*alert("Good Morning");
confirm("continue");
prompt("tell me something sexy", "...");
var theNumber = Number(prompt("Pick a number", ".."));
alert("Your Number is the square root of..." + theNumber * theNumber);
if (!isNaN(theNumber)){
	alert("Your Number is the square root of" + theNumber * theNumber);
}
else{
	alert("Why didnt you give me a number")
}
var count = 0
while(count <= 20){
	count +=2;
	console.log(count);

}
do{
	count+=2;
	console.log(count);
}
	while(count < 0)
do{
	alert("help!!");
	var name = prompt("tell me something sexy", "...");
}
while (!name);
console.log(name);
for(var num = 0; num < 12; num = num + 2){
	document.write(num);
}
for(var count = 20;; count++){
	if(count % 7 == 1){
		break;
	}
	document.write(count);
}
switch (prompt("What is the Weather?"," ")){
	case "rainy":
		console.log("Remember and Umbrella");
		break;
	case "sunny":
		console.log("Remember Sunscreen");
		break;
	default:
		console.log("Fuck who cares");
		break;
}
var x = "outside"
function myfunc(){
	var x = "inside f1";
	console.log(x);
}
function myfunc2(){
	x = "inside f2"
	console.log(x)
}
myfunc()
console.log(x)
myfunc2()
console.log(x)
var y = 5;
function myfuncky5(a){
	a = 20;
	return a;
}
console.log(y);
console.log(myfuncky5(y));
console.log(y);

var myList = ["item1", "item2", 4, 5, "myfunc()"]
console.log(myList)
console.log(myList[3])
var z = myfunc()

var myObject = {event1: ["make a list", 1, 3, 4,5,66], event2: "Attribute", script: function myscript(){myfunc()}}
console.log(myObject.event2)
console.log(myObject.event1[2])
myObject.script()

myList2 = ["item1", 3, "item2", 4]
function listfunc(){
	for(i = 0; i< myList2.length; i++){
		alert("this is the list item" + myList2[i])
	}
}
listfunc()
var goleta = {
 "currentVersion": 10.31,
 "folders": [],
 "services": [
  {
   "name": "Locator/2015CenterlinesSBC",
   "type": "GeocodeServer"
  },
  {
   "name": "Locator/DBO_Parcels_2016_APN",
   "type": "GeocodeServer"
  },
  {
   "name": "Locator/DBO_Parcels_2016_Owner",
   "type": "GeocodeServer"
  },
  {
   "name": "Locator/SDE_CompositeAddLocat",
   "type": "GeocodeServer"
  },
  {
   "name": "Locator/SDE_Hydrant_DataEase_ID",
   "type": "GeocodeServer"
  },
  {
   "name": "Locator/SDE_Map_Grid_NAME",
   "type": "GeocodeServer"
  },
  {
   "name": "Locator/SDE_Parcels_2015_APN",
   "type": "GeocodeServer"
  },
  {
   "name": "Locator/SDE_Parcels_2015_Owner",
   "type": "GeocodeServer"
  },
  {
   "name": "Locator/SDE_Project_WO2",
   "type": "GeocodeServer"
  },
  {
   "name": "Locator/SDE_ServiceConnection_PropNum",
   "type": "GeocodeServer"
  },
  {
   "name": "Locator/SDE_ServiceConnection_SerNUM",
   "type": "GeocodeServer"
  },
  {
   "name": "Locator/SDE_ServiceConnection_ServAdd",
   "type": "GeocodeServer"
  },
  {
   "name": "Locator/SDE_Valve_DataEASE_ID",
   "type": "GeocodeServer"
  }
 ]
}
console.log(goleta.currentVersion)*/
a='#'

for (var i = 0; i <= 7; i++){
	console.log(a)
	a = a + '#'
}
for (var i = 0; i<= 100; i++){
	if ( i%3 == 0 && i%5 == 0){
		console.log("BuzzFuzz")
	}
	else if (i%5 == 0){
		console.log("fuzz")
	}
	else if(i%3==0){
		console.log("Buzz")
	}
	else{
		console.log(i)
	}
}
b = '# # # #'
for (var i = 0; i<=8; i++){
	if (i%2!=0){
		console.log(b)
	}
	else if(i%2 ==0){
		console.log(" " + b)
	}
}

function min(x, z){
	if(x > z){
		console.log(z)
	}
	else{
		console.log(x)
	}
}
console.log(Math.min(2, 100))
min(50, 39)
function max(x, z){
	if(x > z){
		console.log(x)
	}
	else{
		console.log(z)
	}
}
max(100, 345)
var a = "This is a test"
function CountB(a, c){
	var b = 0
	for (var i = 0; i < a.length; i++){
		if(a.charAt(i) == c){
			b = b + 1
		}
}
return b
}
console.log(CountB(a, "s"))
console.log(a.charAt(2))
function mysum(y, z, x){
	var myarray = []
	var total = 0;
	for (var i = y; i<= z; i = i + x ){
		myarray.push(i)
		total = total + i
}
	return total
}
console.log(mysum(3, 100, 2))
var myjournal = {};
myjournal[event] = "shower"
console.log(myjournal[event])
myjournal[event] = ["shower", "breakfast", "work", "lunch", "computer"]
console.log(myjournal[event])
delete myjournal[event]
console.log(myjournal[event])
var myself = {}
myself["age"] = 34
myself["sex"] = "M"
myself["weight"] = 178
myself["height"] = 70
myself["haircolor"] = "Black"

console.log(myself.age)
myself.age = 55
function aging(){
	if (myself.age > 40){
		myself.haircolor = "White"
		return myself.haircolor
	}
}
console.log(aging())

var myarray2 = ["A", "B", "C", "D"]


function newfunc(){
	var myarray3 =[]
	for(var i = myarray2.length -1; i>= 0; i--){
		myarray3.push(myarray2[i])
	}
	console.log(myarray3)
}
newfunc()
var t = 1
console.log(t == 1)
var array = [1, 2, 3]
for (var i = 0; i < array.length; i++){
	var current = array[i];
	console.log(current);
}

//This uses the forEach Method must have a function that handles the value and index of the array.!!!!!!
var arry = [1, 2, 3, 4]
function arryfunc(value, index){
	console.log("value:" + value + "index:" + index);
}
arry.forEach(arryfunc)

//This is the filter method. The filter() method creates a new array with all elements that pass the test implemented by the provided function.
function filtermeth(value){
	if(value.length > 5){ return value}
}
var filtlist = ["word", "thisisalong", "short", "thisisisgoingtobelerealylong"]
console.log(filtlist.filter(filtermeth))
var myArray = ["a", 1, 4, [5, 43, 6]]
myArray.pop()
console.log(myArray)
myArray.push(arry[2])
console.log(myArray)
document.write(myself.age)
myself.haircolor = "Yellow"
myself.AgeMe = aging()
myself.AgeMe
document.write(myself.haircolor)
function young(){
	if(myself.age > 35){
	myself.haircolor = "Black"
	}
}
myself.young = young()
myself.young
document.write(myself.haircolor)
myself.bike = function(){
	console.log("James Rode is bike today")
}

//Shift is used to remove a value at the beginning of the array pop is to remove value at end.
myArray.shift()
console.log(myArray)
myArray.unshift("a")
console.log(myArray)
myself.bike()

//Messing with objects Create a person object.  This is one way to constructing a object through a constructor function.

function person (age, height, weight, hobby, haircolor, job, dad, mom,siblings, ancestors){
	this.age = age
	this.height = height
	this.weight = weight
	this.hobby = hobby
	this.havefun = function(){
		console.log("My " + this.hobby + " is great")
	}
	this.haircolor = haircolor
	this.job = job
	this.dad = dad
	this.mom = mom
	this.siblings = siblings
	this.ancestors = ancestors
}

var james = new person()
james.age = 34
james.height = 70
james.weight = 178
james.hobby = "biking"
james.haircolor = "Black"
james.job = "Gis Specialist"
james.dad = "Jim"
james.mom = "Rose"
james.havefun()
function speak(line) {
  console.log("The " + this.type + " rabbit says '" +
              line + "'");
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
                  "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
//   late it's getting!'
fatRabbit.speak("I could sure use a carrot right now.");
// → The fat rabbit says 'I could sure use a carrot
//   right now.'
speak.apply(fatRabbit, ["Burp!"]);
// → The fat rabbit says 'Burp!'
speak.call({type: "old"}, "Oh my.");
// → The old rabbit says 'Oh my.'
speak.apply(fatRabbit, ["Burp!"]);
// → The fat rabbit says 'Burp!'
speak.call({type: "old"}, "Oh my.");
// → The old rabbit says 'Oh my.'
james.siblings = ["Candy", "Nancy"]
console.log(james.siblings[0])
for(var i = 0; i< james.siblings.length; i++){
	console.log(james.siblings[i])
}
james.ancestors = [{side_of_family:"paternal", relationship:"Grandpa", name: "Jim", dob: 1933}, {side_of_family:"paternal", relationship:"Grandma", name: "Marjorie", dob:1930}, {side_of_family:"maternal", relationship:"Grandpa", name: "Rafael", dob: 1916}, {side_of_family:"maternal", relationship:"Grandma", name: "Elda", dob: 1918}]
var ancestry = james.ancestors
console.log(ancestry.length)
console.log(ancestry)
for (var i = 0; i<ancestry.length; i++){
	console.log(ancestry[i])
}
console.log(ancestry[3].name)
for(var i = 0; i<ancestry.length; i++){
	console.log(ancestry[i].name)
	if(ancestry[i].name == "Jim"){
	ancestry[i].death = 2011
	ancestry[i].age = ancestry[i].death - ancestry[i].dob
	console.log(ancestry[i].dob)
	console.log("Age of Death " + ancestry[i].age)
	console.log(ancestry[i].relationship)
}
}