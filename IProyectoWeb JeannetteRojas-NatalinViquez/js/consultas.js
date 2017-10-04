$(document).ready(function(){
	debugger;
	$('#bConsulta1').click(function(){
		debugger;
		var mayorCantidad = 0;
		for(var i=0, l=localStorage.length; i < l; i++) {
			debugger;
			key = localStorage.key(i);
			personaGuardada = localStorage.getItem(key);
            personaGuardada = JSON.parse(personaGuardada);
            debugger;
            if(personaGuardada.productosAdquiridos > mayorCantidad){
            	debugger;
            	mayorCantidad = personaGuardada.productosAdquiridos;
            	alert('La persona ' + personaGuardada.nombre + 'es la que ha adquirido más productos:' + mayorCantidad);            	
            	break;
            }
            else{
            	alert('Prueba La persona ' + personaGuardada.nombre + ' es la que ha adquirido más productos:' + mayorCantidad);            	

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