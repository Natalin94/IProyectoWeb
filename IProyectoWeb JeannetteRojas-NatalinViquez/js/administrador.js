 /*var arregloProductoGuardar= [{id : 'zap1', nombre : "Cat", descripcion : "Lindo", precio : 2000, cantidad : 50, imagen:"http://media15.liverpool.com.mx/web/images/products/es_MX/xl/1034253206.jpg", categoria: "Mujer" } , {id : 'zap2', nombre : "Cat", descripcion : "Lindo", precio : 2000, cantidad : 50, imagen:"http://www.play-school.es/images/images/category_7/Caterpillar-Bruin-CL281C9Z-Zapatillas-Bajas-Hombre-Zapatos.jpg", categoria: "Hombre" }]

            localStorage.setItem("productos",JSON.stringify(arregloProductoGuardar));*/

            
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
        $(document).ready(function(){
            debugger;

            $('#bAgregar').click(function(){
                debugger;
                var idV = document.getElementById("id").value; 
                var nombrePV = document.getElementById("nombre").value;
                var descripcionV = document.getElementById("descripcion").value;
                var precioV = document.getElementById("precio").value;
                var cantidadV = document.getElementById("cantidad").value;
                var categoriaV = document.getElementById("categoria").value;
                var imagenV = document.getElementById("imagen").value;

                var nuevoProducto = new producto (idV,nombrePV,descripcionV,precioV,cantidadV,categoriaV,imagenV);
                //localStorage.setItem(idV, JSON.stringify(nuevoProducto));
                debugger;
                arregloP = localStorage.getItem("productos");
                arregloP = JSON.parse(arregloP);
                array=[]
                for(var i=0, l=arregloP.length; i < l; i++) {
                        //document.write(arregloP[i])
                        array.push(arregloP[i]);                       
                    }
                array.push(nuevoProducto);
                localStorage.setItem("productos",JSON.stringify(array));
                alert("Producto agregado");
                
                /*Guardando los datos en el LocalStorage*/

                /*Limpiando los campos o inputs*/

                document.getElementById("id").value = "";
                document.getElementById("nombre").value = "";
                document.getElementById("descripcion").value = "";
                document.getElementById("precio").value = "";
                document.getElementById("cantidad").value = "";
                document.getElementById("categoria").value= "";
                document.getElementById("imagen").value = "";
        });

            $('#bEliminar').click(function(){
                debugger;
                arregloP = localStorage.getItem("productos");
                arregloP = JSON.parse(arregloP);
                array=[]
                for (var i=0, l = arregloP.length; i<l; i++){
                    array.push(arregloP[i]);                       
                    var idEliminar = document.getElementById("id").value;
                    debugger;
                    if(array[i].id == idEliminar){
                        debugger;
                        //funcion eliminar
                        //array.splice(i,1);
                        array.removeItem(i);
                        debugger;
                        //delete array[i];
                        debugger;
                        alert('producto eliminado');
                    }
                    else{
                        alert('no lo encuentra');
                    }
                }
                localStorage.setItem("productos",JSON.stringify(array));

                
            });

    });