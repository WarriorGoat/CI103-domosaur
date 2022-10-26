let chall1 = document.querySelector(".mess-with-me");
chall1.style.fontSize = "40px";
chall1.style.backgroundColor = "green";

let hide = document.querySelector("#hide-me-area");
hide.style.display = "none";

let tri = document.querySelector("#triceratops");
tri.style.width = "324px";

chall1.addEventListener("click", function(){
    chall1.style.color = "orange";
})
tri.addEventListener("click", function(){
    tri.style.border = "5px solid red"
})

let feather = document.querySelector("#feathers");
feather.addEventListener("click", function(){feather.style.opacity = "0.5"})

let togg = document.querySelector("#toggle");
let row = document.querySelector("#row");
togg.addEventListener("click", function(){
    if(row.style.backgroundColor === ""){row.style.backgroundColor = "purple"}
    else {row.style.backgroundColor = ""}
})

let big = document.querySelector("#biggify");
big.addEventListener("mouseenter", function(){big.style.width = "200px"})
big.addEventListener("mouseleave", function(){big.style.width = "162px"})