
let action = document.querySelector("button");

action.addEventListener("click", function(){

    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    let color = `rgb(${red}, ${green}, ${blue})`;

    let box = document.querySelector(".box");
    box.style.backgroundColor = color;

    let h1 = document.querySelector("h1");
    h1.innerText = color;
    
});
