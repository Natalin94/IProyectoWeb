var persona = function(id, nombre, apellidos, edad, email, direccion, telefono, contraseña, numeroTarjeta, codigoSeguridad, fechaVencimiento, tipo, productosAdquiridos,dineroInvertido,estado ){
	this.id = id;
    this.nombre= nombre;
    this.apellidos= apellidos;
    this.edad= edad;
    this.email= email;
    this.direccion= direccion;
    this.telefono= telefono;
    this.contraseña = contraseña;
    this.numeroTarjeta= numeroTarjeta;
    this.codigoSeguridad= codigoSeguridad;
    this.fechaVencimiento= fechaVencimiento;
    this.tipo = tipo;
    this.productosAdquiridos=productosAdquiridos;
    this.dineroInvertido= dineroInvertido;
    this.estado= estado;
    }


$(document).ready(function(){
	debugger;
	$('#bDarseBaja').click(function(){
		debugger;
		usuario= sessionStorage.getItem("idUsuario");
		for(var i=0, l=localStorage.length; i < l; i++) {
			debugger;
			personaGuardada = localStorage.getItem(key);
	        personaGuardada = JSON.parse(personaGuardada);
	        key = localStorage.key(i);
	        if(key == usuario){
	        	debugger;
	        	personaGuardada.estado = false;
	        	debugger;
	    		debugger;
				var idVar = sessionStorage.getItem("idUsuario");       
		        var nom = document.getElementById("nombre").value;
		        var apel = document.getElementById("apellidos").value;
		        var edadVar = document.getElementById("edad").value;
		        var emailVar = document.getElementById("email").value;
		        var direccionVar= document.getElementById("direccion").value;
		        var telefonoVar = document.getElementById("telefono").value;
		        var contraseñaVar = document.getElementById("contraseña").value;
		        var numTarjetaVar = document.getElementById("numTarjeta").value;
		        var codSeguridadVar = document.getElementById("codSeguridad").value;
		        var fechaVencimientoVar = document.getElementById("vencimiento").value;

				var nuevaPersona =  new persona(idVar, nom , apel, edadVar, emailVar,direccionVar,telefonoVar,contraseñaVar, numTarjetaVar, codSeguridadVar,
				     	fechaVencimientoVar, false, cantProductosAdquiridos, cantDineroInvertido, estado;
		        localStorage.setItem(idVar, JSON.stringify(nuevaPersona));
		        alert('Estas de baja en el sistema, debes activar la membresía para poder comprar');

	        }
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
            	var idVar = sessionStorage.getItem("idUsuario");       
		        var nom = document.getElementById("nombre").value;
		        var apel = document.getElementById("apellidos").value;
		        var edadVar = document.getElementById("edad").value;
		        var emailVar = document.getElementById("email").value;
		        var direccionVar= document.getElementById("direccion").value;
		        var telefonoVar = document.getElementById("telefono").value;
		        var contraseñaVar = document.getElementById("contraseña").value;
		        var numTarjetaVar = document.getElementById("numTarjeta").value;
		        var codSeguridadVar = document.getElementById("codSeguridad").value;
		        var fechaVencimientoVar = document.getElementById("vencimiento").value;

				var nuevaPersona =  new persona(idVar, nom , apel, edadVar, emailVar,direccionVar,telefonoVar,contraseñaVar, numTarjetaVar, codSeguridadVar,
				     	fechaVencimientoVar, false, cantProductosAdquiridos, cantDineroInvertido, estado;
		        localStorage.setItem(idVar, JSON.stringify(nuevaPersona));
	        }
		}


	});
});