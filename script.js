function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function clean(){
    document.getElementById('resultado').innerHTML = "";
}
function calcular (){
    var resultado = document.getElementById("resultado").innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}
function raiz() {
    var resultado = document.getElementById('resultado').innerHTML;
    var raiz = Math.sqrt(resultado);
    document.getElementById('resultado').innerHTML = raiz;
}