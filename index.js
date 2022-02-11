

let num1=document.getElementById('num1');
let num2=document.getElementById('num2');
let num3=document.getElementById('num3');
let num4=document.getElementById('num4');
let num5=document.getElementById('num5');
let num6=document.getElementById('num6');
let num7=document.getElementById('num7');
let num8=document.getElementById('num8');
let num9=document.getElementById('num9');
let num0=document.getElementById('num0');

let mas=document.getElementById('mas');
let entre=document.getElementById('entre');
let menos=document.getElementById('menos');
let por=document.getElementById('por');
let punto=document.getElementById('punto');
let igual=document.getElementById('igual');
let p1=document.getElementById('p1');
let p2=document.getElementById('p2');
let potencia=document.getElementById('potencia');
let cls=document.getElementById('cls');
let pantalla=document.getElementById('pantalla');
let valor='';
let audioEtiqueta = document.querySelector("audio")
function concatenar(num){
  pantalla.innerHTML="";
  
 pantalla.innerHTML = valor=valor +num;
 soundclick();
}
function soundclick(){
  audioEtiqueta.setAttribute("src", "./click.mp3")
  audioEtiqueta.play()
}

    num1.addEventListener('click', e => {
  concatenar('1');

  });

    num2.addEventListener('click', e => {
  concatenar('2');

  });
  
    num3.addEventListener('click', e => {
  concatenar('3');

  });
   num4.addEventListener('click', e => {
  concatenar('4');

  });
   num5.addEventListener('click', e => {
  concatenar('5');
 
  });
   num6.addEventListener('click', e => {
  concatenar('6');
  });
   num7.addEventListener('click', e => {
  concatenar('7');
  });
     num8.addEventListener('click', e => {
  concatenar('8');
  });
   num9.addEventListener('click', e => {
  concatenar('9');
  });
    num0.addEventListener('click', e => {
  concatenar('0');
  });

   mas.addEventListener('click', e => {
    concatenar('+');
  });
    menos.addEventListener('click', e => {
   concatenar('-');
  });
    por.addEventListener('click', e => {
  concatenar('*');
  });
    entre.addEventListener('click', e => {
   concatenar('/');
  });
   p1.addEventListener('click', e => {
   concatenar('(');
  });
   p2.addEventListener('click', e => {
   concatenar(')');
  });
   potencia.addEventListener('click', e => {
   concatenar('**');
  });
     cls.addEventListener('click', e => {
      soundclick();
   pantalla.innerHTML="";
   valor="";
  });
   igual.addEventListener('click', e => {
    soundclick();
let resultado= eval(valor);
pantalla.innerHTML =resultado;
  });
  
