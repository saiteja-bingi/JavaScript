// get elements from dom

console.log(document.head)
console.log(document.body)
let heading=document.querySelector('h1');
console.log(heading)
// heading=querySelectorAll('h1');
// we can also use tagname , id and class with quierySelector
console.log(heading.textContent)
heading.textContent="welcome to dom"


// handle events

heading.addEventListener('click',()=>{
    // change content
    heading.textContent="Hello India"
    heading.style.color='yellow'
    heading.style.backgroundColor='indigo'
})






// dynamically create the elements

// create a para child to parent for button click


let btn =document.querySelector("button")
let parent=document.querySelector(".parent")

// add event listener

btn.addEventListener('click',()=>{
    // create paragraph element
    let para= document.createElement('p')
    // add content
    para.textContent="New Para"
    // add para to parent
    parent.appendChild(para);
    
})



// array
let skills=['react','angular','gen AI']
let skillele=document.querySelector('.skills')

for(let s of skills){
    let h3=document.createElement("h3")
    h3.textContent=s
    skillele.appendChild(h3)
}