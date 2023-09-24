let puzzlePieces = []
let columns = 3;
let raws = 3;


for(let i=1; i<=columns*raws; i++){
    
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
    let mixed_block = document.getElementById("mixed_block");
    // mixed_block.appendChild(piece);
    mixed_block.appendChild(element);

    element.addEventListener('dragstart',dragStart);
    element.addEventListener('dragend',dragEnd);
    element.addEventListener('dragenter',dragEnter);
    element.addEventListener("dragleave" ,dragLeave);
    element.addEventListener('dragover',dragOver);
    element.addEventListener('dragdrap',dragDrop);



}






// for (let i = 0; i < puzzlePieces.length; i++) {
//     let element = document.createElement("img").src = "./img/" + puzzlePieces[i] + ".jpg";
//     document.getElementById("mixed_block").append(element);
// }