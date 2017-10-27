console.log("hello");
var idd;
idd = -1;
var Listing = /** @class */ (function () {
    function Listing() {
        this.todos = [];
        this.doneStatus = [];
    }
    Listing.prototype.add = function (list) {
        // this.todos.push(list.todo);
        // this.doneStatus.push(list.done);
        this.todos[++idd] = list.todo;
        this.doneStatus[idd] = list.done;
    };
    Listing.prototype.display = function () {
        console.log(this.todos);
        console.log(this.doneStatus);
    };
    Listing.prototype.createTodoElement = function (todo, id) {
        var div = document.createElement("div");
        div.setAttribute("id", id);
        div.style.margin = "1%";
        var todo_label = document.createElement("input");
        todo_label.type = "text";
        todo_label.setAttribute("class", "form-control");
        todo_label.disabled = true;
        todo_label.setAttribute("id", "lb" + id);
        todo_label.value = todo;
        todo_label.style.marginBottom = "0.2%";
        todo_label.style.marginTop = "0.2%";
        div.appendChild(todo_label);
        /*div.appendChild(document.createElement("br"));*/
        var edit_btn = document.createElement("Button");
        edit_btn.setAttribute("class", "btn btn-info");
        edit_btn.setAttribute("id", "ed" + id);
        edit_btn.value = "Edit Todo";
        edit_btn.height = "5%";
        edit_btn.width = "10%";
        /* edit_btn.style.marginLeft="10px";*/
        edit_btn.innerText = "Edit";
        edit_btn.setAttribute("onClick", "editTodo(" + id + ")");
        div.appendChild(edit_btn);
        var done_btn = document.createElement("Button");
        done_btn.setAttribute("class", "btn btn-success");
        done_btn.setAttribute("id", "dn" + id);
        done_btn.value = "Mark As Done";
        done_btn.height = "5%";
        done_btn.width = "10%";
        done_btn.style.marginLeft = "1%";
        done_btn.innerText = "Mark As Done";
        done_btn.setAttribute("onClick", "markAsDone(" + id + ")");
        div.appendChild(done_btn);
        var delete_btn = document.createElement("Button");
        delete_btn.setAttribute("id", "del" + id);
        delete_btn.setAttribute("class", "btn btn-danger");
        delete_btn.value = "Delete Todo";
        delete_btn.height = "5%";
        delete_btn.width = "10%";
        delete_btn.style.marginLeft = "1%";
        delete_btn.innerText = "Delete";
        delete_btn.setAttribute("onClick", "deleteTodo(" + id + ")");
        div.appendChild(delete_btn);
        //console.log(`id of the div ${id}`);
        return div;
    };
    return Listing;
}());
var todo_list = new Listing();
function addTodo() {
    var input = document.getElementById("todo").value;
    /*console.log(`input = ${input}`);*/
    if (input.trim() != "") {
        todo_list.add({
            todo: input,
            done: false
        });
        displayTask(input);
    }
    else {
        alert("Empty Todo Cannot be Inserted..!!");
    }
}
function displayTask(todo) {
    todo_list.display();
    var div = todo_list.createTodoElement(todo, idd);
    var parent = document.getElementById("parent");
    parent.appendChild(div);
}
function markAsDone(id) {
    var done_lbl = document.getElementById("lb" + id);
    todo_list.doneStatus[id] = true;
    console.log(todo_list.doneStatus);
    console.log("Label selected : " + done_lbl);
    done_lbl.style.textDecoration = "line-through";
    document.getElementById("dn" + id).remove();
    document.getElementById("ed" + id).remove();
}
function deleteTodo(id) {
    console.log(id);
    document.getElementById("" + id).remove();
    delete todo_list.todos[id];
    delete todo_list.doneStatus[id];
    console.log(todo_list);
}
function editTodo(id) {
    var new_todo = document.getElementById("lb" + id);
    var edit_btn = document.getElementById("ed" + id);
    if (edit_btn.innerText == "Edit") {
        new_todo.disabled = false;
        document.getElementById("dn" + id).disabled = true;
        edit_btn.innerText = "Update";
    }
    else if (edit_btn.innerText == "Update") {
        if (new_todo.value.trim() != "") {
            new_todo.disabled = true;
            document.getElementById("dn" + id).disabled = false;
            edit_btn.innerText = "Edit";
            todo_list.todos[id] = new_todo.value;
            console.log(todo_list.todos);
        }
        else {
            alert("Empty Todo Cannot be Inserted..!!");
        }
    }
}
