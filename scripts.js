var counter = 0;
function toggleComplete(buttonId) {
    var button = document.getElementById(buttonId);
    var status = button.innerHTML;
    if (status === 'Incomplete'){
        document.getElementById(buttonId).innerHTML = 'Complete';
    }
    else {
        document.getElementById(buttonId).innerHTML = 'Incomplete';
    }
}
function addbr(){
    document.body.appendChild(document.createElement('br'));
    document.body.appendChild(document.createElement('br'));
}
function createTask(){
    var inputField = document.createElement("input");
    inputField.type = "text"; 
    inputField.placeholder = "Task"; 
    inputField.id = "myInput" + counter;

    var button = document.createElement("button");
    button.id = counter;
    button.innerHTML = "Incomplete";
    button.onclick = function(){
        toggleComplete(button.id);
    }
    document.body.appendChild(button);
    
    document.body.appendChild(inputField);
    counter = counter +1;
}