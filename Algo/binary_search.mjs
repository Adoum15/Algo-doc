const tableau = new Array(100).fill().map((x,i) => i + 1)
const numbreToGuess = Math.floor(Math.random() * 100)



console.log(numbreToGuess);

console.log(tableau);


function binary_search(tableau, numbreToGuess){
    let min= 0;
    let max = tableau.length -1
    while(min <= max){
        const mid = Math.floor((min + max) / 2);
        const guess = tableau[mid];
        if(guess === numbreToGuess)
        {
            return mid;
        }else if (guess > numbreToGuess)
        {
            max = mid - 1; 
        }
        else {
            min = mid + 1
        }
    }
}

const result = binary_search(tableau, numbreToGuess)

console.log("resultat", tableau[result]);


