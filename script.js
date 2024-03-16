
const tasks_data = {
  
}






// add new task
const newtaskbutton = document.getElementById("new-task-button");
const popup = document.querySelector(".hide-popup")
newtaskbutton.addEventListener("click", function() {
  popup.classList.remove("hide-popup");
  popup.classList.add("show-popup");
})


function reverseDateString(dateString) {
  const dateParts = dateString.split('-');
  
  const reversedParts = dateParts.reverse();

  const reversedString = reversedParts.join('-');

  return reversedString;
}

// close popup
const close_popup_button = document.getElementById("close-popup-button");
close_popup_button.addEventListener("click", function() {
  popup.classList.remove("show-popup");
  popup.classList.add("hide-popup");
  let nameinput = document.querySelector(".nameInput");
  let dateinput = document.querySelector(".dateInput");
  let timeinput = document.querySelector(".timeInput");
  let priorityinput = document.querySelector(".priorityInput");
  let fill_text = document.querySelector(".fill-input-text")
  nameinput.value = "";
  dateinput.value = "";
  timeinput.value = "";
  priorityinput.value = 1;
  fill_text.remove();
})


// create button logic
const create_popup_button = document.getElementById("create-popup-button");
const task_div = document.querySelector(".task-container");
create_popup_button.addEventListener("click", function() {

  let nameinput = document.querySelector(".nameInput");
  if (nameinput.value === "") {
    if (popup.querySelector("p")) {
      return;
    }
    let fill_para = document.createElement("p");
    fill_para.append("please type the task name");
    fill_para.classList.add("fill-input-text")
    popup.append(fill_para)
    return;
  }
  let dateinput = document.querySelector(".dateInput");
  let timeinput = document.querySelector(".timeInput");
  let priorityinput = document.querySelector(".priorityInput");

  let new_task_container = document.createElement("div");
  new_task_container.classList.add("new-task-container");

  let task_name_container = document.createElement("p");
  task_name_container.append(nameinput.value)
  task_name_container.classList.add("task-name-container");

  let task_info_container = document.createElement("div");
  let task_info1 = document.createElement("p");
  task_info1.className = "task-info"
  let icon1 = document.createElement("i");
  icon1.className = "fa-regular fa-calendar fa-2x"
  task_info1.append(icon1)
  if (dateinput.value === "") {
    task_info1.append("Not Set")
  } else {
    task_info1.append(reverseDateString(dateinput.value));
  }
  

  let task_info2 = document.createElement("p");
  task_info2.className = "task-info"
  let icon2 = document.createElement("i");
  icon2.className = "fa-regular fa-clock fa-2x"
  task_info2.append(icon2)
  if (timeinput.value === "") {
    task_info2.append("Not Set")
  } else {
    task_info2.append(timeinput.value)
  }
  

  let task_info3 = document.createElement("p");
  task_info3.className = "task-info"
  let icon3 = document.createElement("i");
  icon3.className = "fa-solid fa-circle-exclamation fa-2x"
  task_info3.append(icon3)
  if (priorityinput.value === "") {
    task_info3.append("Not Set")
  } else {
    task_info3.append(priorityinput.value)
  }
  

  task_info_container.append(task_info1)
  task_info_container.append(task_info2)
  task_info_container.append(task_info3)
  task_info_container.classList.add("task-info-container");

  let new_checkbox = document.createElement("input");
  new_checkbox.type = "checkbox";
  new_checkbox.classList.add("new-checkbox");

  new_task_container.append(task_name_container);
  new_task_container.append(task_info_container);
  new_task_container.append(new_checkbox);

  task_div.append(new_task_container)



  popup.classList.remove("show-popup");
  popup.classList.add("hide-popup");

  nameinput.value = "";
  dateinput.value = "";
  timeinput.value = "";
  priorityinput.value = 1;
});




// task settings tab open
