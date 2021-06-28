document.getElementById("enviar").addEventListener("click",validaformulario)

function validaformulario (){

   if (document.getElementById("nome").value != "" &&           document.getElementById("email").value != "") { 
    alert ("Prontinho! vocês receberá por email.")}

   else{
    alert (" Por favor, preencha os campos nome e email !")}

}


