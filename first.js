 let boxes = document.querySelectorAll(".box");
 let resetbutton= document.querySelector("#reset-button");
 let newGameBtn = document.querySelector("#new-btn");
 let msgContainer = document.querySelector(".msg-container");
 let msg = document.querySelector("#msg");   
 let turn = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
box.addEventListener("click", () =>{
    
    if(turn == true){
        box.innerHTML = "O";
        turn = false;
        box.style.backgroundColor = "blue";
    }
    else{
        box.innerHTML = "X";
        turn = true;
        box.style.backgroundColor = "red";
    }
box.disabled = true;
checkwin();
})
 }
 )


 const checkwin = () => {
    for(let check of winPatterns){
        let pos1Val = boxes[check[0]].innerText;
        let pos2Val = boxes[check[1]].innerText;
        let pos3Val = boxes[check[2]].innerText;

     if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val == pos2Val && pos2Val == pos3Val){
        
        showwinner(pos1Val);
    }
     }

    }
 }

 const showwinner = (winner) => {
    msg.innerText = `congratulation, the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();

}


const resetgame = () => {
    turn = true;
    enabledBoxes();
    msgContainer.classList.add("hide");

}

const disabledBoxes = () => {
    for(let box of boxes){
    box.disabled = true;}
}
const enabledBoxes = () => {
    for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
    box.style.backgroundColor = "";}
}


newGameBtn.addEventListener("click",resetgame);
resetbutton.addEventListener("click",resetgame);