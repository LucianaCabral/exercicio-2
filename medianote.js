
function executarOperacao(soma){
         var n1 = +document.getElementById("num1").value;
         var n2 = +document.getElementById("num2").value;
		 var n3 = +document.getElementById("num3").value;
         var resultadoSoma;

         resultadoSoma = (n1+n2+n3)/3;
     

     var resultado = document.getElementById("resultado");
         resultado.value = resultadoSoma;
     
     }
     
