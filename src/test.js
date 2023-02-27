var a = new Array(4294967295);  //OK
var b = new Array(-1); //range error

var num = 2.555555;
document.writeln(num.toExponential(4));  //OK
document.writeln(num.toExponential(-2)); //range error!

num = 2.9999;
document.writeln(num.toFixed(2));   //OK
document.writeln(num.toFixed(105));  //range error!

num = 2.3456;
document.writeln(num.toPrecision(1));   //OK
document.writeln(num.toPrecision(0));  //range error!