// 아래 링크의 이미지 1번부터 151번까지를 화면에 출력하는 예제입니다.
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// // 컨테이너를 선택하기 위해 querySelector() 을 사용하고, id 를 선택하기 위해 # 을 이용합니다.
// const container = document.querySelector('#container');

// // 새로운 이미지를 만들기 위해 createElement() 을 사용합니다.
// const newImg = document.createElement('img');

// // 이미지에 주소(src)를 추가합니다.
// newImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

// // 만든 이미지(newImg)를 컨테이너에 추가합니다.
// container.appendChild(newImg);

// -----------------------------------------------------------------------------------------------------
// 위에서 한개의 이미지를 출력하는데 성공했으니 여러 이미지를 출력하는 구문을 작성합니다.

// 컨테이너를 선택하기 위해 querySelector() 을 사용하고, id 를 선택하기 위해 # 을 이용합니다.
const container = document.querySelector('#container');

// 1부터 151까지의 이미지를 출력해야하는데 파일 이름만 다르므로 이미지가 있는 경로만 적어주기 위해 파일명(1.png)은 제거하여 변수에 담습니다.
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

// 1.png ~ 151.png까지 반복문을 통해 나타냅니다.
for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');   // div 태그를 추가하기 위해 createElement() 를 사용합니다.
    pokemon.classList.add('pokemon');   // pokemon 에는 클래스가 지정되어 있지 않으므로 classList.add() 를 통해 클래스를 추가합니다.
    const label = document.createElement('span');   // span 태그를 추가하기 위해 createElement() 를 사용합니다.
    label.innerText = `#${i}`;   // 텍스트를 추가하기 위해 innerText를 사용하고, 백틱(`)을 이용하여 몇번째 이미지인지 번호(i)를 추가합니다.
    const newImg = document.createElement('img');   // 새로운 이미지를 만들기 위해 createElement() 를 사용합니다.
    newImg.src = `${baseURL}${i}.png`;   // 이미지의 기본 경로(baseURL)과 +1씩 증가하는 변수 i 그리고 파일 확장자인 .png를 src에 담습니다.
    pokemon.appendChild(newImg);   // 만들어놓은 div(pokemon)에 img와
    pokemon.appendChild(label);    // span(label)을 추가합니다.
    container.appendChild(pokemon);   // div에 담긴 img와 span 을 컨테이너에 추가합니다.
}