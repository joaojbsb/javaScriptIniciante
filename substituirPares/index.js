function substituirPares(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Numero zero")
        } else if (array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0`);
            array[i] = 0;
        } 
    }
    return array;
}

let array = [2,10,15,20,25,30,35,40,45]

console.log(substituirPares(array));