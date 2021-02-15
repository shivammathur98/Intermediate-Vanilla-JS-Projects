document.getElementById('output').style.visibility = 'hidden';
function main(){
	document.getElementById('output').style.visibility = 'visible';
let kilo = document.querySelector('input').value
document.getElementById('gramsoutput').innerHTML = (kilo*1000).toFixed(2)+ " g";
document.getElementById('poundsoutput').innerHTML = (kilo*2.20462262).toFixed(2)+ " lb";
document.getElementById('ozoutput').innerHTML = (kilo*35.2739619).toFixed(2)+ " oz";
document.getElementById('tonneoutput').innerHTML = (kilo*0.001) + " t";
document.getElementById('quintaloutput').innerHTML = (kilo*0.01) + " q";
document.getElementById('caratoutput').innerHTML = (kilo*5000).toFixed(2) + " c";
}