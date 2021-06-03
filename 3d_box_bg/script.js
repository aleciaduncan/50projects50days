const boxesContainter = document.getElementById('boxes');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => boxesContainter.classList.toggle('big'));

function createBoxes(){
    for(let i = 0; i < 4; i++){
        console.log(i);
        for(let j = 0; j < 4; j++){
            console.log(j);
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
            boxesContainter.appendChild(box);
        }
    }
}

createBoxes();