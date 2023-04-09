function templates() {
    document.querySelector('.new-item').style.display = "block";
}
//saving words entered to history 
function save() {
    var itemName = document.getElementById("search").value;
    if (itemName != '') {

        var itemsStorage = localStorage.getItem('items');

        if (itemsStorage == null) {
            itemsStorage = '[]';
        }
        var itemsArray = JSON.parse(itemsStorage);
        itemsArray.push({ "item": itemName, "status": 0 });
        saveItems(itemsArray);
        receiveItems();
        document.querySelector('.new-item input').value = '';
        document.querySelector('.new-item').style.display = 'none';
    }
}

// recalling stored items
function receiveItems() {

    const itemsList = document.querySelector('ul.items');
    itemsList.innerHTML = ' ';
    var newItemsHTML = ' ';

    try {
        var itemsStorage = localStorage.getItem('items');
        if (itemsStorage == null) {
            itemsStorage = '[]';
        }
        var itemsArray = JSON.parse(itemsStorage);

        for (var i = 0; i < itemsArray.length; i++) {
            var status = '';
            //setting the status
            if (itemsArray[i].status == 1) {
                status = 'class="done"';
            }
        }
        itemsList.innerHTML = newItemsHTML;
    } catch (e) {
    }
}

//function for saving items
function saveItems(obj) {
    var string = JSON.stringify(obj);
    localStorage.setItem('items', string);
}

receiveItems();
