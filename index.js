let kokep = document.getElementById("kok")
let papirkep = document.getElementById("papirk")
let ollokep = document.getElementById("ollok")


let enpont=0
let geppont=0

function ko(){
    kokep.style.border = "thick solid red"
    papirkep.style.border = ""
    ollokep.style.border = ""
    gep("ko")
}
function papir(){
    papirkep.style.border = "thick solid red"
    kokep.style.border = ""
    ollokep.style.border = ""
    gep("papir")
}
function ollo(){
    ollokep.style.border = "thick solid red"
    kokep.style.border = ""
    papirkep.style.border = ""
    gep("ollo")
}

function gep(valasztas){
    let keph=document.getElementById("kepimg")
    let eredmenyelem = document.getElementById("eredmeny")
    let gepval=Math.floor(Math.random() * 3);
    gepko=false
    geppapir=false
    gepollo=false


    if(gepval==0){

        keph.src="ko.png"
        gepko=true
    }
    else if(gepval==1){

        keph.src="ollo.png"
        gepollo=true
    }
    else if(gepval==2){

        keph.src="papir.png"
        geppapir=true
    }

    if (valasztas == "ko" && gepko) {
        eredmenyelem.innerHTML = "Eredmeny: dontetlen"
    } else if (valasztas == "ko" && geppapir) {
        eredmenyelem.innerHTML = "Eredmeny: vesztettel"
        geppont++
    } else if (valasztas == "ko" && gepollo) {
        eredmenyelem.innerHTML = "Eredmeny: nyertel"
        enpont++
    }
 
    if (valasztas == "papir" && geppapir) {
        eredmenyelem.innerHTML = "Eredmeny: dontetlen"
    } else if (valasztas == "papir" && gepollo) {
        eredmenyelem.innerHTML = "Eredmeny: vesztettel"
        geppont++
    } else if (valasztas == "papir" && gepko) {
        eredmenyelem.innerHTML = "Eredmeny: nyertel"
        enpont++
    }
 
    if (valasztas == "ollo" && gepollo) {
        eredmenyelem.innerHTML = "Eredmeny: dontetlen"
    } else if (valasztas == "ollo" && gepko) {
        eredmenyelem.innerHTML = "Eredmeny: vesztettel"
        geppont++
    } else if (valasztas == "ollo" && geppapir) {
        eredmenyelem.innerHTML = "Eredmeny: nyertel"
        enpont++
    }

    let enp=document.getElementById("enpontok")
    let gepp=document.getElementById("geppontok")

    enp.innerHTML = enpont
    gepp.innerHTML = geppont

}

