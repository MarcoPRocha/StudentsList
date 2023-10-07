const addNewStudent = () => {
    let name = document.getElementById ('inputName');
    let firstName = document.getElementById ('inputfLastName');
    let secondName = document.getElementById ('inputsLastName');
    let li = document.createElement ('li');
    li.innerHTML = `${name.value} ${firstName.value} ${secondName.value}`;
    document.getElementById ('studentList').append(li);
}

