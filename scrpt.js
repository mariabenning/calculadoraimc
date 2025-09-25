function calcularimc(){
    var peso = document.getElementById("peso").value; 
    console.log(peso)

  var altura= document.getElementById("altura").value; 
    console.log(altura)

   var imc = peso/ (altura*altura)




    if (imc <=18.5){
        document.querySelector('#resultado').innerHTML = "Você é Magro!" 
      

} else if  (imc >=18.5 && imc <= 25)  {

document.querySelector('#resultado').innerHTML = "Você é Normal!" 

} else if  (imc >=25&& imc <=30){

document.querySelector('#resultado').innerHTML = " Você é obeso!" 

} else  {

document.querySelector('#resultado').innerHTML = " O Você é obeso mórbido!" 

} 
}


function limparInput(){
peso.value = ""


}


function focarInput(){
peso.value = ""

}


