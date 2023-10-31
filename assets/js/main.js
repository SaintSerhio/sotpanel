"use strick"

const prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    box = document.querySelector(".gallery__box");

    let index = 0;

    prev.addEventListener('click', () => {
        index += 45;
        box.style = `transform: perspective(1300px) rotateY(${index}deg)`;
    });

    next.addEventListener('click', () => {
        index -= 45;
        box.style = `transform: perspective(1300px) rotateY(${index}deg)`;
    });