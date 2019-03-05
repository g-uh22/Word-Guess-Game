// create an array terms
const word = ['tourist', 'beach', 'tropical', 'cocktail', 'pool', 'travel', 'luggage'];

// choose word randomly
let randNum = Math.floor(Math.random() * word.length);
let chosenWord = word[randNum];
let correctWord = [];
let wrongWord = [];
let underScore = [];

// testing
console.log(chosenWord);
// generate underscores based on length of word
let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}
// testing
console.log(generateUnderscore());
// get user guess
document.addEventListener('keypress', (event)=> {
    let keyword = String.fromCharCode(event.keyCode);
    if(chosenWord.indexOf(keyword) > -1) {
    // add to correct array
        correctWord.push(keyword);
        // replace underscore with correct letter guess
        underScore[chosenWord.indexOf(keyword)] = keyword;
        // check to see if user word matches
        if(underScore.join('') == chosenWord) {
            alert('You Win');
        }
        
        // wrongWord.push(keyword);
        // console.log(wrongWord);
     
        }
     
        
     
})

