const tableau = new Array(100).fill().map((x,i) => i+1)
const numbreToGuess = Math.floor(Math.random() * 100);  


console.log("numbreToGuess :", numbreToGuess);

console.log(tableau);


function simpleSearch(tableau, numbreToGuess){

    for(let i= 0; i < tableau.length;i++){
        if(tableau[i] === numbreToGuess)
            return i;
    }

}

const result = simpleSearch(tableau, numbreToGuess);
console.log("result",tableau[result]);



