const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "ToDo",
};

// function  add task

function addTask(add) {
  list[add] = "";
  console.log(list);
}
addTask("have a walk");

// function delete task
function deleteTask(deleted) {
  delete list[deleted];
  console.log(list);
}
deleteTask("have a walk");

//function show list
function showList() {
  for (let key in list) {
    switch (list[key]) {
      case "ToDo":
        console.log(`ToDo: ${key}`);
        break;
      case "In Progress":
        console.log(`In Progress: ${key}`);
        break;
      case "Done":
        console.log(`Done: ${key}`);
        break;
    }
  }
}

showList();

// function change status
function changeStatus(task, status) {
  if (task in list) {
    list.task = status;
    console.log(`${task} : ${(list.task = status)} `);
  }
}
changeStatus("write a post", "in progress");
