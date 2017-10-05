
			arregloZ = localStorage.getItem("listaHistorial");
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
	       						addElement(arregloProductos[j].imagen, arregloProductos[j].idP, arregloProductos[j].nombreP)
		       					debugger;	
	       					}		
	       				}
	       			}	        								
	        	} 
	        	});
		    });


			     function addElement (url, elemento,nombreZapato) { 
				  // crea un nuevo div 
				  // y añade contenido 
				  var newDiv = document.createElement("div"); 
				  var x = document.createElement("IMG");
    			  //x.setAttribute("src", "images/zap2.jpg");
    			  x.setAttribute("src", url);
    			  x.setAttribute("width", "250");
    			  x.setAttribute("height", "270");

    			  var atributoNombre= document.createElement("p");
    			  var texto = document.createTextNode("Producto: " + nombreZapato);
				  atributoNombre.appendChild(texto);

				  var linea= document.createElement("hr");
    			  
    			 
				  // añade el elemento creado y su contenido al DOM 
				  var currentDiv = document.getElementById("div1"); 
				  document.getElementById("myHeader").appendChild(newDiv);
				  document.getElementById("myHeader").appendChild(x);
				  document.getElementById("myHeader").appendChild(atributoNombre);
				  document.getElementById("myHeader").appendChild(linea);
				  
				  //document.body.insertBefore(newDiv, currentDiv); 
				}   
			
			
			
			