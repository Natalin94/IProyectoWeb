var producto = function(idP, nombreP, descripcion, precio, cantidad,categoria,imagen) {
    //body...
    this.idP = idP;
    this.nombreP = nombreP;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
    this.categoria = categoria;
    this.imagen = imagen;
}

/*
function cargarProducto() {
    var arregloP = localStorage.getItem("productos");
    arregloP = JSON.parse(arregloP);
    var array=[];
    var idBuscar = document.getElementById("id").value;
    for (var i = 0; i < arregloP.length; i++) {
        array.push(arregloP[i]);                       
        //var idBuscar = document.getElementById("id").value;
        //debugger;
        if(arregloP[i].idP == idBuscar){
            //debugger;
            //cargar datos
            //alert('encontrado');
            /*document.getElementById("nombre").value = arregloP[i].nombreP;
            document.getElementById("descripcion").value = arregloP[i].descripcion;
            document.getElementById("precio").value = arregloP[i].precio;
            document.getElementById("cantidad").value = arregloP[i].cantidad;
            document.getElementById("categoria").value= arregloP[i].categoria;
            document.getElementById("imagen").value = arregloP[i].imagen;
            //debugger;
            //document.getElementById("nombre").value = arregloP[i].nombreP;
            //$("#nombre").val(arregloP[i].nombreP);
            console.log(arregloP[i]);
            document.getElementById("nombre").value = arregloP[i].nombreP
            //debugger;
            //return;
        } else{
            console.log("Mae no lo encontre");
            //alert('Intenta con otro id.');
        }
        //alert('intenta con otro');
    }
};
*/

$(document).ready(function(){
    debugger;
    $('#bCargarDatos').click( function() {
        var arregloP = localStorage.getItem("productos"),
            arregloP = JSON.parse(arregloP),
            array=[];
        var idBuscar = document.getElementById("id").value;
        for (var i=0, l = arregloP.length; i<l; i++){
            array.push(arregloP[i]);                       
            //var idBuscar = document.getElementById("id").value;
            //debugger;
            if(arregloP[i].idP == idBuscar){
                //debugger;
                //cargar datos
                alert('encontrado');
                document.getElementById("nombre").value = arregloP[i].nombreP;
                document.getElementById("descripcion").value = arregloP[i].descripcion;
                document.getElementById("precio").value = arregloP[i].precio;
                document.getElementById("cantidad").value = arregloP[i].cantidad;
                document.getElementById("categoria").value= arregloP[i].categoria;
                document.getElementById("imagen").value = arregloP[i].imagen;
                debugger;
                //$("#nombre").val(arregloP[i].nombreP);
                //debugger;
                return;
            } else{
                //alert('Intenta con otro id.');
            }
            break;
            alert('intenta con otro');
        }

    });
    

    $('#bActualizar').click(function(){
        debugger;
        var idV = document.getElementById("id").value; 
        //var idV = localStorage.getItem("productos").idV;
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
        array=[];
        for(var i=0, l=arregloP.length; i < l; i++) {
               //document.write(arregloP[i])
                array.push(arregloP[i]); 
                array.splice(i,1);                      
            }
        array.push(nuevoProducto);
        localStorage.setItem("productos",JSON.stringify(array));
        alert("Producto actualizado");

        //Limpiando los campos o inputs

        document.getElementById("id").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("precio").value = "";
        document.getElementById("cantidad").value = "";
        document.getElementById("categoria").value= "";
        document.getElementById("imagen").value = "";

    });

 });