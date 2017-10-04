$(document).ready(function(){
	$('#bConsulta1').click(function(){
		var mayorCantidad = 0;
		for(var i=0, l=localStorage.length; i < l; i++) {
			key = localStorage.key(i);
			personaGuardada = localStorage.getItem(key);
            personaGuardada = JSON.parse(personaGuardada);
            if(personaGuardada.){
            	
            }

		}


	});

	$('#bConsulta2').click(function(){

	});

	$('#bConsulta3').click(function(){

	});

	$('#bConsulta4').click(function(){

	});

});