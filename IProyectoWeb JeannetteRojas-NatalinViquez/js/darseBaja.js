var $;
$(document).ready(function(){
	debugger;
	$('#bDarseBaja').click(function(){
		debugger;
		for(var i=0, l=localStorage.length; i < l; i++) {
			debugger;
			personaGuardada = localStorage.getItem(key);
	        personaGuardada = JSON.parse(personaGuardada);
	        key = localStorage.key(i);
	        var actual = sessionStorage.getItem('id');
	        if(key == actual){
	        	debugger;
	        	personaGuardada.estado = false;
	        	debugger;
	        }
	        localStorage.setItem(estado, JSON.stringify(false));
    	}

	});
	$('#bDarseAlta').click(function(){
		for(var i=0, l=localStorage.length; i < l; i++) {
			debugger;
			var idIniciarVar = document.getElementById("idInicio").value;
	        var contraseñaIniciarVar = document.getElementById("contraseñaInicio").value;
	        debugger;
	        key = localStorage.key(i);
	        if(key == idIniciarVar){
	        	debugger;
	        	personaGuardada = localStorage.getItem(key);
            	personaGuardada = JSON.parse(personaGuardada);
            	personaGuardada.estado = true;
            	debugger;
	        }
		}


	});

});