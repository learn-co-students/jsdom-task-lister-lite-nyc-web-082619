document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form")
  const description = document.querySelector("#new-task-description")
  const list = document.querySelector("#list")
  const tasks = document.querySelector("#tasks")

 form.addEventListener("submit", function(event) {
   event.preventDefault()
   tasks.insertAdjacentHTML('beforeend',`<li> ${description.value} <button onclick="this.parentElement.remove()">Delete</button></li>`)
 });


 
})
