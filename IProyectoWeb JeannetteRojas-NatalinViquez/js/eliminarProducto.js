 $(document).ready(function(){
            debugger;

            $('#bEliminar').click(function(){
                debugger;
                arregloP = localStorage.getItem("productos");
                arregloP = JSON.parse(arregloP);
                array=[]
                for (var i=0, l = arregloP.length; i<l; i++){
                    array.push(arregloP[i]);                       
                    var idEliminar = document.getElementById("id").value;
                    debugger;
                    if(arregloP[i].idP == idEliminar){
                        debugger;
                        //funcion eliminar
                        array.splice(i,1);
                        //array.removeItem(i);
                        debugger;
                        //delete array[i];
                        debugger;
                        alert('producto eliminado');
                        break;
                    }
                    else{
                        
                    }
                    alert('no lo encuentra');
                }
                localStorage.setItem("productos",JSON.stringify(array));

                
            });

    });