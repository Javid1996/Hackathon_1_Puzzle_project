let puzzlePieces = []
let columns = 9;
let rows = 6;



for(let i = 0 ; i< columns; i++){
    for( let j = 0 ; j<rows; j++){
        let element= document.createElement("img");
        element.src="./img/img1/whiteScreen.jpg"

        element.addEventListener("dragstart",dragStart);
        element.addEventListener('dragend',dragEnd);
        element.addEventListener('dragenter',dragEnter);
        element.addEventListener("dragleave" ,dragLeave);
        element.addEventListener('dragover',dragOver);
        element.addEventListener('drop',dragDrop);
        
        document.getElementById('block').append(element);
    }
}


for(let i=1; i<=columns*rows; i++){
    
    puzzlePieces.push(i.toString())
}

for(let i = 0; i<puzzlePieces.length; i++ ){
    
    
    let k= Math.floor(Math.random() * puzzlePieces.length); //9-0
    let temp ;

    temp = puzzlePieces[i];
    puzzlePieces[i]=puzzlePieces[k];
    // puzzlePieces[j]=puzzlePieces[k]
    puzzlePieces[k]=temp;
}


for(let piece of puzzlePieces){

    let element = document.createElement("img");
    element.src = "./img/img3/" + piece + ".jpg";
    
    // mixed_block.appendChild(piece);
    

    element.addEventListener("dragstart",dragStart);
    element.addEventListener("dragend",dragEnd);
    element.addEventListener('dragenter',dragEnter);
    element.addEventListener("dragleave" ,dragLeave);
    element.addEventListener('dragover',dragOver);
    element.addEventListener('drop',dragDrop);

    // element.addEventListener("dragstart", dragStart); 
    // element.addEventListener("dragover", dragOver);   
    // element.addEventListener("dragenter", dragEnter); 
    // element.addEventListener("dragleave", dragLeave); 
    // element.addEventListener("dragdrop", dragDrop);       
    // element.addEventListener("dragend", dragEnd);      


    let mixed_block = document.getElementById("mixed_block");
    mixed_block.appendChild(element);


}
let activeElement;
function dragStart() {
    activeElement=this; 
}
function dragOver(event){
    event.preventDefault()
}
function dragEnter(event){
    event.preventDefault()
}
function dragLeave(){

} 


let passiveElement ;
function dragDrop(){
    passiveElement=this;
}

let turns = 0;
function dragEnd(){
    let activeImg= activeElement.src;
    let passiveImg= passiveElement.src;
    activeElement.src=passiveImg;
    passiveElement.src=activeImg;
    
    turns+=1;
    document.getElementById('turnsCounter').innerText = turns;
}

let time = 300;

let countDownElement = document.getElementById('countdown');

setInterval(updateCountDown,1000);
function updateCountDown(){
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds<10 ? "0" + seconds: seconds;
    countDownElement.innerHTML = `${minutes}:${seconds}`
    time--;
    !time ? alert('Time is up'):''; 
}


// for (let i = 0; i < puzzlePieces.length; i++) {
//     let element = document.createElement("img").src = "./img/" + puzzlePieces[i] + ".jpg";
//     document.getElementById("mixed_block").append(element);
// }