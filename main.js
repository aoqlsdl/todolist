'use strict';

let toDoList = [];
// querySelector : html에서 요소 반환하는 함수

let inputButton = document.querySelector(".input_button");
// addEventListener -> 버튼 클릭하면 addList()라는 함수 작동
inputButton.addEventListener("click", addList);


function addList() {
    let item = document.querySelector(".item").value;
    if (item != null) {
        toDoList.push(item);
        document.querySelector(".item").value = ""; // push한 다음 item의 value를 원상복구
        document.querySelector(".item").focus(); // 커서 깜빡이게 하는 함수
    }

    showList();
}

function showList() {
    let list = "<ul>"
    
    for (let i = 0; i < toDoList.length; i++){
        list += "<li>" + toDoList[i] + "<span class='close' id=" + i + ">" + "\u00D7" + "</span></li>";
    }
    
    list += "</ul>";
    document.querySelector(".todo_list").innerHTML = list;

    let deleteButton = document.querySelectorAll(".close")

    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", deleteItem);
    }
}

function deleteItem() {
    let id = this.getAttribute("id");
    toDoList.splice(id, 1); // splice 함수를 사용하면 지정한 인덱스(id)부터 지정한 숫자(1)만큼 요소를 삭제
    showList();
}

let checkItem = document.querySelector(".todo_list");

checkItem.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
});