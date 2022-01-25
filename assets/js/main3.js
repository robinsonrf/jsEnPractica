//variables para controlar los botones de sumar y restar posteriormente
let sumar = document.getElementById('btn-sumar');
let restar = document.getElementById('btn-restar');


//SUMAR
sumar.addEventListener('click', function () {
    let n1 = document.getElementById('valor1').value;
    let n2 = document.getElementById('valor2').value;
    let resultado = parseInt(n1) + parseInt(n2);
    document.getElementsByClassName("resultado")[0].innerHTML = resultado;
})


//RESTAR
restar.addEventListener('click', function () {
    let n1 = document.getElementById('valor1').value;
    let n2 = document.getElementById('valor2').value;
    let resultado = parseInt(n1) - parseInt(n2);
    if (resultado < 0){
        resultado = 0;
        document.getElementsByClassName("resultado")[0].innerHTML = resultado;
    }
    else{
    document.getElementsByClassName("resultado")[0].innerHTML = resultado;
    }
})