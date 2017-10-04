$(document).ready(function(){
	debugger;
	$('#bConsulta1').click(function(){
		debugger;
		var mayorCantidadP = 0;
		for(var i=0, l=localStorage.length; i < l; i++) {
			debugger;
			key = localStorage.key(i);
			personaGuardada = localStorage.getItem(key);
            personaGuardada = JSON.parse(personaGuardada);
            debugger;
            if(personaGuardada.productosAdquiridos > mayorCantidadP){
            	debugger;
            	mayorCantidadP = personaGuardada.productosAdquiridos;
            	alert(personaGuardada.nombre + ' es la persona que ha adquirido más productos:' + mayorCantidadP);            	
            	break;
            }
            else{
            	//alert('Lo sentimos!');

            }
		}

	});

	$('#bConsulta2').click(function(){
		debugger;
		var menorCantidadP = 0;
		for(var i=0, l=localStorage.length; i < l; i++) {
			debugger;
			key = localStorage.key(i);
			personaGuardada = localStorage.getItem(key);
            personaGuardada = JSON.parse(personaGuardada);
            debugger;
            if(personaGuardada.productosAdquiridos < menorCantidadP){
            	debugger;
            	menorCantidadP = personaGuardada.productosAdquiridos;
            	alert('La persona ' + personaGuardada.nombre + 'es la que ha adquirido menos productos:' + menorCantidadP);            	
            	break;
            }
            else{

            }
		}


	});

	$('#bConsulta3').click(function(){
		debugger;
		var mayorCantidadD = 0;
		for(var i=0, l=localStorage.length; i < l; i++) {
			debugger;
			key = localStorage.key(i);
			personaGuardada = localStorage.getItem(key);
            personaGuardada = JSON.parse(personaGuardada);
            debugger;
            if(personaGuardada.dineroInvertido > mayorCantidadD){
            	debugger;
            	mayorCantidadD = personaGuardada.dineroInvertido;
            	alert(personaGuardada.nombre + ' es la persona que ha invertido la mayor cantidad de dinero:' + mayorCantidadD);            	
            	break;
            }
            else{

            }
		}

	});

	$('#bConsulta4').click(function(){
		debugger;
		var menorCantidadD = 0;
		for(var i=0, l=localStorage.length; i < l; i++) {
			debugger;
			key = localStorage.key(i);
			personaGuardada = localStorage.getItem(key);
            personaGuardada = JSON.parse(personaGuardada);
            debugger;
            if(personaGuardada.dineroInvertido < menorCantidadD){
            	debugger;
            	menorCantidadD = personaGuardada.dineroInvertido;
            	alert(personaGuardada.nombre + ' es la persona que ha invertido la menor cantidad de dinero:' + menorCantidadD);            	
            	break;
            }
            else{

            }
		}

	});

});