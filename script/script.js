// Реализуйте форму добавления карточек пользователей. В форме должны быть поля (Имя, Фамилия и Возраст). При отправке формы должна формироваться карточка с данными пользователя в интерфейсе. Дизайн страницы и расположение элементов могут быть произвольными.
// lesson_15 _honework. Доработать стили в прошлом домашнем задании (карточки пользователей). В выполненом задании должны присваиваться inline стили через js, а так же добавляться классы для карточек пользователя.

const formNode = document.querySelector("#addForm");
const datas = [];
formNode.addEventListener("submit" , event => {
    event.preventDefault(); 
    // отмена дефолтного поведения - отправка формы 
    // event.target ссылка на элемент (ноду) с которым произошло событие 
    const {name, lastname, age} = event.target;
    const data = {
        name: name.value,
        lastname: lastname.value,          
        age: age.value
    };
    datas.push(data);
    // вызываем перерисовку контейнера с пользоватлем
    rerender();
    console.log(datas);
    event.target.reset(); // очиcтка полей ввода - target -
})

function getDataNode (name, lastname, age) {
    const container = document.createElement("div");
    const nameNode = document.createElement("p");
    const lastnameNode = document.createElement("p");
    const ageNode = document.createElement("p");
    
    nameNode.innerText = name;
    lastnameNode.innerText = lastname;
    ageNode.innerText = age;
    container.style.border = "1px solid #ccc";
    container.style.padding = "10px";
    container.style.margin = "10px";   
    
    container.classList.add("userCard");
    
    container.append(nameNode, lastnameNode,  ageNode);    
    return container;

}
function rerender(){
    const container = document.querySelector(".dataContainer");
    container.innerText = '';
    datas.forEach(({name, lastname, age})=> container.append(getDataNode(name, lastname, age)))
    
}
//  datas.forEach(({name, lastname, age})=> container.append(getDataNode(name, 
/* {
    name:
    lastname:
    age: 45
}
    name:Сергей
    lastname: Бальдруев
    age: 45
возвращает     
getDataNode(name, lastname, age)
<div> 
    <p>Сергей<p>
    <p>Бальдруев<p>
    <p>45<p>
</div>
    ========= 
    Добавление в контейнер */