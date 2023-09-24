let puzzlePieces = []
let columns = 3;
let rows = 3;



for(let i = 0 ; i< columns; i++){
    for( let j = 0 ; j<rows; j++){
        let element= document.createElement("img");
        element.src="./img/whiteScreen.jpg"

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
    element.src = "./img/" + piece + ".jpg";
    
    // mixed_block.appendChild(piece);
    

    element.addEventListener("dragstart",dragStart);
    element.addEventListener('dragend',dragEnd);
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
function dragStart(event) {
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
    passiveElement=activeImg;
    activeElement=passiveImg;
    turns+=1;
    document.getElementById('turnsCounter').innerText = turns;
}





// for (let i = 0; i < puzzlePieces.length; i++) {
//     let element = document.createElement("img").src = "./img/" + puzzlePieces[i] + ".jpg";
//     document.getElementById("mixed_block").append(element);
// }