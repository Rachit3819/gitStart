var form=document.getElementById('addForm')
var itemList=document.getElementById('items')
form.addEventListener('submit',addItem)
//itemList.addEventListener('click',removeItem)

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value

    var li = document.createElement('li')

    li.className='list-group-item'

    li.appendChild(document.createTextNode(newItem))

    var deletebtn=document.createElement("button")
    var editbtn=document.createElement("button")
    editbtn.className="btn btn-danger btn-sm float-right"
    editbtn.appendChild(document.createTextNode('edit'))


    deletebtn.className="btn btn-danger btn-sm float-right delete"
    deletebtn.appendChild(document.createTextNode('del'))

    li.appendChild(deletebtn)
    li.appendChild(editbtn)
    

    itemList.appendChild(li)
    itemList.appendChild(li)
}
// }

// function removeItem(e){
//     if(e.target.classList.contains('delete')){
//         if(confirm(alert('Are you sure'))){
//             var li=e.target.parentElement;
//             itemList.removeChild(li);
//         }
//     }

// }