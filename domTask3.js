//console.dir(document)
//console.log(document.domain)
//console.log(document.URL)
//console.log(document.all[10])
//document.all[10].textContent="hello"
//console.log(document.links)
//console.log(document.images)
//console.log(document.forms)


//Get Element By ID 

//console.log(document.getElementById("header-title"))
//var headerTitle=document.getElementById('header-title')
//var header=document.getElementById('main-header')

//console.log(headerTitle)
//headerTitle.textContent="HelloWorld"
//headerTitle.innerHTML="JavaScript"
//console.log(headerTitle.innerText)
//console.log(headerTitle.innerText)
//headerTitle.innerHTML='<h3>HelloWorld</h3>'

//header.style.borderBottom="solid 3px #000"

//console.log(document.getElementById('items'))
//items.style.fontWeight="bold"
//items.style.color="green"


//var items=document.getElementsByClassName('list-group-item')
//console.log(items)
//console.log(items[3])
//items[2].style.backgroundColor="green"
//items[2].style.fontWeight="bold"
//for(var i=0;i<items.length;i++){
//    items[i].style.fontWeight="bold"
//}



var li=document.getElementsByTagName('li')
console.log(li)
console.log(li[3])
li[2].style.backgroundColor="green"
li[2].style.fontWeight="bold"
for(var i=0;i<li.length;i++){
    li[i].style.fontWeight="bold"
}
