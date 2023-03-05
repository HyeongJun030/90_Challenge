const person = {
    name : 'Hong',
    age : 25,
    phone : '01012345678',
    who() {
        console.log(`그 사람의 나이는 ${this.age}세 입니다.`);   // 특성에 접근하기 위해서 this 키워드를 사용합니다.
    }
}