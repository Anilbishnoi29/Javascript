// const todoBtn = document.querySelector("#todo-btn");
// const todoLists = document.querySelector(".todo-list");
// const allBtn = document.querySelectorAll('.todobtnsall button');

// todoBtn.addEventListener('click',(e) => {
//     e.preventDefault();
//     const todoInput = document.querySelector("#todo-input").value;
//     if (todoInput !== "") {
//         todoLists.insertAdjacentHTML('beforeend',`<li>${todoInput} <button onclick = "removeTodo(event);" > x</button> </li>`);
//     } else {
//         alert("Task can't be blank");
//     }
//     document.querySelector("#todo-input").value = "";

// });
// function removeTodo(event) {
//     event.target.parentNode.remove();
// }
// for (let btn of allBtn) {
//     btn.addEventListener('click',function () {
//         console.log(this);
//     });
// }

const mouseBG = document.querySelector(".mouse");
document.addEventListener('mousemove',function (event) {
    mouseBG.style.cssText = `left:${event.clientX}px;  top:${event.clientY}px;`;
    // mouseBG.style.cssText = "left:" + event.clientX + "px; top:" + event.clientY + "px;";
    // mouseBG.style.cssText = ``;

    console.log(
        "clientX: ",event.clientX,
        "clientY:",event.clientY);
});