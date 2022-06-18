let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push('GO');
programming.difficulty = 7;
delete programming.jokes;
programming.isFun = true;

// for(let i = 0; i < programming.languages.length; i++){
//     console.log(programming.languages[i])
// }

// for(item in programming){
//     console.log(item)
// }

for(item in programming){
    if(item === 'languages'){
        for(let i = 0; i < programming.languages.length; i++){
            console.log(programming.languages[i]);
        }
    }else{
        console.log(programming[item]);
    }
}
