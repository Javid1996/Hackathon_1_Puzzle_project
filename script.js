let puzzlePieces = []
let columns = 3;
let raws = 3;


for(let i=1; i<=columns*raws; i++){
    
    puzzlePieces.push(i.toString())
}

for(let piece of puzzlePieces){

    let element = document.createElement("img");
    element.src = "./img/" + piece + ".jpg";
    let mixed_block = document.getElementById("mixed_block");
    // mixed_block.appendChild(piece);
    mixed_block.appendChild(element);

}




// for (let i = 0; i < puzzlePieces.length; i++) {
//     let element = document.createElement("img").src = "./img/" + puzzlePieces[i] + ".jpg";
//     document.getElementById("mixed_block").append(element);
// }