
document.addEventListener("DOMContentLoaded", function () {

 const palos = ["♥", "♦", "♠", "♣"];
 const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

boton.addEventListener("click", function(){
let randomNumbers = Math.floor(Math.random() * valores.length)
let randomSuits = Math.floor(Math.random() * palos.length)

        // console.log(valores[randomNumber])
        // console.log(palos[randomSuits])

let simboloArriba = document.getElementById("simboloArriba")
let simboloAbajo = document.getElementById("simboloAbajo")
let letraArriba = document.getElementById("letraArriba")
let letraAbajo = document.getElementById("letraAbajo")

simboloArriba.textContent = palos[randomSuits]
letraArriba.textContent = valores[randomNumbers]
simboloAbajo.textContent = palos[randomSuits]
letraAbajo.textContent = valores[randomNumbers]

if(palos[randomSuits]=="♥" || palos[randomSuits]== "♦"){
        simboloArriba.style.color = "red"
        simboloAbajo.style.color = "red"
        letraArriba.style.color = "red"
        letraAbajo.style.color = "red"
}else {
        simboloArriba.style.color = "black"
        simboloAbajo.style.color = "black"
        letraArriba.style.color = "black"
        letraAbajo.style.color = "black"
}

// if (palos[randomSuits] =="♥" && valores[ramdonimg] == "K"){
//         dibujo.setAttribute("src", "./")
//         numero.textContent = ""
// }  numero es el nombre del div de la imagen en el html. 
// aqui podemos usar boleanos para las condiciones, 
// crear un array para las imagen 

})


})

