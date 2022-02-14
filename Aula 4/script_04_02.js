var a, b, res;
a = prompt("Digite um número");
a = parseFloat(a); //7.5 //Valor de entrada //parseInt
b = prompt("Digite um numero");
b = parseFloat(b); //3.8 // Valor de entrada //parseInt
document.write("soma: " + (a + b)); //10"parseInt" 11.3 "parseFloat"
document.write("<br>subtração: " + (a - b)); //4 "parseInt" 3.7 "parseFloat"
document.write("<br> multiplicação: " + (a * b)); //21 "parseInt" 28.5 "parseFloat"
document.write("<br> divisão: " + (a / b)); //2.33 "parseInt" 1.973684210526316 "parseFloat"
document.write("<br> resto da divisão: " + (a % b)); //1 "parseInt" 3.2 "parseFloat"
document.write("<br> exponenciação: " + (a ** b)); //343 "parseInt" 2114.6222663523345 "parseFloat"

res = a / b;
res = parseInt(res); //formatei a saida
document.write("<br> res:" + res); // 5 * 5 // 25
/*
todo o numero impar divido por dois resto divisão = 0
todo numero par divido por dois resto da divisão = 1
*/