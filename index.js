/*Projeto que mostra a soma das médias de alguns alunos de 3 turmas diferentes*/

var contador = 1;
while(contador<=3){
  console.log(`Turma nº${contador}`);
  
do {
	
var inicio = prompt("Deseja Iniciar?");


switch(inicio){
 case  "sim":
 console.log("BEM VINDO!");
 break;
 case  "não":
 console.log("Ok nos vemos mais tarde!");
  break;
  default:
 alert("Por favor digite Sim ou Não!");
 break;
}}while (inicio != "sim" && inicio != "não" );


console.log("**********************************")



var mediadaturma = 0;
var aprovados = 0;
var reprovaram = 0;
var notamaxima = 0;

for(var i=01; i <=3; i++){
var media01 = Number (prompt("Digite a Média do 1º Bimestre"));
var media02 = Number (prompt("Digite a Média do 2º Bimestre"));
var media03 = Number (prompt("Digite a Média do 3º Bimestre"));
var media04 = Number (prompt("Digite a Média do 4º Bimestre"));


var mediafinal =( media01 + media02 + media03 + media04) / 4;
console.log('A MÉDIA FINAL DO ALUNO É:', mediafinal);

if(mediafinal >= 7 && mediafinal < 10){
  aprovados = aprovados + 1;
  console.log("O aluno " +i+ ", foi APROVADO!");
  console.log("==================================")}

else if(mediafinal == 10){
  notamaxima = notamaxima + 1;
 console.log("O aluno " +i+ ", foi APROVADO COM DESTINÇÃO");
 console.log("================================");
}else {
  reprovaram = reprovaram + 1;
  console.log('O aluno ' +i+ ', foi REPROVADO!');
  console.log('=================================')
}  
}




mediadaturma = mediafinal/2;


console.log("A média da turma é:"  + mediadaturma);
console.log("O número de alunos reprovados são:" + reprovaram);
console.log("O número de alunos aprovados são:" +  aprovados);
console.log("O numero de alunos aprovados com nota máxima são:" +  notamaxima);

console.log("###########################################")

  contador++;
  
};






















/*var contador = 0;
var somaDasNotas = 0;
var totalAlunos = alunos.length;

do {
  somaDasNotas += alunos[contador].nota;

  contador++;
} while (contador < totalAlunos);

var media = somaDasNotas / totalAlunos;

console.log(media);*/
