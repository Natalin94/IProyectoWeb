




			arregloZ = localStorage.getItem("listaDeseos");
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
    			  butListaDeseos.setAttribute("class", "eliminarB");
    			  butListaDeseos.setAttribute("id",elemento);


    			  butCarrito.setAttribute("type", "button");    			 
    			  butCarrito.setAttribute("value", "Add Carrito");
    			  butCarrito.setAttribute("class", "listaCarrito");
    			  butCarrito.setAttribute("id",elemento);


				  // añade el elemento creado y su contenido al DOM 
				  var currentDiv = document.getElementById("div1"); 
				  document.getElementById("myHeader").appendChild(newDiv);
				  document.getElementById("myHeader").appendChild(x);
				  document.getElementById("myHeader").appendChild(butListaDeseos);
				  document.getElementById("myHeader").appendChild(butCarrito);
				  //document.body.insertBefore(newDiv, currentDiv); 
				}   
				
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
					arregloZapatos = localStorage.getItem("productos");
					arregloZapatos = JSON.parse(arregloZapatos);

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

		        	for(var i=0, l=arregloZapatos.length; i < l; i++) {

		        		if(arregloZapatos[i].idP == idBoton){
		        			if (arregloZapatos[i].cantidad == 0){
		        				alert("Lo siento, este producto ya no se encuentra disponible");
		        				break;
		        			}
		        			else{
		        				var persona = {
									id : sessionStorage.username,
									idZap : idBoton
								};	

					        	prueba= JSON.stringify(persona);
								array.push(persona);
								localStorage.setItem("listaCarro",JSON.stringify(array));
								alert("Producto agregado satisfactoriamente!!");

		        			}
		        		}						
		        	} 		        	
				}

				$(".eliminarB").click(function(){
					deseos = localStorage.getItem("listaDeseos")
					deseos= JSON.parse(deseos);
					array=[];
					
					botonId= this.id;
					debugger;

					for (var j=0, n=deseos.length; j < n; j++){
	       					if(deseos[j].idZap == botonId && deseos[j].id == sessionStorage.getItem("username") ){
	       						deseos.splice(j, 1);
	       						//alert(deseos[j]);	
								localStorage.setItem("listaDeseos",JSON.stringify(deseos));
								window.location= "listaDeseos.html";
	       						break;
	       				}		
	       			}			
						
				});
		    });		

		 });