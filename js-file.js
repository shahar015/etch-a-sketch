const container = document.querySelector('.container');
gen(16);
reload();

function gen(num) {
    for (let i = 0; i < num * num; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.height = (1000 / num) + "px";
        box.style.width = (1000 / num) + "px";
        box.style.backgroundColor = "transparent";
        container.appendChild(box);

    }
}

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
    container.innerHTML = "";
    let num=101;
    while(num<0||num>100)
    {
    num =Number(prompt("size?"));
    if(num<0||num>100)
    alert("Choose a number between 1-100");
}
    gen(num);
    reload();
});

function reload() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener('mouseover', (e) => {
                const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                box.style.backgroundColor = "#" + randomColor;

        });
    });
}
