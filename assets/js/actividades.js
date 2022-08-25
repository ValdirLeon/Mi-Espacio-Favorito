function mensaje(){
    swal({
        text: 'Presione para comenzar',
        closeOnClickOutside: false,
        buttons: {
            Instrucciones: {
                value: "Instrucciones"
            },
            Comenzar: {
                value: "Comenzar"
            }
        }
    }).then((value) => {
        switch(value){
            case "Instrucciones":
                swal({
                    text: 'Al iniciar el juego de actividades encontrarás una pregunta y cinco imágenes, responde con la actividad correcta haciendo click a la imagen que corresponde.',
                    closeOnClickOutside: false,
                    button: 'Aceptar'
                }).then(()=>{
                    this.mensaje()
                })
            break;
            case "Comenzar":
                this.iniciar()
            break;
        }
    })
}

function iniciar(){
    for(i=0;i<5;i++){
        numr=parseInt(4*Math.random())
        fimag[i]=imagen[i][numr]
        fnom[i]=nombre[i][numr]
        this.colocar(imgs[i],fimag[i])
    }
    result=fnom[parseInt(5*Math.random())]
    this.titulo()
}

function colocar(event,event1){
    document.getElementById(event).style.background = event1
    document.getElementById(event).style.backgroundRepeat = "no-repeat"
    document.getElementById(event).style.backgroundSize = "230px 180px"
    document.getElementById(event).style.padding = "20px"
}

function titulo(){
    document.getElementById("title").innerHTML = "¿Qué niño está " +result+ " ?"
}

function comprobar(c){
    if(result==fnom[c]){
        ++cont
        swal('Correcto')
        if(cont==5){
            cont=0
            swal('Terminaste el juego')
            setTimeout(() => {
                this.mensaje()
            }, 5000);
        }
        this.iniciar()
    }
    else swal('Incorrecto')
}

var imagen=[["url('../images/actividades/bateria.png')",
"url('../images/actividades/beisbol.png')",
"url('../images/actividades/secandose.png')",
"url('../images/actividades/soga.png')"],
["url('../images/actividades/bicicleta.png')",
"url('../images/actividades/cabello.png')",
"url('../images/actividades/musica.png')",
"url('../images/actividades/popi.png')"],
["url('../images/actividades/celular.png')",
"url('../images/actividades/comer.png')",
"url('../images/actividades/leer.png')",
"url('../images/actividades/lmanos.png')"],
["url('../images/actividades/cometa.png')",
"url('../images/actividades/computadora.png')",
"url('../images/actividades/gateo.png')",
"url('../images/actividades/gritando.png')"],
["url('../images/actividades/conversando.png')",
"url('../images/actividades/correr.png')",
"url('../images/actividades/ducha.png')",
"url('../images/actividades/estirar.png')"]
]
var nombre=[["tocando música","batiando","secandose","saltado la cuerda"],
["montando bicicleta","lavandose el cabello","escuchando música","haciendo popo"],
["usando el celular","comiendo","leyendo","lavandose las manos"],
["volando cometa","usando la computadora","gateando","gritando"],
["hablando","corriendo","bañandose","estirandose"]
]
var imgs=["img1","img2","img3","img4","img5"]
var fimag=[]
var fnom=[]
var result=""
var cont=0
var numr=0
var i=0

mensaje()