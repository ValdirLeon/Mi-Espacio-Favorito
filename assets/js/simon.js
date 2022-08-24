function iniciar(){
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
                    text: 'En el juego de Simón Dice, pondrás a prueba tu memoria. Espera que los colores del círculo se iluminen y sigue el patrón haciendo click sobre el círculo del color iluminado.',
                    closeOnClickOutside: false,
                    button: 'Aceptar'
                }).then(()=>{
                    this.iniciar()
                })
            break;
            case "Comenzar":
                for(i=0;i<nivelmax;i++){
                    colores[i]=parseInt(4*Math.random())
                }
                this.iluminar()
            break;
        }
})
}

function iluminar(){
    {
        setTimeout(() => {
            this.luces1(coloresn[colores[j]],coloresilu[colores[j]])
        }, 2000)
        setTimeout(() => {
            this.luces1(coloresn[colores[j]],coloresn[colores[j]])
            ++j
            if(j<nivel){this.iluminar()}
        }, 3000)
}  
}

function luces1(event,event1){
    document.getElementById(event).style.background = event1
}

function presionar(pos){
    this.luces1(coloresn[pos],coloresilu[pos])
setTimeout(() => {
    this.luces1(coloresn[pos],coloresn[pos])
}, 500)
if(pos==colores[k]){
    ++k
    if(k==nivel){
        j=0
        k=0
        ++nivel
        if(nivel>nivelmax){
            swal('Terminaste el juego')
            setTimeout(() => {
                j=0
                k=0
                nivel=1
                this.iniciar()
            }, 5000);
        }
        else this.iluminar()
    }
}
else{swal('Intentalo de nuevo')
setTimeout(() => {
    j=0
    k=0
    nivel=1
    this.iniciar()
}, 5000);
}
}

var coloresn = ['red','blue','green','orange']
var coloresilu = ['pink','lightblue','greenyellow','yellow']
var colores = []
const nivelmax = 5
var nivel = 1
var i = 0
var j = 0
var k = 0

iniciar()