var form=document.getElementById('addForm')
var itemList=document.getElementById('items')
var filter = document.getElementById('filter');
form.addEventListener('submit',addItem)
filter.addEventListener("keyup",filterItems)

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value
    var description = document.getElementById('description').value

    var li = document.createElement('li')
    

    li.className='list-group-item'

    li.appendChild(document.createTextNode(newItem))
    li.appendChild(document.createTextNode(" "+ description))

    var deletebtn=document.createElement("button")

    deletebtn.className="btn btn-danger btn-sm float-right delete"
    deletebtn.appendChild(document.createTextNode('X'))

    li.appendChild(deletebtn)
    

    itemList.appendChild(li)
}

function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      var description = item.childNodes[1].textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 || description.toLocaleLowerCase().indexOf(text) !=-1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }