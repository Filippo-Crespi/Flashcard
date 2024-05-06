const create_btn = document.getElementById("create-btn");
const create_flashcard_btn = document.getElementById("create-flashcard-btn");
const show_hide_btn = document.querySelectorAll(".showHideAnswer");
const delete_btn = document.querySelectorAll(".delete");
let flashcard_container = document.querySelector(".cards-container");
const creation_modal = document.querySelector(".card-creation-modal");
let answer_inp = document.getElementById("answer");
let question_inp = document.getElementById("question");

let flashcard_num = 0;

create_btn.addEventListener("click", () => {
  creation_modal.classList.toggle("hide");
});

create_flashcard_btn.addEventListener("click", () => {
  if (question_inp.value == "" || answer_inp.value == "") {
    alert("Fill all the input!");
    return;
  }

  flashcard = document.createElement("div");
  flashcard.innerHTML = `<div class="card" id="card-${flashcard_num}">         <div class="card-text">           <span class="question"></span>           <span class="answer"></span>         </div>         <div class="btn-container">           <button class="showHideAnswer">             <i class="fa-solid fa-eye"></i>           </button>           <button class="delete">             <i class="fa-solid fa-trash"></i>           </button>         </div>       </div>`;
  flashcard.querySelector(".question").innerText = question_inp.value;
  flashcard.querySelector(".answer").innerText = answer_inp.value;
  flashcard_container.append(flashcard);
  flashcard_num++;
  creation_modal.classList.toggle("hide");
});
