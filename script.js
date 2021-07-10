let menu = document.querySelector(".menu");
let dropdown = document.querySelector(".menu-colors");

menu.addEventListener('click', function(e) {
    dropdown.classList.toggle("show");
    document.querySelector(".menu").style.transition = "all 2s";
})

let bodyColor = document.querySelector(".body-color");

//home
let home = document.querySelector("#home-btn");

home.addEventListener('click', function(e) {
    bodyColor.classList.remove("background-orange");
    bodyColor.classList.remove("background-pink");
    bodyColor.classList.remove("background-green");
    bodyColor.classList.remove("background-blue");
    bodyColor.classList.remove("background-purple");
    bodyColor.classList.add("background-home");
   document.getElementById("text").innerHTML = "Home";
})

//orange
let orange = document.querySelector("#orange-btn");

orange.addEventListener('click', function(e) {
    bodyColor.classList.remove("background-home");
    bodyColor.classList.remove("background-pink");
    bodyColor.classList.remove("background-green");
    bodyColor.classList.remove("background-blue");
    bodyColor.classList.remove("background-purple");
    bodyColor.classList.add("background-orange");
    document.getElementById("text").innerHTML = "Orange";
})

//pink
let pink = document.querySelector("#pink-btn");

pink.addEventListener('click', function(e) {
    bodyColor.classList.remove("background-orange");
    bodyColor.classList.remove("background-home");
    bodyColor.classList.remove("background-green");
    bodyColor.classList.remove("background-blue");
    bodyColor.classList.remove("background-purple");
    bodyColor.classList.add("background-pink");
    document.getElementById("text").innerHTML = "Pink";
})

//green
let green = document.querySelector("#green-btn");

green.addEventListener('click', function(e) {
    bodyColor.classList.remove("background-orange");
    bodyColor.classList.remove("background-pink");
    bodyColor.classList.remove("background-home");
    bodyColor.classList.remove("background-blue");
    bodyColor.classList.remove("background-purple");
    bodyColor.classList.add("background-green");
    document.getElementById("text").innerHTML = "Green";
})

//blue
let blue = document.querySelector("#blue-btn");

blue.addEventListener('click', function(e) {
    bodyColor.classList.remove("background-orange");
    bodyColor.classList.remove("background-pink");
    bodyColor.classList.remove("background-green");
    bodyColor.classList.remove("background-home");
    bodyColor.classList.remove("background-purple");
    bodyColor.classList.add("background-blue");
    document.getElementById("text").innerHTML = "Blue";
})

//purple
let purple = document.querySelector("#purple-btn");

purple.addEventListener('click', function(e) {
    bodyColor.classList.remove("background-orange");
    bodyColor.classList.remove("background-pink");
    bodyColor.classList.remove("background-green");
    bodyColor.classList.remove("background-blue");
    bodyColor.classList.remove("background-home");
    bodyColor.classList.add("background-purple");
    document.getElementById("text").innerHTML = "Purple";
})

//home
document.addEventListener('keypress', function(e) {
    if (e.key == '1') {
        bodyColor.classList.remove("background-orange");
        bodyColor.classList.remove("background-pink");
        bodyColor.classList.remove("background-green");
        bodyColor.classList.remove("background-blue");
        bodyColor.classList.remove("background-purple");
        bodyColor.classList.add("background-home");
        document.getElementById("text").innerHTML = "Home";
    }
})

//orange 
document.addEventListener('keypress', function(e) {
    if (e.key == '2') {
        bodyColor.classList.remove("background-home");
        bodyColor.classList.remove("background-pink");
        bodyColor.classList.remove("background-green");
        bodyColor.classList.remove("background-blue");
        bodyColor.classList.remove("background-purple");
        bodyColor.classList.add("background-orange");
        document.getElementById("text").innerHTML = "Orange";
    }
})

//pink
document.addEventListener('keypress', function(e) {
    if (e.key == '3') {
        bodyColor.classList.remove("background-orange");
        bodyColor.classList.remove("background-home");
        bodyColor.classList.remove("background-green");
        bodyColor.classList.remove("background-blue");
        bodyColor.classList.remove("background-purple");
        bodyColor.classList.add("background-pink");
        document.getElementById("text").innerHTML = "Pink";
    }
})

//green
document.addEventListener('keypress', function(e) {
    if (e.key == '4') {
        bodyColor.classList.remove("background-orange");
        bodyColor.classList.remove("background-pink");
        bodyColor.classList.remove("background-home");
        bodyColor.classList.remove("background-blue");
        bodyColor.classList.remove("background-purple");
        bodyColor.classList.add("background-green");
        document.getElementById("text").innerHTML = "Green";
    }
})

//blue
document.addEventListener('keypress', function(e) {
    if (e.key == '5') {
        bodyColor.classList.remove("background-orange");
        bodyColor.classList.remove("background-pink");
        bodyColor.classList.remove("background-green");
        bodyColor.classList.remove("background-home");
        bodyColor.classList.remove("background-purple");
        bodyColor.classList.add("background-blue");
        document.getElementById("text").innerHTML = "Blue";
    }
})

//purple
document.addEventListener('keypress', function(e) {
    if (e.key == '6') {
        bodyColor.classList.remove("background-orange");
        bodyColor.classList.remove("background-pink");
        bodyColor.classList.remove("background-green");
        bodyColor.classList.remove("background-blue");
        bodyColor.classList.remove("background-home");
        bodyColor.classList.add("background-purple");
        document.getElementById("text").innerHTML = "Purple";
    }
})