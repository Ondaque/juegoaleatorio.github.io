/*Function de Numeros aleatorios */
function randomNumber(max, min){
    return Math.floor (Math.random() * (max - min +1) + min);
    
}

const rNum = randomNumber(100, 1);
let contador = 0;

adivinanza();
function adivinanza(){
    let numUser = prompt("Ayuda a Cristiano Ronaldo a ponerle precio a su Siuuu cada vez que lo digan:");

    if (numUser == rNum) {
    alert ("¡Gracias por ayudar a Cristiano! Toma un Siuuuu como recompensa :)");
    } else{
        if(numUser > rNum) {
        alert("Mmmm, parece que El Bicho quiere que sea menor a tu precio que indicaste");
        } else{
            alert("Ronaldo quiere que sea mayor el precio que indicaste")
        }
        contador++;
        if(contador >= 3) {
            alert("NOOOOOU, le fallaste al Bicho")
        } else {
        adivinanza();
        }
    }
}
