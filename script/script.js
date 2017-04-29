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