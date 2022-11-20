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
        box.style.backgroundColor = "black";
    })
});