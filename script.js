//Event Bubbling ==> child node to parent node
const div =  document.querySelector("div")
const form = document.querySelector('form')
const button = document.querySelector('button')
div.addEventListener('click', function() {
    alert("div");
})

form.addEventListener('click', function() {
    alert("form");
})
button.addEventListener('click', function() {
    alert("button");
})

//event.target vs this.target vs event.currentTarget
// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener("click", func);
// button.addEventListener("click", func);
// form.addEventListener("click", func);

// function func(event) {
//   alert(
//     "currentTarget = " + event.currentTarget.tagName +
//     ", target = " + event.target.tagName +
//     ", this = " + this.tagName
//   );
// }

//Event Capturing ==> parent node to child node
// const div =  document.querySelector("div")
// const form = document.querySelector('form')
// const button = document.querySelector('button')
// div.addEventListener('click', function() {
//     alert("div");
// },
// {
//     capture: true
// })

// form.addEventListener('click', function() {
//     alert("form");
// },{
//     capture: true
// })
// button.addEventListener('click', function() {
//     alert("button");
// },{
//     capture: true
// })


//To stop bubbling or capturing
// const div =  document.querySelector("div")
// const form = document.querySelector('form')
// const button = document.querySelector('button')
// div.addEventListener('click', function(e) {
//     e.stopPropagation();
//     alert("div");
// })

// form.addEventListener('click', function() {
//     e.stopPropagation();
//     alert("form");
// })
// button.addEventListener('click', function() {
//     e.stopPropagation();
//     alert("button");
// })