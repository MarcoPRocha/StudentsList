
const newStudent = () => {
    let name = document.getElementById('studentName');
    let lastName = documet.getElementById('lastName');
    let li = document.createElement('li');
    li.innerHTML = `${name.value} ${lastName.value}`;
    document.getElementById('addName').append(li);

}