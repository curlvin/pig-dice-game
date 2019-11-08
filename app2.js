Rules=`
GAME RULES

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. 
2. Please feel free to change the predefined score of 100 in the winning score box in the top left corner. 
3. The player looses his current score when both dice show a 1.
Thank you, this is a game by yourstruly curlvin.
`;

alert(Rules)

//defining our variables/////////
var score,roundScore,activePlayer,gamePlaying,scoreSet;
activePlayer=0;
var dice=['.dice1','.dice2'];
reset();
gamePlaying=true;

//creating a click event///////////////////

//////WHEN THE ROLL DICE IS CLICKED//////
document.querySelector('.btn-roll').addEventListener('click',function(){
   if(gamePlaying)
       {
                                
                //1.generate a radom number
                
                var dice1=Math.floor(Math.random()*6)+1;
                var dice2=Math.floor(Math.random()*6)+1;
                //2.display result
                var clickDOM1=document.querySelector(`${dice[0]}`);
                var clickDOM2=document.querySelector(`${dice[1]}`);
                clickDOM1.style.display='block';
                clickDOM2.style.display='block';
                clickDOM1.src=`dice-${dice1}.png`;
                clickDOM2.src=`dice-${dice2}.png`;
                //3.update round score if the rolled number is NOT 1
                if(dice1===1 & dice2===1 )
                    {
                        nextPlayer()
                        
                    }
                else if(dice1===6 & dice2==6)
                    {
                        score[activePlayer]=0;
                        document.getElementById(`current-${activePlayer}`).textContent=score[activePlayer];
                        nextPlayer()
                    }
                else
                    {
                        roundScore+=(dice1+dice2);
                        document.getElementById(`current-${activePlayer}`).textContent=roundScore;
                     
                    }       
    
           }
})

///////WHEN THE HOLD BUTTON IS CLICKED//////
document.querySelector(".btn-hold").addEventListener('click',function(){
    if(gamePlaying)
        { 
            
        
            //Add current score to global score and update the UI////////
            score[activePlayer]+=roundScore;
            document.getElementById(`score-${activePlayer}`).textContent=score[activePlayer];
            var inputScore=document.getElementById('max-score').value;
            if(inputScore)
                {
                  scoreSet=inputScore; 
                }
            else
                {
                    scoreSet=200;
                }
            //Check if player won the game////////
            if(score[activePlayer]>=scoreSet)
            {
                
                document.getElementById(`name-${activePlayer}`).innerHTML="<strong><em>WINNER !!</em></strong>";
                document.querySelector(`${dice[0]}`).style.display="none";
                document.querySelector(`${dice[1]}`).style.display="none";
                document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
                document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
                gamePlaying=false;
                

            }
            else
                {
                     //Switch player /////////
                    nextPlayer()           
                }    
        }
})


function nextPlayer()
{
    activePlayer!==1 ? activePlayer=1 : activePlayer=0;
    roundScore=0;
    document.getElementById('current-0').textContent= roundScore;
    document.getElementById('current-1').textContent= roundScore;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector(`${dice[0]}`).style.display="none";
    document.querySelector(`${dice[1]}`).style.display="none";
}


///////WHEN THE NEW GAME BUTTON IS CLICKED////
document.querySelector(".btn-new").addEventListener('click',reset);
document.querySelector(".btn-new").addEventListener('click',switcher); 

function reset(){
    roundScore=0;
    score=[0,0];
    document.querySelector(`${dice[0]}`).style.display="none";
    document.querySelector(`${dice[1]}`).style.display="none";
    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.getElementById('name-0').textContent="PLAYER 1";
    document.getElementById('name-1').textContent="PLAYER 2";
    document.querySelector(`.player-0-panel`).classList.remove('winner')
    document.querySelector(`.player-1-panel`).classList.remove('winner')
    gamePlaying=true;
    
}

function switcher()
{
    //this makes loser play first in the next game//////
    activePlayer===0?(document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active'),document.querySelector(`.player-1-panel`).classList.add('active'),activePlayer=1):(document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active'),document.querySelector(`.player-0-panel`).classList.add('active'),activePlayer=0);
}
/******************************************************
*****thoughts not implemented

function setScore()
//Pormpt the user to enter the winning score when the game starts////// 
{
    var score='';
    while(score=='')
    {
        var x=Math.floor(prompt('plese enter the winning score'));
        score+=x
    }
    return score;
}
*/