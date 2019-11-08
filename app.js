/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



//defining our variables/////////
var score,roundScore,activePlayer,gamePlaying;//dice;
//score=[0,0];
//roundScore=0;

activePlayer=0;
reset();
//dice=Math.ceil(Math.random()*6)+1;
//console.log(dice); //the output will now belogged to <div id="current-0">
//document.querySelector("#current-"+activePlayer).innerHTML='<em>'+dice+'</em>';//innerHTML property allows the use of html elements on the variable./////
//document.querySelector("#current-"+activePlayer).textContent=dice;
//document.querySelector('.dice').style.display="none";
//document.getElementById('score-0').textContent=0;
//document.getElementById('score-1').textContent=0;
//document.getElementById('current-0').textContent=0;
//document.getElementById('current-1').textContent=0;

gamePlaying=true;
//creating a click event///////////////////

//////WHEN THE ROLL DICE IS CLICKED//////
document.querySelector('.btn-roll').addEventListener('click',function(){
   if(gamePlaying)
       {
           
           
           
                //1.generate a radom number
                var dice=Math.floor(Math.random()*6)+1;
                //2.display result
                var clickDOM=document.querySelector('.dice');
                clickDOM.style.display='block';
                clickDOM.src=`dice-${dice}.png`;
                //3.update round score if the rolled number is NOT 1
                if(dice!==1)
                    {
                        roundScore+=dice;
                        document.getElementById(`current-${activePlayer}`).textContent=roundScore;
                    }
                else
                    {
                        //Next Player
                        /*
                        score[activePlayer]+=roundScore;
                        document.getElementById(`score-${activePlayer}`).textContent=score[activePlayer];
                        roundScore=0;
                        document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
                        document.getElementById(`current-${activePlayer}`).textContent=roundScore;
                        activePlayer!==1 ? activePlayer=1 : activePlayer=0
                        document.querySelector(`.player-${activePlayer}-panel`).classList.add('active');
                        document.querySelector('.dice').style.display="none";
                        */
                        /*
                        activePlayer!==1 ? activePlayer=1 : activePlayer=0;
                        roundScore=0;
                        //score[0]+=roundScore;// curly
                        //score[1]+=roundScore;// curly
                        //document.getElementById('score-0').textContent=score[0];// curly
                        //document.getElementById('score-1').textContent=score[1];// curly

                        document.getElementById('current-0').textContent= roundScore;
                        document.getElementById('current-1').textContent= roundScore;

                        document.querySelector('.player-0-panel').classList.toggle('active');
                        document.querySelector('.player-1-panel').classList.toggle('active');
                        document.querySelector('.dice').style.display="none";
                        */
                        nextPlayer()





             /******************************************
             ****CURLVINS WAY TO ACHIVE THE SAME RESULT****
                        if(activePlayer!==1)
                            {
                                togglePlayer()
                               //score[activePlayer]+=roundScore;
                                roundScore=0;
                                //document.getElementById(`current-${activePlayer}`).textContent=roundScore;
                                //document.getElementById(`score-${activePlayer}`).textContent=score[activePlayer];
                               // document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
                               // activePlayer=1;
                               // document.querySelector(`.player-${activePlayer}-panel`).classList.add('active');

                            }
                        else
                            {
                                togglePlayer()
                                //score[activePlayer]+=roundScore;
                                //roundScore=0;
                                //document.getElementById(`current-${activePlayer}`).textContent=roundScore;
                                //document.getElementById(`score-${activePlayer}`).textContent=score[activePlayer]; 
                               // document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
                               // activePlayer=0;
                               // document.querySelector(`.player-${activePlayer}-panel`).classList.add('active');

                            }


                    }
                function togglePlayer(){
                    //update SCORE and switch player
                    score[activePlayer]+=roundScore;
                    roundScore=0;
                    document.getElementById(`current-${activePlayer}`).textContent=roundScore;
                    document.getElementById(`score-${activePlayer}`).textContent=score[activePlayer];
                    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
                    activePlayer===1?activePlayer=0:activePlayer=1;
                    document.querySelector(`.player-${activePlayer}-panel`).classList.add('active');
                    document.querySelector('.dice').style.display="none";

            **********************************/ 
                        }
        
    
           }



})

///////WHEN THE HOLD BUTTON IS CLICKED//////
document.querySelector(".btn-hold").addEventListener('click',function(){
    if(gamePlaying)
        { 
            
        
            //Add current score to global score and update the UI////////
            score[activePlayer]+=roundScore;
            //roundScore=0;
            //document.getElementById(`current-${activePlayer}`).textContent=roundScore;
            document.getElementById(`score-${activePlayer}`).textContent=score[activePlayer];
            //Check if player won the game////////
            if(score[activePlayer]>=20)
            {
                gamePlaying=false;
                document.getElementById(`name-${activePlayer}`).innerHTML="<strong><em>WINNER !!</em></strong>";
                document.querySelector('.dice').style.display='none';
                document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
                document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
                gamePlaying=false;
                x=alert("click new game button");
                //if(gamePlaying===false){

                    //document.querySelector(".btn-hold").addEventListener('click',x);
                    //document.querySelector(".btn-roll").addEventListener('click',x);

                //}

                //reset()
            }
            else
                {
                     //Switch player /////////
                    //activePlayer===0 ? activePlayer=1 : activePlayer=0;
                    //document.querySelector('.player-0-panel').classList.toggle('active');
                    //document.querySelector('.player-1-panel').classList.toggle('active');
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
    document.querySelector('.dice').style.display="none";
}


///////WHEN THE NEW GAME BUTTON IS CLICKED////
document.querySelector(".btn-new").addEventListener('click',reset);
document.querySelector(".btn-new").addEventListener('click',switcher); 

function reset(){
    roundScore=0;
    score=[0,0];
    document.querySelector('.dice').style.display="none";
    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.getElementById('name-0').textContent="PLAYER 1";
    document.getElementById('name-1').textContent="PLAYER 2";
    //document.querySelector(`.player-0-panel`).classList.add('active')
    //document.querySelector(`.player-0-panel`).classList.remove('active')
    document.querySelector(`.player-0-panel`).classList.remove('winner')
    document.querySelector(`.player-1-panel`).classList.remove('winner')
    //document.querySelector(`.player-1-panel`).classList.remove('active')
    gamePlaying=true;
}

function switcher()
{
    //this makes loser play first in the next game//////
    activePlayer===0?(document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active'),document.querySelector(`.player-1-panel`).classList.add('active'),activePlayer=1):(document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active'),document.querySelector(`.player-0-panel`).classList.add('active'),activePlayer=0);
}
