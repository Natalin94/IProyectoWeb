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
	
	$('#bDarseAlta').click(function(){
		debugger;
		var usuario = document.getElementById("idInicio").value;  
		for(var i=0, l=localStorage.length; i < l; i++) {
			 key = localStorage.key(i);
			debugger;
			personaGuardada = localStorage.getItem(key);
	        personaGuardada = JSON.parse(personaGuardada);
	        key = localStorage.key(i);
	        if(key == usuario){       
	        	estado= true;	  
				var nuevaPersona =  new persona(personaGuardada.id, personaGuardada.nombre , personaGuardada.apellidos, 
					personaGuardada.edad, personaGuardada.email, personaGuardada.direccion, personaGuardada.telefono,
					personaGuardada.contraseña, personaGuardada.numeroTarjeta, personaGuardada.codigoSeguridad, personaGuardada.fechaVencimiento, 
					personaGuardada.tipo, personaGuardada.productosAdquiridos, personaGuardada.dineroInvertido, estado);
		        localStorage.setItem(usuario, JSON.stringify(nuevaPersona));
		        alert("Membresia Activada. Ahora inicia sesion con tus datos");
	        }
	  	}
	});
});