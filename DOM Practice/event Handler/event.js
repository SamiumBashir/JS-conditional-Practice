const makeBtnYellow = document.getElementById(btn-make-yellow);
makeBtnYellow.onclick = makeYellow;
makeBtnYellow.ondblclick = makeWhite;

function makeYellow(){
    document.body.style.backgroundColor = 'yellow' 
}
function makeGray (){
    document.body.style.backgroundColor = 'gray'
}

function makeBlue (){
    document.body.style.backgroundColor = 'blue'
}

const btnList = document.getElementById('list');

btnList.style.textAlign = 'center'