const settings = document.querySelector(".settings");
const settingsButton = document.querySelector(".settingMenu");
const settingsExit = document.querySelector(".exitSettings img");
const toDo = document.querySelector(".todoList");
const toDoButton = document.querySelector(".todoMenu");
const todoExit = document.querySelector(".exitTodo img");

export function popout(){
    settingsButton.addEventListener("click",()=>{
        settings.classList.remove("hiddenLeft");
    });

    toDoButton.addEventListener("click",()=>{
        toDo.classList.remove("hiddenRight");
    });

    settingsExit.addEventListener("click",()=>{
       settings.classList.add("hiddenLeft");
    });

    todoExit.addEventListener("click",()=>{
       toDo.classList.add("hiddenRight");
    });
}





