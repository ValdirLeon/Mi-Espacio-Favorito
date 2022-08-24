function iniciar(){
    swal("Con cuantas cartas quieres jugar?", {
        closeOnClickOutside: false,
        buttons: {
          Instrucciones: {
            value: "Instrucciones"
          },  
          can4: {
            value: "can4",
            text: "4"
          },
          can8: {
            value: "can8",
            text: "8"
          },
          can12: {
            value: "can12",
            text: "12"
          }
        }
    })
    .then((value) => {
        switch (value) {
            case "Instrucciones":
                swal({
                    text: 'En este juego debes memorizar la ubicación de las cartas descubiertas, al momento de virarlas debes recordar la ubicación de las cartas pares (o iguales).',
                    closeOnClickOutside: false,
                    button: 'Aceptar'
                }).then(()=>{
                    this.iniciar()
                })
            break;
            case "can4":
                total=4
                this.cargar()
            break;
            case "can8":
                total=8
                this.cargar()
            break;
            case "can12":
                total=12
                this.cargar()
            break;
        }
    })
}

function cargar(){
    tpares=total/2
        for(i=0;i<tpares;i++){
            numr=parseInt(6*Math.random())
            if(i>0){
                for(j=0;j<i;j++){
                    if(posicion[j]==numr){
                        numr=parseInt(6*Math.random())
                        j=0
                    }
                }
            }
            posicion[i]=numr
            cart1[cont]=mimg[posicion[i]]
            ++cont
            cart1[cont]=mimg[posicion[i]]
            ++cont
        }
        cont=0
        for(i=0;i<total;i++){
            numr=parseInt(total*Math.random())
            if(i>0){
                for(j=0;j<i;j++){
                    if(posicion[j]==numr){
                        numr=parseInt(total*Math.random())
                        j=0
                    }
                }
            }
            posicion[i]=numr
            cart2[i]=cart1[posicion[i]]
        }
        for(i=0;i<total;i++){
            for(j=0;j<total;j++){
                if(cart2[i]==cart2[j]){
                    ++cont
                    if(cont>2){
                        cont=0
                        this.cargar()
                    }
                }
            }
            cont=0
        }
        for(i=0;i<12;i++){
            if(i<total){
                this.imagen(imgs[i],cart2[i])
            }
            else{
                this.esconder(imgs[i])
            }
        }
        setTimeout(() => {
            for(i=0;i<total;i++){
                cart1[i]="url('../images/logos/logocarta.png')"
                this.imagen(imgs[i],cart1[i])
            }
        }, 3000)
}

function imagen(event,event1){
    document.getElementById(event).style.background = event1
    document.getElementById(event).style.backgroundPosition= "center"
    document.getElementById(event).style.backgroundRepeat = "no-repeat"
    document.getElementById(event).style.backgroundSize = "100px 110px"
    document.getElementById(event).style.opacity= 1
}

function esconder(event){
    document.getElementById(event).style.opacity= 0
}

function girar(c){
    if(c<total){
        if(cart1[c]=="url('../images/logos/logocarta.png')"){
            cart1[c]=cart2[c]
            this.imagen(imgs[c],cart2[c])
            girados[cont]=c
            ++cont
            if(cont==2){
                cont=0
                setTimeout(() => {
                    this.comprobar()
                }, 250);
            }
        }
        else{
            swal("Escoge otra carta")
        }
    }
}

function comprobar(){
    if(cart2[girados[0]]==cart2[girados[1]]){
        ++pares
        if(pares==tpares){
            swal("Terminaste el juego")
            setTimeout(() => {
                girados=[]
                pares=0
                this.iniciar()
            }, 2000)
        }
    }
    else{
        cart1[girados[0]]="url('../images/logos/logocarta.png')"
        cart1[girados[1]]="url('../images/logos/logocarta.png')"
        this.imagen(imgs[girados[0]],cart1[girados[0]])
        this.imagen(imgs[girados[1]],cart1[girados[1]])
        girados=[]
    }
}

var imgs=["img1","img2","img3","img4","img5","img6","img7","img8","img9","img10","img11","img12"]
var mimg=["url('../images/cartas/burro.png')",
"url('../images/cartas/elefante.png')",
"url('../images/cartas/leon.png')",
"url('../images/cartas/jirafa.png')",
"url('../images/cartas/oso.png')",
"url('../images/cartas/venado.png')"]
var pares=0
var tpares=0
var numr=0
var posicion=[]
var cart1=[]
var cart2=[]
var cont=0
var total=0
var girados=[]
var i=0
var j=0

iniciar()