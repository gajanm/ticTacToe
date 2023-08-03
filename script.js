const board = document.querySelector(".board");
const restart = document.querySelector("#restart")
const displayText = document.querySelector(".display-text")
const start = document.querySelector("#start");
const popUp = document.querySelector(".popup");
const submit = document.querySelector("#submit");
const form = document.querySelector(".form")
const exit = document.querySelector("#exit")





exit.addEventListener("click", ()=> {
    popUp.style.display = "none";
    form.reset();
})

start.addEventListener("click", ()=> {

        popUp.style.display = "flex";
        popUp.style.justifyContent ="center";
        popUp.style.alignItems = "center";
})

    
let playerList = [];
    
let player1 = null;
 let player2 = null;

let gameBoardArray = [];

for (let i=0; i<9; i++){
    gameBoardArray.push(" ");
}



const playerFactory = (name, marker) =>{
    return {name, marker};
}


form.addEventListener("submit", (event)=> {
        
    const firstPlayerName = document.querySelector("#firstPlayer");
    const secondPlayerName = document.querySelector("#secondPlayer");
    console.log(firstPlayerName.innerHTML);

    let player1Mark;
    let player2Mark;

    if(document.getElementById("X").checked){
        player1Mark="X";
    }
    if (document.getElementById("O").checked){
        player1Mark="O";
     }
    if (document.getElementById("X2").checked){
        player2Mark="X";
    }
    if (document.getElementById("O2").checked){
        player2Mark="O";
    }

    
    
    player1 = playerFactory(firstPlayerName.value, player1Mark);
    player2 = playerFactory(secondPlayerName.value, player2Mark)
    playerList.push(player1);
    playerList.push(player2);
    

    event.preventDefault();

    form.reset();
    popUp.style.display = "none";
    displayText.innerHTML = `${player1.name} can start the game by clicking a square!`

})

    

    const gameBoardCreation = (() =>{
        for (let i = 0; i < gameBoardArray.length; i++){
                
            const cell=document.createElement("div");
            cell.innerHTML = gameBoardArray[i];
            cell.style.width="96px";
            cell.style.height="96px";
            cell.style.border="2px solid black";
            cell.style.display ="flex";
            cell.style.justifyContent="center";
            cell.style.alignItems="center";
            cell.setAttribute("data-index", i);
           
            board.appendChild(cell).className="cell";                        
                
            }
    })();

        


            const cells = document.querySelectorAll(".cell");
            let currentPlayer;
            let count = 0;

            const getPlayer = () => {
                
                if (currentPlayer == null){
                    currentPlayer = playerList[0];
                
                }
                else if (currentPlayer == playerList[0]){
                    currentPlayer = playerList[1];

                }
                else if (currentPlayer == playerList[1]){
                    currentPlayer = playerList[0];
                }
                
                return currentPlayer;

            }

            
            

            
        const gameChecker = (() => {
            let x;
                if (count%2 == 0){
                    x= (`It's ${player1.name}'s turn`);
                } 
                if(count%2 == 1){
                    x= (`It's ${player2.name}'s turn`);
                }

                if ((gameBoardArray[0] == gameBoardArray[1] && gameBoardArray[1] == gameBoardArray[2])){
                    for (let i=0; i<2; i++){
                        if (playerList[i].marker == gameBoardArray[0]){
                            x= (playerList[i].name + " wins. Click restart to play again!");
                        }
                    }
                }
                 if (gameBoardArray[3] == gameBoardArray[4] && gameBoardArray[4] == gameBoardArray[5]){
                    for (let i=0; i<2; i++){
                        if (playerList[i].marker == gameBoardArray[3]){
                            x= (playerList[i].name + " wins. Click restart to play again!");
                        }
                    }
                }
                 if (gameBoardArray[6] == gameBoardArray[7] && gameBoardArray[7] == gameBoardArray[8]){
                    for (let i=0; i<2; i++){
                        if (playerList[i].marker == gameBoardArray[6]){
                            x= (playerList[i].name + " wins. Click restart to play again!");
                        }
                    }
                }
                 if (gameBoardArray[0] == gameBoardArray[3] && gameBoardArray[3] == gameBoardArray[6]){
                    for (let i=0; i<2; i++){
                        if (playerList[i].marker == gameBoardArray[0]){
                            x= (playerList[i].name + " wins. Click restart to play again!");
                        }
                    }
                }
                 if (gameBoardArray[1] == gameBoardArray[4] && gameBoardArray[4] == gameBoardArray[7]){
                    for (let i=0; i<2; i++){
                        if (playerList[i].marker == gameBoardArray[1]){
                            x= (playerList[i].name + " wins. Click restart to play again!");
                        }
                    }
                }
                 if (gameBoardArray[2] == gameBoardArray[5] && gameBoardArray[5] == gameBoardArray[8]){
                    for (let i=0; i<2; i++){
                        if (playerList[i].marker == gameBoardArray[2]){
                            x= (playerList[i].name + " wins. Click restart to play again!");
                        }
                    }
                }
                 if (gameBoardArray[0] == gameBoardArray[4] && gameBoardArray[4] == gameBoardArray[8]){
                    for (let i=0; i<2; i++){
                        if (playerList[i].marker == gameBoardArray[0]){
                            x= (playerList[i].name + " wins. Click restart to play again!");
                        }
                    }
                }
                 if (gameBoardArray[2] == gameBoardArray[4] && gameBoardArray[4] == gameBoardArray[6]){
                    for (let i=0; i<2; i++){
                        if (playerList[i].marker == gameBoardArray[2]){
                            x= (playerList[i].name + " wins. Click restart to play again!");
                        }
                    }
                }
                 if (count == 9){
                    x= ("It is a tie!");
                }

                return x;

                
                
                
                
            });
            
                cells.forEach((one) => {
                    
                    one.addEventListener("click", () => {
                        if (one.innerHTML != "X" && one.innerHTML != "O" && displayText.innerHTML.includes("wins") == false){
                            
                            one.innerHTML = getPlayer().marker;
                            gameBoardArray[one.getAttribute("data-index")] = one.innerHTML;
                            count++; 
                            displayText.innerHTML = (gameChecker());
                        }
                } ) } ) 


                restart.addEventListener("click", ()=>{
                    location.reload();
                    cells.forEach((one) => {
                        one.innerHTML = " ";
                        for (let element in gameBoardArray){
                            gameBoardArray[element] = " ";
                        }
                        count = 0;
                    })
                })
                
        
    
   
                








            
            
   