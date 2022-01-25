// se asigna variables a los botones para controlarlos posteriormente
let bt1 = document.getElementById('btn-1');
let bt2 = document.getElementById('btn-2');
let bt3 = document.getElementById('btn-3');
let bt4 = document.getElementById('btn-4');
let bt5 = document.getElementById('btn-5');
let bt6 = document.getElementById('btn-6');


//Se cambia el color de fondo del div con el id caja al presionar cada boton
bt1.addEventListener('click', function(){
    document.getElementById("caja").style.backgroundColor = "#e53e3e"

})

bt2.addEventListener('click', function(){
    document.getElementById("caja").style.backgroundColor = "#dd6b20"

})

bt3.addEventListener('click', function(){
    document.getElementById("caja").style.backgroundColor = "#faf089"

})

bt4.addEventListener('click', function(){
    document.getElementById("caja").style.backgroundColor = "#48bb78"

})

bt5.addEventListener('click', function(){
    document.getElementById("caja").style.backgroundColor = "#81e6d9"

})

bt6.addEventListener('click', function(){
    document.getElementById("caja").style.backgroundColor = "#d53f8c"

})