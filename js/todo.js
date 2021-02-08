// console.log("this is to do list");
descTxt = document.getElementById('description');
titTxt = document.getElementById('title');
function updateAndget(params) {

    tit = document.getElementById('title').value;

    desc = document.getElementById('description').value;
    // console.log(desc);
    if (desc.length == 0) {
        alert("Soryy,we can't update your list!!! Your Description is Empty");

    } else if (tit.length == 0) {
        alert("Your title bar is empty!!!");
        if (localStorage.getItem('itemsJson') == null) {

            let itemJsonArray = [];
            itemJsonArray.push([tit, desc]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
            titTxt.value = "";
            descTxt.value = "";
            // console.log("updating");
        } else {
            itemJsonArrayStr = localStorage.getItem("itemsJson");
            itemJsonArray = JSON.parse(itemJsonArrayStr);
            itemJsonArray.push([tit, desc]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
            titTxt.value = "";
            descTxt.value = "";
        }
        update();
    } else {
        if (localStorage.getItem('itemsJson') == null) {
            
            let itemJsonArray = [];
            itemJsonArray.push([tit, desc]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
            titTxt.value = "";
            descTxt.value = "";
            // console.log("updating");
        } else {
            itemJsonArrayStr = localStorage.getItem("itemsJson");
            itemJsonArray = JSON.parse(itemJsonArrayStr);
            itemJsonArray.push([tit, desc]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
            titTxt.value = "";
            descTxt.value = "";
        }
        update();
    }
}

function update() {
    if (localStorage.getItem('itemsJson') == null) {
        
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));

        // console.log("updating");
    } else {
        itemJsonArrayStr = localStorage.getItem("itemsJson");
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }

    let tableBody = document.getElementById('tablebody');

    let str = '';

    itemJsonArray.forEach((element, index) => {
        str += `
        <tr class="abc">
        <th scope="row">${index + 1}</th>
        <td><h6>${element[0]}</h6></td>
        <td >${element[1]}</td>
        <td>
         <button class="btn btn-sm btn-primary" onclick="edit(${index})">Edit</button>
         <button class="btn btn-sm btn-primary" id="deletebtn" onclick="deleted(${index})">Delete</button>
        </td>
        
    </tr>`;
    });
    let notesEle = document.getElementById("tablebody");
    if (itemJsonArray.length != 0) {
        notesEle.innerHTML = str;
    } else {
        notesEle.innerHTML = `<h3>Your To-Do List is Empty!!! Feel Free to Add Something...</h3>`
    }
}
let add = document.getElementById("add");
add.addEventListener('click', updateAndget);
update();
function deleted(item) {
    let add = document.getElementById("add");
    let save = document.getElementById("save");
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    add.style.display = "block";
    save.style.display = "none";
    itemJsonArray.splice(item, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}

function cleared() {
    if (confirm("Do You Want to Clear list")) {
        let save = document.getElementById("save");
        let add = document.getElementById("add");
        localStorage.clear();
        // console.log("clear");
        add.style.display = "block";
        save.style.display = "none";
        titTxt.value = "";
        descTxt.value = "";
        update();
    }
}

function edit(index) {
    let save = document.getElementById("save");
    let saveIndex = document.getElementById("saveIndex");
    let add = document.getElementById("add");
    saveIndex.value = index;
    // console.log(saveIndex.value);

    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    let item = itemJsonArray[index];
    // console.log(item[1]);
    descTxt.value = item[1];
    titTxt.value = item[0];

    add.style.display = "none";
    save.style.display = "block";
    
}

let save = document.getElementById("save");
save.addEventListener("click", () => {
    let add = document.getElementById("add");
    let saveIndex = document.getElementById("saveIndex").value;
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    if (titTxt.value.length != 0 || descTxt.value.length != 0) {

        itemJsonArray[saveIndex] = [titTxt.value, descTxt.value];

        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
        add.style.display = "block";
        save.style.display = "none";
        titTxt.value = "";
        descTxt.value = "";
        update();
    } else {
        add.style.display = "block";
        save.style.display = "none";
        titTxt.value = "";
        descTxt.value = "";
        alert("This operation has not completed!!! cause of insufficient data...");
    }
})

let search = document.getElementById("searchNote");
search.addEventListener("input", () => {
    let searchValue = search.value;
    let trList = document.getElementsByClassName("abc");
    // console.log(trList);
    Array.from(trList).forEach((item)=>{
        // console.log(item);
       
            let searchText = item.getElementsByTagName("td")[1].innerText;
            // console.log("running");
            let re = new RegExp(searchValue,'gi');
            if (searchText.match(re)) {
                item.style.display = "table-row";
            } else {
                item.style.display = "none";
            }
       
    })
})
