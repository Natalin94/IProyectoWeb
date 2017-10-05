
			arregloZ = localStorage.getItem("productos");
			arregloZ = JSON.parse(arregloZ);
			
			
			$(document).ready(function(){ 
			debugger; 

			// MOSTRAR LOS ZAPATOS SEGUN LAS CATEGORIAS
		        $(document).ready(function(){   
		        var URLactual = window.location.href;
		        	var valor= URLactual.split('?')
		        	valorReal= valor[1];
		        var parrafoEnviar;
		        	
		       	if (valorReal == "Todos"){
		       		for(var i=0, l=arregloZ.length; i < l; i++) {
		       			parrafoEnviar= "Nombre: "+ arregloZ[i].nombreP + " Precio: "+ arregloZ[i].precio + " Cantidad Disponible: "+ arregloZ[i].cantidad;	        						
						addElement(arregloZ[i].imagen, arregloZ[i].idP, parrafoEnviar);						
		        	} 
		       	}

		       	else{
		       		for(var i=0, l=arregloZ.length; i < l; i++) {		        	
						if (arregloZ[i].sexo == valorReal){
							parrafoEnviar= "Nombre: "+ arregloZ[i].nombreP + " Precio: "+ arregloZ[i].precio + " Cantidad Disponible: "+ arregloZ[i].cantidad;
							addElement(arregloZ[i].imagen, arregloZ[i].idP, parrafoEnviar);
						}				
		        	} 
		       	}
		        
		       	// ADD THE PRODUCTS TO THE CATALOG (VISTA MODE)
		        function addElement (url, elemento, parr) { 
				  // crea un nuevo div 
				  // y añade contenido 
				  var newDiv = document.createElement("div"); 
				  var x = document.createElement("IMG");
    			  //x.setAttribute("src", "images/zap2.jpg");
    			  x.setAttribute("src", url);
    			  x.setAttribute("width", "250");
    			  x.setAttribute("height", "270");
    			  debugger;
    			 
    			  var parrafo = document.createElement('p');
				    var texto = document.createTextNode(parr);
				    parrafo.appendChild(texto);
    			  
    			  
    			  var butListaDeseos = document.createElement("INPUT");
    			  var butCarrito = document.createElement("INPUT");

    			  butListaDeseos.setAttribute("type", "button");
    			  butListaDeseos.setAttribute("value", "Add listaDeseos");
    			  butListaDeseos.setAttribute("class", "listaDeseos");
    			  butListaDeseos.setAttribute("id",elemento);


    			  butCarrito.setAttribute("type", "button");    			 
    			  butCarrito.setAttribute("value", "Add Carrito");
    			  butCarrito.setAttribute("class", "listaCarrito");
    			  butCarrito.setAttribute("id",elemento);


				  // adds the created element and its contents to the DOM 
				  var currentDiv = document.getElementById("div1"); 
				  document.getElementById("myHeader").appendChild(newDiv);
				  document.getElementById("myHeader").appendChild(x);
				  document.getElementById("myHeader").appendChild(parrafo);
				  document.getElementById("myHeader").appendChild(butListaDeseos);
				  document.getElementById("myHeader").appendChild(butCarrito);
				  //document.body.insertBefore(newDiv, currentDiv); 
				}   


				function invocarAlAgregarListaDeseos(idBoton) {
					lisDeseos = localStorage.getItem("listaDeseos")
					//alert("entra al invocar", idBoton);
					if (lisDeseos == null){
						array=[];
						localStorage.setItem("listaDeseos",array);
						agregarListaDeseos(true, idBoton);
					}
					else{
						
						agregarListaDeseos(false, idBoton);
					}	
			    } 


			    function agregarListaDeseos(indicador, idBoton){
			    	if (indicador == true){
						arregloDeseos = localStorage.getItem("listaDeseos")
					}

					if (indicador == false){
						arregloDeseos = localStorage.getItem("listaDeseos")
						arregloDeseos = JSON.parse(arregloDeseos);
					}
				
					array=[]
					for(var i=0, l=arregloDeseos.length; i < l; i++) {
						//document.write(arregloDeseos[i])
						array.push(arregloDeseos[i]);						
		        	} 
		        	debugger;
		        	var persona = {
						id : sessionStorage.username,
						idZap : idBoton
					};	
		        	prueba= JSON.stringify(persona);
					array.push(persona);
					localStorage.setItem("listaDeseos",JSON.stringify(array));
					alert("Producto agregado satisfactoriamente!!");
			    }

				
				//ADD THE PRODUCT TO THE WISH LIST
				$(".listaDeseos").click(function(){
					boton= this.id;
					invocarAlAgregarListaDeseos(boton);			
				});


				// ADD THE PRODUCT
				$(".listaCarrito").click(function(){
					arregloCarro = localStorage.getItem("listaCarro")
					botonId= this.id;
					debugger;
					if (arregloCarro == null){
						array=[];
						localStorage.setItem("listaCarro",array);
						//alert("Entro al if")
						agregarAlCarro(true, botonId);
					}
					else{
						//alert("Entró al else")
						agregarAlCarro(false, botonId);
					}		
						
				});


				function agregarAlCarro(indicador, idBoton){

					if (indicador == true){
						arregloCarro = localStorage.getItem("listaCarro")
					}

					if (indicador == false){
						arregloCarro = localStorage.getItem("listaCarro")
						arregloCarro = JSON.parse(arregloCarro);
					}
				
					array=[]
					for(var i=0, l=arregloCarro.length; i < l; i++) {
						//document.write(arregloDeseos[i])
						array.push(arregloCarro[i]);						
		        	} 
		        	debugger;

		        	var persona = {
						id : sessionStorage.username,
						idZap : idBoton
					};	
		        	prueba= JSON.stringify(persona);
					array.push(persona);
					localStorage.setItem("listaCarro",JSON.stringify(array));
					alert("Producto agregado satisfactoriamente!!");
				}

		    });		

		 });    
