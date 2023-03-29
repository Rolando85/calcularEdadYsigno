
document.querySelector('.formu').addEventListener('submit',function(f){
    f.preventDefault()
    calcular()
})
  
function calcular() {
    var fechaNacimiento = new Date(document.getElementById("fecha").value);
    var nombre =document.getElementById("nombre").value;
    fechaNacimiento.setDate(fechaNacimiento.getDate() + 1); // agregamos un día a la fecha de nacimiento
    var hoy = new Date();
    var edadAnios = hoy.getFullYear() - fechaNacimiento.getFullYear();
    var edadMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    if (edadMeses < 0 || (edadMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edadAnios--;
      edadMeses += 12;
    }
    var edadDias = Math.floor((hoy.getTime() - fechaNacimiento.getTime()) / (1000 * 3600 * 24));
    edadDias=edadDias.toLocaleString('en-US')
    var signo = obtenerSigno(fechaNacimiento.getMonth() + 1, fechaNacimiento.getDate());
    var diaSemana = obtenerDiaSemana(fechaNacimiento.getDay());
    var mes = obtenerMes(fechaNacimiento.getMonth());
    
    var anio = fechaNacimiento.getFullYear();
    if(fechaNacimiento>hoy){
    document.getElementById("res").innerHTML ='La fecha de nacimiento no puede ser posterior a la fecha actual';

    }else{
        ver_resp()
        document.getElementById("res").innerHTML ='';
        document.getElementById("saludo").innerHTML =`Hola <strong>${nombre}</strong> segun tu fecha de Nacimiento proporcionada:`;
        document.getElementById("edad").innerHTML = edadAnios;
        document.getElementById("meses").innerHTML = edadMeses;
        document.getElementById("dias").innerHTML = edadDias;
        document.getElementById("signo").innerHTML = signo;
    
        var fechaCompleta =` <strong> ${diaSemana}</strong>  <strong>${fechaNacimiento.getDate()}</strong> de <strong>${mes}</strong> de <strong>${anio}</strong>`;
    document.getElementById("fechaCompleta").innerHTML = "Naciste el " + fechaCompleta;

    document.querySelector('.formu').reset()

    }


}

  function obtenerSigno(mes, dia) {
    // Este código es sólo un ejemplo y puede ser reemplazado por un algoritmo real para obtener el signo zodiacal.
    if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        return "Acuario";
        } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        return "Piscis";
        } else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        return "Aries";
        } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        return "Tauro";
        } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        return "Géminis";
        } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        return "Cáncer";
        } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        return "Leo";
        } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        return "Virgo";
        } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        return "Libra";
        } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        return "Escorpio";
        } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        return "Sagitario";
        } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        return "Capricornio";
        }
        }
        
        function obtenerDiaSemana(dia) {
        var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        return diasSemana[dia];
        }
        
        function obtenerMes(mes) {
        var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        return meses[mes];
        }

        function ver_resp(){
            document.querySelector('.contenedor_resp').classList.add('ver_resp')
        }
        document.querySelector('.clos_resp').addEventListener('click',function(){
            document.querySelector('.contenedor_resp').classList.remove('ver_resp')

        })
  