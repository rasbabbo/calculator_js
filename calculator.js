window.onload = function() {

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");

var enter = document.getElementById("enter");
var clear = document.getElementById("clear");

var div = document.getElementById("div");
var add = document.getElementById("add");
var sub = document.getElementById("sub");
var multi = document.getElementById("multi");

var display = document.getElementById("result_display");

var operator = document.getElementById("operator_display");
var calcDisplay = "";
var array1 = []





one.onclick = function(event) {
	calcDisplay += one.innerHTML;
	display.innerHTML += one.innerHTML;
}

two.onclick = function(event) {
	calcDisplay += two.innerHTML;
	display.innerHTML += two.innerHTML;
}
three.onclick = function(event) {
	calcDisplay += three.innerHTML;
	display.innerHTML += three.innerHTML;
}
four.onclick = function(event) {
	calcDisplay += four.innerHTML;
	display.innerHTML += four.innerHTML;
}
five.onclick = function(event) {
	calcDisplay += five.innerHTML;
	display.innerHTML += five.innerHTML;
}
six.onclick = function(event) {
	calcDisplay += six.innerHTML;
	display.innerHTML += six.innerHTML;
}
seven.onclick = function(event) {
	calcDisplay += seven.innerHTML;
	display.innerHTML += seven.innerHTML;
}
eight.onclick = function(event) {
	calcDisplay += eight.innerHTML;
	display.innerHTML += eight.innerHTML;
}
nine.onclick = function(event) {
	calcDisplay += nine.innerHTML;
	display.innerHTML += nine.innerHTML;
}

zero.onclick = function(event) {
	calcDisplay += zero.innerHTML;
	display.innerHTML += zero.innerHTML;
}

ent.onclick = function(event) {
	operator.innerHTML = "";
	array1.push(parseFloat(calcDisplay));
	diplay.innerHTML = array1[0] + array1[1];
	calcDisplay = "";


}
clear.onclick = function(event) {
	calcDisplay = "";
	display.innerHTML = "" ;
	array1 = "";
}

add.onclick = function(event) {
	operator.innerHTML = add.innerHTML;
	array1.push(parseFloat(calcDisplay));
	display.innerHTML = "";
	console.log(array1);

}
sub.onclick = function(event) {
	operator.innerHTML = sub.innerHTML;
}
multi.onclick = function(event) {
	operator.innerHTML = multi.innerHTML;
}
div.onclick = function(event) {
	operator.innerHTML = div.innerHTML;
}










}