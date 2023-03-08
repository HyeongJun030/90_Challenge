const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for(let button of buttons) {
    button.addEventListener('click', function () {
        // button.style.backgroundColor = randomColor();
        this.style.backgroundColor = randomColor();   // this 를 사용하여 이벤트를 적용하는 대상을 대신할 수 있습니다.
    })
}