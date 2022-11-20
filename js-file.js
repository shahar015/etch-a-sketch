const container = document.querySelector('.container');
for(let i=0; i<256; i++)
{
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
}

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.addEventListener('mouseover',(e) =>{
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        box.style.backgroundColor = "#" + randomColor;
    })
});