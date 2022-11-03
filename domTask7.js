//ParentNode
var itemList=document.querySelector('#items')
console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor="#f4f4f4"
console.log(itemList.parentNode.parentNode)



//ParentElement
var itemList=document.querySelector('#items')
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor="#f4f4f4"
console.log(itemList.parentElement.parentElement)

//ChildNode
var itemList=document.querySelector('#items')
console.log(itemList.childNodes)


//LastElementChild
var itemList=document.querySelector('#items')
console.log(itemList.lastElementChild)
itemList.lastElementChild.style.color="green"

//lastChild
var itemList=document.querySelector('#items')
console.log(itemList.lastChild)

//firstElementChild
var itemList=document.querySelector('#items')
console.log(itemList.firstElementChild)
itemList.firstElementChild.style.color="green"
itemList.firstElementChild.textContent="item1"


//firstChild
var itemList=document.querySelector('#items')
console.log(itemList.firstChild)


//nextSibling
var itemList=document.querySelector('#items')
console.log(itemList.nextSibling)


//nextElementSibling
var itemList=document.querySelector('#items')
console.log(itemList.nextElementSibling)


//previousSibling
var itemList=document.querySelector('#items')
console.log(itemList.previousSibling)

//previousElementSibiling
var itemList=document.querySelector('#items')
console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.backgroundColor="yellow"
itemList.previousElementSibling.textContent="yellow"



//createElement

var newDiv=document.createElement('div')
newDiv.className="Hello"
newDiv.id=" HelloWorld"
//setAttribute
newDiv.setAttribute('title', 'helloDIV')
//createTextNote
var newDivText=document.createTextNode('Hello')
//AddTexttoDiv and append child
newDiv.appendChild(newDivText)


//Now go head and add HEllo word before Item Lister
var container=document.querySelector(' .container')
var h1=document.querySelector('header h1')


console.log(newDiv)
container.insertBefore(newDiv, h1)


//Now go head and add HEllo word before Item 1
let abc=document.querySelector('.list-group-item')
let li=document.createElement('li')
abc.appendChild(li).innerText="Hello"
console.log(abc)

