QuerySlector
var header = document.querySelector ('#main-header')
header.style.borderBottom ='solid 3px #ccc'

var input = document.querySelector ('input')
input.value='HelloWorld'

var seconditem=document.querySelector(".list-group-item:nth-child(2)")
seconditem.style.backgroundColor="green"


var thirditem=document.querySelector(".list-group-item:nth-child(3)")
thirditem.style.color="white"



//QuerySlectorAll
var titles = document.querySelectorAll('.title')
console.log(titles)

var odd=document.querySelectorAll("li:nth-child(odd)")

for (var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green'
}
var li=document.querySelectorAll("li")
console.log(li[1])
li[1].style.color="green"
