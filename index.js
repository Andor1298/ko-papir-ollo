let kokep = document.getElementById("kok")
let papirkep = document.getElementById("papirk")
let ollokep = document.getElementById("ollok")

let kok = false
let pa = false
let ol = false

let gepkok = false
let geppa = false
let gepol = false

let enpont=0
let geppont=0

function ko(){
    kokep.style.border = "thick solid red"
    papirkep.style.border = ""
    ollokep.style.border = ""
    kok=true
    pa=false
    ol=false
    
}
function papir(){
    papirkep.style.border = "thick solid red"
    kokep.style.border = ""
    ollokep.style.border = ""
    kok=false
    pa=true
    ol=false
}
function ollo(){
    ollokep.style.border = "thick solid red"
    kokep.style.border = ""
    papirkep.style.border = ""
    kok=false
    pa=false
    ol=true
}

function gep(){
    gepkok=false
    geppa=false
    gepol=false
    let keph=document.getElementById("kepimg")
    let gepval=Math.floor(Math.random() * 3);
    if(gepval==0){

        keph.src="ko.png"
        gepkok=true
        if(ol==true){
            geppont+=1
        }
        else if(pa=true){
            enpont+=1
        }
        else{

        }
        
    }
    else if(gepval==1){

        keph.src="ollo.png"
        geppa=true
        if(kok==true){
            enpontpont+=1
        }
        else if(pa=true){
            geppont+=1
        }
        else{
            
        }
    }
    else if(gepval==2){

        keph.src="papir.png"
        gepol=true
        if(kok==true){
            geppont+=1
        }
        else if(ol=true){
            enpont+=1
        }
        else{
            
        }
    }
    let enp=document.getElementById("enpontok")
    let gepp=document.getElementById("geppontok")

    enp.appendChild(enpont)
    gepp.appendChild(geppont)
    

}

