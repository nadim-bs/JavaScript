// click event listener
document.querySelector("button").addEventListener("click",show);

// mouse hovor
let txt = document.querySelector("h1")
txt.addEventListener("mouseover", function(){
    txt.classList.add("my-style")

})

txt.addEventListener("mouseout", function(){
    txt.classList.remove("my-style")
})



// function for click event listener
function show(){
    alert("hello")
}