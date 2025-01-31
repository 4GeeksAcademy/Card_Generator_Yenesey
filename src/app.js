
const palos = ["♦", "♥", "♠", "♣"];
const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
//Declaro los palos y los valores


function cartaAleatoria() {
    
    const rndPalo = Math.floor(Math.random() * palos.length); 
    const rndNumero = Math.floor(Math.random() * numeros.length); 

   
    const paloRand = palos[rndPalo]; // palo aleatorio
    const numeroRand = numeros[rndNumero]; // valor aleatorio

    
    const simboloTop = document.getElementById("simbolo-top"); 
    const numero = document.getElementById("numero");
    const simboloBottom = document.getElementById("simbolo-bottom");
    // Nos traemos las variables del HTML por el Id, podria usar queryselector

    simboloTop.innerText = paloRand;
    numero.innerText = numeroRand;
    simboloBottom.innerText = paloRand;
    // Les doy el valor Random

    
    const card = document.querySelector(".card");
    if (paloRand === "♦" || paloRand === "♥") {
        card.style.color = "red";
    } else {
        card.style.color = "black";
    }
    // Le cambiamos el color en funcion del palo

    card.addEventListener("click", cartaAleatoria);
    // Puntito extra con addEvenListenner, le añado el evento
    // click y llamo a la funcion
    
    
    // card.addEventListener("mouseover", cartaAleatoria) // por si quieres probarlo

}

window.onload = () => {
    cartaAleatoria(); // al recargar la web se genera la carta
    setInterval(cartaAleatoria, 10000); // Se inicia el temp para qie cada 10 sg se genere
};




