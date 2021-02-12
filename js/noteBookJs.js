// console.log("welcome this is javascript project");
showNotes();
// adding operation 
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {

    let notes = localStorage.getItem("notes");
    let addTxt = document.getElementById("addTxt");
    let titleInput = document.getElementById("titleInput");

    let checkAddTxt = addTxt.value.length;
    let checkTitle = titleInput.value.length;

    if (checkAddTxt != 0 && checkTitle != 0) {
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        let myObj = {
            title: titleInput.value,
            text: addTxt.value
        }
        notesObj.push(myObj);

        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";
        titleInput.value = "";
        // console.log(notesObj);
        showNotes();
    } if (checkAddTxt == 0) {
        alert("Sorry , can't add anthing . you did't write any note . please try again...");
    } else if (checkTitle == 0) {
       if(confirm("Your Titlebar is empty !!!click 'OK' to add this note or 'cancel' to Break this Operation...")){
            if (notes == null) {
                notesObj = [];
            } else {
                notesObj = JSON.parse(notes);
            }
            let myObj = {
                title: titleInput.value,
                text: addTxt.value
            }
            notesObj.push(myObj);
            localStorage.setItem("notes", JSON.stringify(notesObj));
            addTxt.value = "";
            titleInput.value = "";
            // console.log(notesObj);
            showNotes();
        }
    }
})

// table show 

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="card noteCard mx-3 my-2" style="width: 20rem;">
                <div class="card-body">
                  <h5 class="card-title">Title: ${element.title}</h5>
                  <p class="card-text">${element.text}</p>
                  <button id="${index}" onclick="eraseNote(this.id)" class="btn btn-primary">Erase this note</button>
                  <button id="${index}" onclick="editNote(this.id)" class="btn btn-primary">Edit this note</button>
                </div>
                </div>`;
    });
    let notesEle = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesEle.innerHTML = html;
    } else {
        notesEle.innerHTML = `Your NoteBook is Empty!!! Insert Some Notes.`
    }
}

// delete items
function eraseNote(index) {
    addBtn.style.display = "block";
    saveBtn.style.display = "none";
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
// editNote opreration 
function editNote(index) {
    let addTxt = document.getElementById("addTxt");
    let saveBtn = document.getElementById("saveBtn");
    let saveindex = document.getElementById("saveIndex");
    let titleInput = document.getElementById("titleInput");
    saveindex.value = index;



    let notestext = localStorage.getItem("notes");
    notesObj = JSON.parse(notestext);
    let noteData = notesObj[index];
    addTxt.value = noteData.text;
    titleInput.value = noteData.title;
    addBtn.style.display = "none";
    saveBtn.style.display = "block";
    // console.log("outside of save");
}
let saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", () => {
    let addTxt = document.getElementById("addTxt");
    let titleInput = document.getElementById("titleInput");
    
    let saveindex = document.getElementById("saveIndex").value;
    myObj = {
        title: titleInput.value,
        text: addTxt.value,
    }
    if (titleInput.value.length != 0 || addTxt.value.length != 0) {

        // console.log("running");
        notesObj[saveindex] = myObj;
        console.log(notesObj[saveindex]);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addBtn.style.display = "block";
        saveBtn.style.display = "none";

        addTxt.value = "";
        titleInput.value = "";

        showNotes();
    } else {
        addBtn.style.display = "block";
        saveBtn.style.display = "none";

        addTxt.value = "";
        titleInput.value = "";
        alert("This operation has not completed!!!");
    }
})


// search operation
let search = document.getElementById('searchNote');
search.addEventListener("input", function () {
    let searchValue = search.value.toLowerCase();

    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function (element) {
        let noteTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        // console.log(noteTxt)
        if (noteTxt.includes(searchValue)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })

})
