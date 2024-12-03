
const elementos = document.getElementsByClassName('block');
var row
const fechaInicio = new Date();
const secs= fechaInicio.getSeconds();
console.log(secs)
function getSemana() {
    const fechaActual = new Date();
    const diasSemana = ["d", "l", "m", "mm", "j", "v", "s"];
const diaSemana = diasSemana[fechaActual.getDay()];
return diaSemana
}
function getHora(){
    const fechaActual = new Date();
    const horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const Hformat= (horas*3600) + (minutos*60)
    return Hformat
}
function GetInterval() {
    var semana= getSemana()
var hora= getHora()

 if (semana !="d" && semana != "s") {
   

    if  (hora >= 30600 && hora < 33900) {
      row=1
    } else if  (hora >= 33900 && hora < 37200 - 60  + secs) {
      if (semana=="l") {
         row=2
      }else{
        row=1
      }
      
    } else if  (hora >= 37200 - 60  + secs && hora < 40500 -60 + secs) {
     
        if (semana=="l") {
          row=2
        }else{
             row=3
        }
    } else if ( hora >= 40500 -60 + secs && hora < 42300 -60 + secs) {
       row=4
       semana="l"
       
    } else if  (hora >= 42300 -60 + secs && hora < 45600 -60 + secs) {
       row=5
    } else if  (hora >= 45600 -60 + secs && hora < 48900-60 + secs) {
     
      if (semana=="j" || semana=="v") {
        row=5
      }else{
         row=6
      }
    } else if (hora >= 48900 -60 + secs && hora < 52200-60 + secs) {
    
      if (semana== "j|| semana==v") {
        row=5
      }else{
         row=6
      }
    }
    
    var format= row + semana
    console.log(format)
    const bloque=document.getElementById(format)
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.color="rgba(127, 229, 255)"
       elementos[i].style.backgroundColor="rgba(6, 43, 43, 0.77)"
        elementos[i].style.height="40px"
        elementos[i].style.width="150px"
        elementos[i].style.transition="0s"
        elementos[i].style.boxShadow="none"
        elementos[i].style.transform="scale(1.0)"
    }  
    bloque.style.transition="1.5s"  
    bloque.style.backgroundColor="rgba(4, 56, 116)"
    bloque.style.boxShadow="0px 0px 10px rgba(8, 112, 209, 0.616)"
    bloque.style.transform="scale(1.1)"
    

 }
}

GetInterval()
setTimeout(() => {
GetInterval() 
setInterval(() => {

    GetInterval()
    
        
    }, 60000 ); 
}, 60000 - (secs*1000));

