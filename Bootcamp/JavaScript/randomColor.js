// 버튼을 클릭하면 코드가 실행되어야 하므로 버튼을 클릭하기 위해 querySelector() 을 이용합니다.
const button = document.querySelector('button');

// h1에 랜덤 색상에 대한 값을 표현하기 위해 h1을 지정합니다.
const h1 = document.querySelector('h1');

// 버튼을 클릭했을 때 발생하는 이벤트를 생성합니다. 
button.addEventListener('click', function() {
    const newColor = randomColor();
    // 랜덤 색상을 body 에 적용합니다.
    document.body.style.backgroundColor = newColor;
    // h1을 rgb 값으로 출력하기 위해 innerText로 변경합니다. 랜덤 컬러로 newColor을 넣어줍니다.
    h1.innerText = newColor;

})

// 랜덤 컬러를 만드는 코드들을 하나의 함수로 만듭니다.
const randomColor = () => {
        // rgb(r,g,b) 에 랜덤한 색상이 주어지도록 Math 함수를 이용합니다.
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        // 문자열 리터럴 ``을 이용하여 랜덤 색상을 생성합니다.
        return `rgb(${r}, ${g}, ${b})`;
}