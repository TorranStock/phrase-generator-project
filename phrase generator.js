function getRandomNum(num){
    //returns a random number between 0 and the input
    return Math.floor(Math.random()*num);
};

const phraseWords = {
    day: ['today', 'yesterday', 'tomorrw', 'on friday', 'in 10 years'],
    weather: ['sunny', 'rainy', 'windy', 'cold', 'hot', 'stormy'],
    location: ['NYC', 'Downpatrick', 'Belfast', 'Vancouver', 'Peru', 'Adelaide'],  
}

//store outputs in following array
let outputArr = []
//iterate over phrasewords object
for(let prop in phraseWords) {
    let randomIndex = getRandomNum(phraseWords[prop].length)

    //use switch to iterate through the object properties, selecting a random index for each
    switch(prop){
        case 'day':
            outputArr.push(phraseWords[prop][randomIndex])
            break
        case 'weather':
            outputArr.push(phraseWords[prop][randomIndex])
            break
        case 'location':
            outputArr.push(phraseWords[prop][randomIndex])  
            break
        default:
            outputArr.push('could not forecast weather')
    }
}
//make a fnction to return string that iterates output array and checks tense
function weatherForecast() {
    let tense = () => {
        if(outputArr[0]=== "yesterday"){
            return 'was'
        }else{
        return 'will be'
        }
    }
    return  `The weather ${outputArr[0]} in ${outputArr[2]} ${tense()} ${outputArr[1]}!`
}

console.log(weatherForecast())