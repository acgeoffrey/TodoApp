"use strict";
console.log("Script is running");

//Open add task window
document.querySelector(".cts-btn").addEventListener("click", function () {
  document.querySelector(".create-todo-full").classList.toggle("hidden");
});

//Close add task window
document.querySelector(".close-btn").addEventListener("click", function () {
  document.querySelector(".create-todo-full").classList.toggle("hidden");
});

const tagEl = document.getElementsByClassName("tags");
for (let i = 0; i < tagEl.length; i++) {
  if (tagEl[i].textContent == "personal") {
    tagEl[i].style.backgroundColor = "green";
  }
  if (tagEl[i].textContent == "work") {
    tagEl[i].style.backgroundColor = "blue";
  }
  if (tagEl[i].textContent == "school") {
    tagEl[i].style.backgroundColor = "purple";
  }
  if (tagEl[i].textContent == "Others") {
    tagEl[i].style.backgroundColor = "brown";
  }
}

const checkBoxEl = document.getElementsByClassName("check-box");
const deleteEl = document.getElementsByClassName("delete-icon");
for (let j = 0; j < checkBoxEl.length; j++) {
  checkBoxEl[j].addEventListener("change", function () {
    if (checkBoxEl[j].checked) {
      console.log("true");
      if (deleteEl[j].classList.contains("hidden")) {
        deleteEl[j].classList.toggle("hidden");
      }
    }
  });
}
