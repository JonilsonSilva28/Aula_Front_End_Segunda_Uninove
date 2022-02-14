var num, msg;
num = prompt("Digite um número");
num = parseInt(num);
msg = num % 2 == 0 ? "PAR" : "IMPAR";
document.write(num + "-" + msg);