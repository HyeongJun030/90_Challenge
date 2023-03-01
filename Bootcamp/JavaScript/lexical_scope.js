function outer() {
    let members = ['Hong', 'Kim', 'Lee', 'Park', 'cho'];

    function inner() {
        let callMembers = `${members}, 여기야!`;
        console.log(callMembers);
    }
    inner();
}