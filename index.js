document.getElementById("main").remove();
let newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "YOUR-NAME is the champion";
document.getElementsByTagName('body')[0].appendChild(newHeader);

//probably not always possible, but it makes more sense to me to do it all in one longer line of code, rather than 4 short lines.
document.getElementsByTagName('body')[0].innerHTML += ('<h1 id="biggerVictory">MY-NAME is the ULTIMATE champion</h1>');
