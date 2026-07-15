const letter=document.getElementById("letter");

if(letter){

letter.style.opacity="0";

window.onload=()=>{

setTimeout(()=>{

letter.style.transition="2s";

letter.style.opacity="1";

},700);

}

}
