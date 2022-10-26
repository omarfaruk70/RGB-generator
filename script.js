/**
 * project requirements:
 * - change the background color by generating random rgb color by clicking a button.
 */
 window.onload = () =>{
    main();
};

// creat the Background color changes function
function main(){
    const root = document.querySelector('body');
    const btn  = document.getElementById('change-btn');
    btn.addEventListener('click', function(){
        let changeBg = generateRGBColor();
        root.style.backgroundColor =  changeBg;
    });
};


// creating a color generator function
function generateRGBColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
};