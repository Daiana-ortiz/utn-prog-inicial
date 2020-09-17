

var nombre = prompt('Hola! ¿Como es tu nombre? ')

var utn= confirm('¿Todo bien'+ " " +nombre +'?')
if (utn) {
	alert('¡Me alegro !')
} else {
	alert(' ¡Que mal!')
}


var imagen = document.getElementById('imagen')
	
function agrandar() {
	imagen.style.width='260px'
}

function normal () {
	imagen.style.width='250px'
}

function mensaje () {
	alert('Tu mensaje ha sido enviado correctamente')
}


function viajes (){
	var destinos = ['Orlando','Miami','Cuba','Brasil','Europa']	
	var elegido = prompt('Ingresa un numero del 0 al 4')	
	var enlace = document.getElementById('enlace')	
	var resultado = destinos[elegido]	

	enlace = alert('Tu proximo destino es' + " " + resultado )
}
		







