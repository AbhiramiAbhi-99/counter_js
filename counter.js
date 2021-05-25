let add = document.getElementById('increment');
let sub = document.getElementById('decrement');

let int = document.getElementById('number');
let integer = 0;

function inc(){
    integer ++;
    int.innerHTML=integer;
}

function dec(){
    integer --;
    int.innerHTML=integer;
}

function clearbtn(){
 integer=0;
 document.getElementById("number").innerText=integer;
}
   

