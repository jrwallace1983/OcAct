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
