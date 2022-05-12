var elForm = findElement('.js-form')

var todos = [];
var elInput = findElement('.js-input')


function handleAddtodo(evt) {

    evt.preventDefault()
//    var newTodo = {
//        id: 1,
//        title: elInput.value,
//        isCompleted: false


   
//    todos.push(newTodo)

   var elementLI = createEL(`li`);
   var elCheck = createEL(`input`);
   var elP = createEL(`p`)
   var elBox = createEL(`div`)
   var elBtn = createEL(`button`)
   var elBtns = createEL(`button`)
   var elList = findElement(`.js-list`)
   
   elementLI.className = "d-flex align-items-center px-2 py-2 border-bottom"
   elCheck.type = "checkbox"
   elCheck.className = "js-check"
   elP.className = "m-0 ms-1"
   elBox.className = "ms-auto js-box"
   elBtn.className = "btn btn-success mx-1"
   elBtns.className = "btn btn-danger"
   
   elP.textContent = elInput.value;
   elBtn.textContent = `edit`;
   elBtns.textContent = `danger`
   
  elList.appendChild(elementLI)
  elementLI.append(elCheck)
  elementLI.append(elP)
  elementLI.append(elBox)
  elBox.append(elBtn)
  elBox.append(elBtns)

  
   elInput.value = null
   console.log(elList)
}

elForm.addEventListener(`submit`, handleAddtodo)
