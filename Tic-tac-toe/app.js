
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer  = document.querySelector(".msg-container");


let turnO = true; //playerX, playerO


const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        //console.log("box was click");
        if(turnO){
            box.innerText = "O";
            box.style.color = "blue";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    
    });
});

const checkWinner = () => {
    for(pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val == pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val);
                return;
            }
        }
        if(checkDraw()){
            showDraw();
        }
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulation Winner ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const enableBoxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);


const checkDraw = () => {
    for (let box of boxes) {
        if (box.innerText === "") {
            return false; // If any box is empty, it's not a draw
        }
    }
    return true; // All boxes are filled, so it's a draw
};


const showDraw = () => {
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
};
