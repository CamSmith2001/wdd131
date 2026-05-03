
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.getElementById("content").style.backgroundColor = "black";
        document.getElementById("box").style.backgroundColor = "black";
        document.getElementById("box").style.border = "2px solid white";
        const heading = document.querySelector("h1");
        heading.style.color = "white";
        const byui = document.querySelector("h4");
        byui.style.color = "lightblue";
        const para = document.querySelector("p");
        para.style.color = "white";
        const italic = document.querySelector("i");
        italic.style.color = "white";
        const items = document.getElementsByClassName("list-item");

        for (let i = 0; i < items.length; i++) {
            items[i].style.color = "white";
        }

        const myImg = document.querySelector("#logo");
        myImg.setAttribute("src", "byui-logo-white.png");
    } else {
        // code for changes to colors and logo
        document.getElementById("content").style.backgroundColor = "#ddd";
        document.getElementById("box").style.backgroundColor = "white";
        document.getElementById("box").style.border = "2px solid black";
        const heading = document.querySelector("h1");
        heading.style.color = "black";
        const byui = document.querySelector("h4");
        byui.style.color = "blue";
        const para = document.querySelector("p");
        para.style.color = "black";
        const italic = document.querySelector("i");
        italic.style.color = "black";
        const items = document.getElementsByClassName("list-item");

        for (let i = 0; i < items.length; i++) {
            items[i].style.color = "black";
        }

        const myImg = document.querySelector("#logo");
        myImg.setAttribute("src", "byui-logo-blue.webp");
    }
}           
                    