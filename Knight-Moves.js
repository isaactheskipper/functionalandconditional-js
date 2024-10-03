function knightMoves(x,y){
    let ax=x+2
    let ay=y+1
    let allcordinates=""
    if(ax>0 && ax<=8 && ay>0 && ay<=8){
        allcordinates=allcordinates+`${ax},${ay}`
    }
    console.log(allcordinates);
}
console.log(knightMoves(4,4));


