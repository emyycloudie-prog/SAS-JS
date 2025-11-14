let button = document.getElementById("btn");
let champ = document.getElementById("champ");
let list = document.querySelector(".list");

button.addEventListener("click",function(e){
    e.preventDefault();
    let hobby = champ.value;
    if(hobby=="") return;
    let li = document.createElement("li");
    li.innerText = hobby;
    list.appendChild(li);
    champ.value = "";
    let unpair = document.querySelectorAll("li:nth-child(odd)");
    unpair.forEach(li => li.style.color = "red");
    let pair = document.querySelectorAll("li:nth-child(even)");
    pair.forEach(li => li.style.color = "blue");

});
