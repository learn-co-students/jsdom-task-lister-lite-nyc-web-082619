
function addFormInputToTodosList(event){
  let tasks = document.body.querySelector("#tasks");
  tasks.insertAdjacentHTML("beforeend", `
  <li class="taskImput", id="${event.target[0].value}">${event.target[0].value} <button type="button" id="deleteButtonFor${event.target[0].value}">X</button>
  </li>`);
  const deleteButton = tasks.querySelector(`#deleteButtonFor${event.target[0].value}`);
  deleteButton.addEventListener("click", function(event){
    this.parentElement.remove()
    event.preventDefault();
  })
  event.preventDefault();
};

const submitForm = document.body.querySelector("#create-task-form")
const deleteButtons = document.querySelectorAll(".deleteButton")

submitForm.addEventListener("submit", addFormInputToTodosList)

deleteButtons.forEach(function(button, index){
  console.log(index)
  button.addEventListener("click", function(event){
    const taskImpusti = document.querySelectorAll(".taskImput") 
    taskImpusti[index].remove()
    event.preventDefault()
  })
})
