function addHtml (){
    let escrito = document.getElementById("input1");
    let objetoDiv = document.getElementById("contenedor");
    let p = document.createElement("li");
    p.innerHTML = escrito.value;
    escrito.value = "";//limpiar
    objetoDiv.appendChild(p);
    }
function addHtml2 (){
    let escrito1 = document.getElementById("input2");
    let objetoDiv1 = document.getElementById("contenedor2");
    let p1 = document.createElement("li");
    p1.innerHTML = escrito1.value;
    escrito1.value = "";//limpiar
    objetoDiv1.appendChild(p1);
    }
function addHtml3 (){
    let escrito3 = document.getElementById("input3");
    let objetoDiv3 = document.getElementById("contenedor3");
    let p3 = document.createElement("li");
    p3.innerHTML = escrito3.value;
    escrito3.value = "";//limpiar
    objetoDiv3.appendChild(p3);
    }

var mensaje = document.getElementById("mensaje");
var textarea = document.getElementById("textarea");
var button = document.getElementById("button");

button.addEventListener("click", function(){
    var newMessage = document.createElement("li");
    newMessage.innerHTML = textarea.value;
    mensaje.appendChild(newMessage);
    textarea.value = "";
});