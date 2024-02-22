let resultado = Math.floor(Math.random() * 100);
let valor;
do{
    valor = prompt("Digite um número de 0 a 100")

    if (valor < resultado){
        alert("Muito baixo");
    }else if(valor > resultado){
        alert("Muito alto");
    }

}while(valor != resultado)

alert("Valor correto!!");


