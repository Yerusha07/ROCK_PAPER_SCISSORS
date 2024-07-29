let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg')
const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')





const genCompChoice = ()=>{
    //rock, paper, scissors
    const options =['rock','paper','scissors']
    const randIdx = Math.floor( Math.random()*3)
    return options[randIdx]
    
}


const drawGame = ()=>{
    msg.innerText ="Game was draw, play again"
    msg.style.backgroundColor ="yellow"

}

const showWinner = (userWin) =>{

   if(userWin){ 
    userScore++
    userScorePara.innerText = userScore;
    
    msg.innerText = 'You win'
   
    
    msg.style.backgroundColor ="green"
}

else
{
    compScore++
    compScorePara.innerText = compScore;
    
    msg.innerText = 'You lose!'
    msg.style.backgroundColor ="red"

}

}
const playGame = (userChoice) =>
{
console.log('user choice=', userChoice);
//generate comp choice.->modular
const compChoice = genCompChoice();
console.log('comp choice=', compChoice);

if(userChoice==compChoice)
{
    //draw game
    drawGame()

}else{
    let userWin = true;
    if(userChoice==='rock'){
        //scissors, paper
     userWin =  compChoice ==='paper'? false:true
    }//rock, scissors
    else if(userChoice==='paper')
    {
        userWin = compChoice ==='scissorss'?false: true;
    }else{
        //rock, paper
    }userWin=compChoice ==='rock'?false:true;


showWinner(userWin,userChoice,compChoice);

}
}


















choices.forEach((choice)=>
{
    // console.log(choice);
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute("id")
 playGame(userChoice)
    })
})

// const msg = document.querySelector('#msg')



// const userScorePara = document.querySelector("#user-score");
// const compScorePara = document.querySelector('#comp-score');

// const genCompChoice = ()=>
// {
//   const options = ['rock','paper','scissors'];
//   const randIdx = Math.floor(Math.random()*3);
//   return options[randIdx]

// }