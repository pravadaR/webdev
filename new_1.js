"use strict";

const todoForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    return;
  }

  const listItem = document.createElement("li");
  listItem.className = "todo-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "todo-check";

  const taskSpan = document.createElement("span");
  taskSpan.className = "todo-text";
  taskSpan.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "todo-delete";
  deleteBtn.textContent = "Delete";

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      listItem.classList.add("completed");
    } else {
      listItem.classList.remove("completed");
    }
  });

  deleteBtn.addEventListener("click", function () {
    listItem.remove();
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteBtn);
  todoList.appendChild(listItem);

  taskInput.value = "";
  taskInput.focus();
}

addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  addTask();
});

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask();
});
