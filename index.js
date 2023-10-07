const add = () => {
    let nombre = prompt ('Agrega un alumno');
    let name = document.getElementById ('addName');
    let li = document.createElement ('li');
    li.innerHTML = nombre;
    name.append(li);
}