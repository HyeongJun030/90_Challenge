// 사용자 입력을 받는 변수 input 생성하기
let input = prompt("What would you like to do?");

// 할 일 저장 공간 만들기
const todos = ['청소하기', '강아지 산책하기'];

// quit 동작 코드 작성하기 : 사용자 입력으로 'quit'나 'q'를 받지 않는다면 계속 질문을 합니다.
while ( input !== '종료하기' && input !== '끝' ) {
    // list 구문 : 현재 작성되어 있는 list를 확인합니다.
    if ( input === '확인하기' ) {
        console.log('************');
        for ( let i = 0; i < todos.length; i++ ) {
            console.log(`${i} : ${todos[i]}`);
        }
        console.log('************');
    } else if ( input === '작성하기' ) {   // new 구문 : prompt를 사용해서 사용자에게 새로운 할 일을 묻습니다.
        const newTodo = prompt('Ok. What is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } else if ( input === '삭제하기' ) {   // delete 구문 : 작성되어 있는 todo를 삭제합니다.
        const index = parseInt(prompt('Ok. Enter an index to delete : '));
        // splice(인덱스, 1) 를 이용하여 사용자가 지정한 인덱스로부터 1개만 지웁니다.
        if ( !Number.isNaN(index) ) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok. deleted ${deleted[0]}`);
        } else { 
            console.log('Unknown index');
        }
    }
    input = prompt("What would you like to do?");
}

// 사용자 입력으로 'quit'를 받으면 앱을 종료합니다.
console.log("OK. Quit The App!")