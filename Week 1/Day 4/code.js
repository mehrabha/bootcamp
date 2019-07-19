console.log("Hello")

// 1
document.getElementById("container");

// 2
document.querySelector("#container");

// 3
document.getElementsByClassName("second");

// 4
document.getElementsByTagName("ul")[0].getElementsByClassName("third");

// 5
document.getElementById("container").innerHTML = "Hello"

// 6
document.getElementsByClassName("footer")[0].className += " main"

// 6
document.getElementsByClassName("footer")[0].className += " main"

// 7
document.getElementsByClassName("footer")[0].className ="footer"

// 8
let elem = document.createElement("li");

// 9
let txt = document.createTextNode("four");
elem.appendChild(txt);

// 10
document.getElementsByTagName("ul")[0].appendChild(elem);

// 12
let arr = document.getElementsByTagName("ol")[0].getElementsByTagName("li")
for (let i = 0; i < arr.length; i++) { arr[i].style.color = "green"; }

// 13
document.getElementsByClassName("footer")[0].remove();
