/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Math.random() returns random value  from 0 to 1, need in range multipy by 6 , get 0-5 random no, but they are decimal to convert them to int use math.floor

var scores, roundScore, activePlayer,gamePlaying;
// scores = [0,0]; //score for both players
// roundScore = 0;  //score at on eround at a timefor a player
// activePlayer = 0; 

init();
// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';
// document.getElementById('current-0').textContent = '0';
// document.getElementById('current-1').textContent = '0';
// dice = Math.floor(Math.random()*6)+1;
// console.log(dice);
//to select variable anything from html use queryselelctor and as in css use #for ids

// document.querySelector('#current-'+activePlayer).textContent = dice; //only for plain text change. querySelector can be used to read
// value from html, query selctor can set value, read value, set html and also css

// document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + dice + '</em>'; //can set html in string

// document.querySelector('.dice').style.display = 'none' ; //by setting css it converts it to inline css in html
                                //CSS Property   Value

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        var dice = Math.floor(Math.random()*6)+1;
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block' ;
        diceDom.src = 'dice-'+ dice + '.png';
        document.querySelector('#current-'+activePlayer).textContent = dice;
        if(dice !== 1){
            roundScore += dice;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        }
        else{
           nextplayer();
        }
    }
    
} );

document.querySelector(".btn-hold").addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 100){
            //player won
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying = false;
    
        
        }
        else{
            nextplayer();
        }
    }
});

function nextplayer(){
    activePlayer === 0? activePlayer =1: activePlayer =0;
    roundScore =0;
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent= '0';

    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');
    document.querySelector('.dice').style.display = 'none' ;

}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    gamePlaying = true;
    scores=[0,0];
    activePlayer = 0;
    roundScore = 0;
    document.querySelector('.dice').style.display = 'none' ;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}