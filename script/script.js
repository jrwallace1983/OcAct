var x = 1;
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
console.log(name);*/
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
console.log(goleta.currentVersion)
