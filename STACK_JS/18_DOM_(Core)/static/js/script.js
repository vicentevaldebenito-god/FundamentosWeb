
let Likes = document.querySelector("#Likes");
let Likes_Counter_Text = document.querySelector("#Likes_Counter");

let Likes_Counter = 0;

Likes.addEventListener("click", function () {
        Likes_Counter++;
        Likes_Counter_Text.innerText = `${Likes_Counter} like(s)`;
});
let Likes2 = document.querySelector("#Likes2");
let Likes_Counter_Text2 = document.querySelector("#Likes_Counter2");

let Likes_Counter2 = 0;

Likes2.addEventListener("click", function () {
        Likes_Counter2++;
        Likes_Counter_Text2.innerText = `${Likes_Counter2} like(s)`;
});
let Likes3 = document.querySelector("#Likes3");
let Likes_Counter_Text3 = document.querySelector("#Likes_Counter3");

let Likes_Counter3 = 0;

Likes3.addEventListener("click", function () {
        Likes_Counter3++;
        Likes_Counter_Text3.innerText = `${Likes_Counter3} like(s)`;
});