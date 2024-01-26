// Реализуйте форму добавления карточек пользователей. В форме должны быть поля (Имя, Фамилия и Возраст). При отправке формы должна формироваться карточка с данными пользователя в интерфейсе. Дизайн страницы и расположение элементов могут быть произвольными.

const formNode = document.querySelector("#addForm");
const datas = [];
formNode.addEventListener("submit" , (event) => {
    event.preventDefault();
    const {lastname, name, age} = event.target;
    const data = {
        lastname: lastname.value,
        name: name.value,
        age: age.value
    };
    datas.push(data);
    rerender();
    console.log(datas);
    event.target.reset(); 
})

function getDataNode (lastname, name, age) {
    const container = document.createElement("div");
    const lastnameNode = document.createElement("p");
    const nameNode = document.createElement("p");
    const ageNode = document.createElement("p");
    lastnameNode.innerText = lastname;
    nameNode.innerText = name;
    ageNode.innerText = age;
    container.append(lastnameNode, nameNode, ageNode);
    return container;

}
function rerender(){
    const container = document.querySelector("#dataContainer");
    container.innerText = '';
    datas.forEach(({lastname, name, age})=> container.append(getDataNode(lastname, name, age)))
}