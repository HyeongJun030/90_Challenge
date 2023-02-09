// 짝수가 되기 위해서는 수를 2로 나눴을 때 나머지가 0이 되어야 하니까 수 % 2 === 0 를 조건으로 합니다.
const num = 7;

if( num % 2 === 0 ) {   
	console.log('even');
} else if (num % 2 !== 0) {   // num을 2로 나누었을 때 나머지가 0이 아닌 경우 홀수이기 때문에 'odd'를 출력합니다.
    console.log('odd');
}