
// create class persona
var persona = function(id, nombre, apellidos, edad, email, direccion, telefono, contraseña, numeroTarjeta, codigoSeguridad, fechaVencimiento, tipo, productosAdquiridos, dineroInvertido, estado){
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
			      this.productosAdquiridos= productosAdquiridos;
			      this.dineroInvertido= dineroInvertido;
			      this.estado= estado;
			  }
// create class producto
        var producto = function(idP, nombreP, descripcion, precio, cantidad,categoria,imagen) {
            // body...
            this.idP = idP;
            this.nombreP = nombreP;
            this.descripcion = descripcion;
            this.precio = precio;
            this.cantidad = cantidad;
            this.categoria = categoria;
            this.imagen = imagen;
        }
			

			arregloZ = localStorage.getItem("listaCarro");
			arregloZ = JSON.parse(arregloZ);

			arregloProductos = localStorage.getItem("productos");
			arregloProductos = JSON.parse(arregloProductos);		
			
			$(document).ready(function(){ 
			debugger; 
		        $(document).ready(function(){   
		        
	       		for(var i=0, l=arregloZ.length; i < l; i++) {
	       			debugger;

	       			if(arregloZ[i].id == sessionStorage.getItem("username")){
	       				
	       				for (var j=0, n=arregloProductos.length; j < n; j++){
	       					if(arregloProductos[j].idP == arregloZ[i].idZap){
	       						addElement(arregloProductos[j].imagen, arregloProductos[j].idP)
		       					debugger;	
	       					}		
	       				}
	       			}	        								
	        	} 
		       	
	        	// ADD ELEMENTS HTML
		        function addElement (url, elemento) { 
				  // crea un nuevo div 
				  // y añade contenido 
				  var newDiv = document.createElement("div"); 
				  var x = document.createElement("IMG");
    			  //x.setAttribute("src", "images/zap2.jpg");
    			  x.setAttribute("src", url);
    			  x.setAttribute("width", "250");
    			  x.setAttribute("height", "270");
    			  
    			  var butListaDeseos = document.createElement("INPUT");
    			  var butCarrito = document.createElement("INPUT");

    			  butListaDeseos.setAttribute("type", "button");
    			  butListaDeseos.setAttribute("value", "Eliminar");
    			  butListaDeseos.setAttribute("class", "eliminarElemento");
    			  butListaDeseos.setAttribute("id",elemento);


    			  butCarrito.setAttribute("type", "button");    			 
    			  butCarrito.setAttribute("value", "Comprar");
    			  butCarrito.setAttribute("class", "comprarB");
    			  butCarrito.setAttribute("id",elemento);


				  // añade el elemento creado y su contenido al DOM 
				  var currentDiv = document.getElementById("div1"); 
				  document.getElementById("myHeader").appendChild(newDiv);
				  document.getElementById("myHeader").appendChild(x);
				  document.getElementById("myHeader").appendChild(butListaDeseos);
				  document.getElementById("myHeader").appendChild(butCarrito);
				  //document.body.insertBefore(newDiv, currentDiv); 
				}   

				// LINK WITH THE BUTTON TO BUY A PRODUCT
				$(".comprarB").click(function(){
					botID= this.id;
					myFunction(botID);
						
				});
				// FUNCTION TO BUY PRODUCTS
				function myFunction(idBoton) {
				    //var txt;
				    var person = prompt("Indique el codigo de seguridad de su tarjeta:", "");
				    
				    if (person != null || person != "") {
				       // txt = "User cancelled the prompt.";
				       var codigoSeguridadVar= person;

				    } 
				    var fechaVencimiento = prompt("Fecha de vencimiento", "mm/aa");
				     if (fechaVencimiento != null || fechaVencimiento != "") {
				       // txt = "User cancelled the prompt.";
				       var fechaDeVencimiento= fechaVencimiento;

				    } 

				    for (var j=0, n=localStorage.length; j < n; j++){
				    	debugger;
				    	
				    	var temporalPrecio= 0;
				    	
				    	key = localStorage.key(j);
				    	user= sessionStorage.getItem("idUsuario");
	       				if(key == sessionStorage.getItem("idUsuario")){
	       						debugger;
	       						personaGuardada = localStorage.getItem(key);
            					personaGuardada = JSON.parse(personaGuardada);
	       						if(personaGuardada.codigoSeguridad == codigoSeguridadVar && personaGuardada.fechaVencimiento == fechaDeVencimiento){
	       							//alert("Perfecto");

	       							for (var j=0, n=arregloProductos.length; j < n; j++){
				       					if(arregloProductos[j].idP == idBoton){

				       						if (arregloProductos[i].cantidad == 0){
						        				alert("Lo siento, este producto ya no se encuentra disponible");
						        				break;
						        			}
						        			else{
						        				temporalPrecio= arregloProductos[j].precio;
				       							nuevaCantidad= arregloProductos[j].cantidad -1;
				       							var productoActualizado= new producto(arregloProductos[j].idP, arregloProductos[j].nombreP, 
				       								arregloProductos[j].descripcion, arregloProductos[j].precio, nuevaCantidad,
				       								arregloProductos[j].categoria, arregloProductos[j].imagen);

				       							arregloProductos[j]= productoActualizado;
				       							localStorage.setItem("productos", JSON.stringify(arregloProductos));

				       							nuevoPAdquiridos= personaGuardada.productosAdquiridos+=1;
				       							nuevoCantDinero = personaGuardada.dineroInvertido += temporalPrecio;

				       							var nuevaPersona =  new persona(personaGuardada.id, personaGuardada.nombre ,
				       							 personaGuardada.apellidos, personaGuardada.edad, personaGuardada.email, personaGuardada.direccion, 
				       							 personaGuardada.telefono, personaGuardada.contraseña, personaGuardada.numTarjeta, personaGuardada.codigoSeguridad,personaGuardada.fechaVencimiento, false, nuevoPAdquiridos, nuevoCantDinero, true);
				       							localStorage.setItem(user, JSON.stringify(nuevaPersona));
				       							invocarAlHistorial(idBoton);
									        			}
				       							
				       					}		
				       				}

	       						}
	       					}		
	       				}		       		   
				}

				// PREVIOUS FUNCTION TO ADD TO THE HISTORY
				// FROM HERE IT IS CALLED TO ADD TO THE HISTORY
				function invocarAlHistorial(idBoton) {
					historial = localStorage.getItem("listaHistorial")
					//alert("entra al invocar", idBoton);
					if (historial == null){
						array=[];
						localStorage.setItem("listaHistorial",array);
						agregarAlHistorial(true, idBoton);
					}
					else{
						
						agregarAlHistorial(false, idBoton);
					}	
			    } 	

			    //TO ADD TO CUSTOMER HISTORY
			    function agregarAlHistorial(indicador, idBoton) {
					if (indicador == true){
						arregloHistorial = localStorage.getItem("listaHistorial")
					}

					if (indicador == false){
						arregloHistorial = localStorage.getItem("listaHistorial")
						arregloHistorial = JSON.parse(arregloHistorial);
					}
				
					array=[]
					for(var i=0, l=arregloHistorial.length; i < l; i++) {						
						array.push(arregloHistorial[i]);						
		        	} 
		        	debugger;
		        	var historial = {
						id : sessionStorage.username,
						idZap : idBoton
					};	
		        	prueba= JSON.stringify(historial);
					array.push(historial);
					localStorage.setItem("listaHistorial",JSON.stringify(array));
					alert("Has comprado el producto.");
					funcionEliminar(idBoton);
			    } 	

				// FUNCTION TO DELETE A PRODUCT FROM THE CART
				$(".eliminarElemento").click(function(){
					botID= this.id;	
					funcionEliminar(botID);
									
				});


				// DELETE A PRODUCT FROM MY CART
				function funcionEliminar(botID){
					lisCarro = localStorage.getItem("listaCarro")
					lisCarro= JSON.parse(lisCarro);
					array=[];		

					for (var j=0, n=lisCarro.length; j < n; j++){
	       					if(lisCarro[j].idZap == botID && lisCarro[j].id == sessionStorage.getItem("username") ){
	       						lisCarro.splice(j, 1);	
								localStorage.setItem("listaCarro",JSON.stringify(lisCarro));
								window.location= "carrito.html";
	       						break;
	       				}		
	       			}				
				}

		    });		

		 });    
