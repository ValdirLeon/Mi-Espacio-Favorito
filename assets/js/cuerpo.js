function iniciar(){
    swal("Selecciona tu sexo", {
        closeOnClickOutside: false,
        buttons: {
        Instrucciones: {
            value: "Instrucciones"
        },
        niño: {
            value: "niño"
        },
        niña: {
            value: "niña"
        }
        }
    })
    .then((value) => {
        switch (value) {
            case "Instrucciones":
                swal({
                    text: 'En este juego, coloca el cursor sobre la parte del cuerpo humano que deseas conocer, verás una imagen y la forma correcta de escribirla.',
                    closeOnClickOutside: false,
                    button: 'Aceptar'
                }).then(()=>{
                    this.iniciar()
                })
            break;
            case "niño":
                document.getElementById("fondo__parte").style.background= "url('../images/partes/niño.jpeg')"
                document.getElementById("fondo__parte").style.backgroundRepeat = "no-repeat"
                document.getElementById("fondo__parte").style.backgroundSize = "500px 422px"
                genero=1
            break;
            case "niña":
                document.getElementById("fondo__parte").style.background = "url('../images/partes/niña.jpeg')"
                document.getElementById("fondo__parte").style.backgroundRepeat = "no-repeat"
                document.getElementById("fondo__parte").style.backgroundSize = "500px 450px"
                genero=2
            break;
        }
    })
}

function seleccionar(event){
    if(genero==2 && event=="cabeza"){
        document.getElementById(event).src="../images/partes/niña-cabeza.png"
    }
    else if(genero==2 && event=="cabello"){
        document.getElementById(event).src="../images/partes/niña-cabello.png"
    }
    document.getElementById(event).style.opacity= 1
    document.getElementById(event).style.width = '200px'
    document.getElementById(event).style.height = '200px'
    document.getElementById('nombre__parte').innerHTML = event
    document.getElementById('nombre__parte').style.fontSize = '50px'
}

function esconder(event){
    document.getElementById(event).style.opacity= 0
    document.getElementById(event).style.width = '0px'
    document.getElementById(event).style.height = '0px'
    document.getElementById('nombre__parte').innerHTML = 'Selecciona una parte del cuerpo'
    document.getElementById('nombre__parte').style.fontSize = '30px'

}

var genero=0

iniciar()