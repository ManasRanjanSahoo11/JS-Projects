const inputField = document.querySelector('.input-field textarea')
const todoLists = document.querySelector('.todolists')
const pendingNum = document.querySelector('.pendingNum')
const clearButton = document.querySelector('.clr-btn')

// console.log(inputField, todoLists, pendingNum, clearButton);

function allTasks() {
    let tasks = document.querySelectorAll('.pending')
    // console.log(tasks);

    pendingNum.textContent = tasks.length === 0 ? 'no' : tasks.length

}

inputField.addEventListener('keyup', (e) => {
    let inputVal = inputField.value.trim()

    if (e.key === 'Enter' && inputVal.length > 0) {
        // console.log('valid');

        let liTag = ` <li class="list pending" onclick='handleStatus(this)'>
        <input type="checkbox" >
        <span class="task" >${inputVal}</span>
        <i class="uil uil-trash-alt" id="deleteIcon" onclick=deleteTask(this)></i>
    </li>`

        todoLists.insertAdjacentHTML('beforeend', liTag)

        inputField.value = ''

        allTasks()
    }
})

function handleStatus(e) {
    let checkbox = e.querySelector('input')
    // console.log(checkbox);

    checkbox.checked = checkbox.checked ? false : true

    e.classList.toggle('pending')

    allTasks()
}

//delete task click delete icon
function deleteTask(e) {
    e.parentElement.remove()
    allTasks()
}

 //delete all todo while click clear button
 clearButton.addEventListener('click', () => {
    todoLists.innerHTML = ''
    allTasks()
})