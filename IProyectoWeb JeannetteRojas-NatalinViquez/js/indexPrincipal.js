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
  var nuevaPersona =  new persona("marimora", "Maria" , "Mora", "25", "maria@gmail.com","Ciudad Quesada","89765432","123",
      "321", "321","04/89", true, 0 , 0, true);
        localStorage.setItem("marimora", JSON.stringify(nuevaPersona));
});