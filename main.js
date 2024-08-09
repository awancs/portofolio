

let body = document.body;
        
const darkLimit = 10;
let darkCounter = 0;
let darkRemainingLeft;

function darkMode() {
    if(darkRemainingLeft == 0){
        console.log('darkmode anda habis')
        return;
    }

    darkCounter += 1;
    darkRemainingLeft = darkLimit - darkCounter;

    console.log('darkmode diklik sebanyak: ', darkCounter);
    console.log('kesempatan anda: ', darkRemainingLeft);
    body.classList.toggle("dark");
}