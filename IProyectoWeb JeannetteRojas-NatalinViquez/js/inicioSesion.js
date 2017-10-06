
//CLASS PERSONA
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


  $(document).ready(function(){    
    $('#butRegistrarse').click(function(){        
        //Capture of data written in the inputs 
        var idVar = document.getElementById("idtxt").value;       
        var nom = document.getElementById("nombretxt").value;
        var apel = document.getElementById("apellidostxt").value;
        var edadVar = document.getElementById("edadtxt").value;
        var emailVar = document.getElementById("emailtxt").value;
        var direccionVar= document.getElementById("direccióntxt").value;
        var telefonoVar = document.getElementById("telefonotxt").value;
        var contraseñaVar = document.getElementById("contraseñatxt").value;
        var numTarjetaVar = document.getElementById("numTarjetatxt").value;
        var codSeguridadVar = document.getElementById("codSeguridadtxt").value;
        var fechaVencimientoVar = document.getElementById("fechaVencimientotxt").value;

        var nuevaPersona =  new persona(idVar, nom , apel, edadVar, emailVar,direccionVar,telefonoVar,contraseñaVar, numTarjetaVar, codSeguridadVar,fechaVencimientoVar, false, 0 , 0, true);
        localStorage.setItem(idVar, JSON.stringify(nuevaPersona));

        debugger;
        //Saving the data in the LocalStorage 
         //Clearing fields or inputs 
        document.getElementById("idtxt").value ="";       
        document.getElementById("nombretxt").value ="";
        document.getElementById("apellidostxt").value="";
        document.getElementById("edadtxt").value="";
        document.getElementById("emailtxt").value ="";
        document.getElementById("direccióntxt").value="";
        document.getElementById("telefonotxt").value="";
        document.getElementById("contraseñatxt").value="";
        document.getElementById("numTarjetatxt").value = "";
        document.getElementById("codSeguridadtxt").value ="";
        document.getElementById("fechaVencimientotxt").value ="";
        debugger;
        sessionStorage.setItem("username", nom);
        sessionStorage.setItem("idUsuario", idVar);
       // document.write(localStorage.getItem('datos'));
    });


        var cont = 0;
        $('#butIniciarSesion').click(function(){    
        for(var i=0, l=localStorage.length; i < l; i++) {
          var idIniciarVar = document.getElementById("idInicio").value;
          var contraseñaIniciarVar = document.getElementById("contraseñaInicio").value;
          debugger;
          key = localStorage.key(i);
          if(key == idIniciarVar){
            
           debugger;
            personaGuardada = localStorage.getItem(key);
            
            personaGuardada = JSON.parse(personaGuardada);

            if(personaGuardada.contraseña == contraseñaIniciarVar){
               debugger;
              var linkNuevo = $("#butIniciarSesion");
              debugger;
              if (personaGuardada.tipo == true){
                linkNuevo.href = "administrador.html";
              }
              else{
                if (personaGuardada.estado == true){
                  linkNuevo.href = "index.html";
                }
                else{
                  alert("Debes activar la membresia.")
                }

              }
              debugger;
              //linkNuevo.href = 'index.html';
              $("#butIniciarSesion").attr("href",linkNuevo.href);
              sessionStorage.setItem("username", personaGuardada.nombre);
              sessionStorage.setItem("idUsuario", personaGuardada.id);
              break;
             // alert(personaGuardada.nombre);
            }
            else{
              alert('Lo siento,contraseña incorrecta');
              break;
            }
          }

          if(cont == localStorage.length-1){
              alert('Lo siento,no se encuentra registrado');
            }
          cont ++;         
        }    
    });     
});
