var form=document.getElementById('addForm')
var itemList=document.getElementById('items')
var filter = document.getElementById('filter');
form.addEventListener('submit',addItem)
filter.addEventListener('keyup', filterItems);
//itemList.addEventListener('click',removeItem)

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value
    var description = document.getElementById('description').value

    var li = document.createElement('li')
    

    li.className='list-group-item'

    li.appendChild(document.createTextNode(newItem))
    li.appendChild(document.createTextNode(" "+ description))

    // var deletebtn=document.createElement("button")
    // var editbtn=document.createElement("button")
    // editbtn.className="btn btn-danger btn-sm float-right"
    // editbtn.appendChild(document.createTextNode('edit'))


    // deletebtn.className="btn btn-danger btn-sm float-right delete"
    // deletebtn.appendChild(document.createTextNode('del'))

    // li.appendChild(deletebtn)
    // li.appendChild(editbtn)
    

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


function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }