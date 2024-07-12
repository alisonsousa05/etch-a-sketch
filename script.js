const container = document.querySelector(".secondContainer");
const resizeButton = document.querySelector("button[name='resize']");
const clearButton = document.querySelector("button[name='clear']");


let nGrid = 16;

for (let i = 0; i<=15; i++){
    const div = document.createElement("div");
    div.className = "container-y-axis"
    for (let j=0;j<=15;j++){
        const divX = document.createElement("div");
        divX.className = "container-x-axis";
        div.append(divX);
    }
    container.append(div);

}
function randomColor(){
    const a = Math.random()*256,
    b = Math.random()*256,
    c = Math.random()*256;
    return `rgb(${a}, ${b}, ${c})`;
}
container.addEventListener("mouseover", (event) =>{
    const target = event.target;
    if(target === container){
        return;
    }
    else{
        target.style.backgroundColor = randomColor();
    }
})

clearButton.addEventListener("click", () =>{
    const divX = document.querySelectorAll('.container-x-axis');
    divX.forEach( (node) =>{
        node.removeAttribute("style")
    });

});
function questionOneHundred(){
    const number = prompt("The number must be smaller than 100");
    if (number > 100){
        questionOneHundred();
    }
    return number;
}
function setSize(){
    let number = prompt("What's the number of squares you want?", "16");
    if (number>100){
        number = questionOneHundred();
    }
    return number
}

function resize(numberOfSquares){
    const divY = document.querySelectorAll('.container-y-axis');
    divY.forEach( (node) =>{
        const divX = document.querySelectorAll('.container-x-axis');
        divX.forEach( (xNode) =>{
            xNode.remove();
        })
        node.remove();
    })
    for (let i = 0; i<=numberOfSquares-1; i++){
        const div = document.createElement("div");
        div.className = "container-y-axis"
        for (let j=0;j<=numberOfSquares-1;j++){
            const divX = document.createElement("div");
            divX.className = "container-x-axis";
            div.append(divX);
        }
        container.append(div);
    
    }


}
resizeButton.addEventListener("click", () =>{
    const size = parseInt(setSize())
    resize(size);

})
