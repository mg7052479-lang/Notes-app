const noteColor = document.getElementById("notes-color");
const notesContainer = document.getElementById("notes-container");
const notesText = document.getElementById("notes-text");
const addbtn = document.getElementById("addbtn");

// Add button // 

addbtn.addEventListener("click",function(){
  const textInput = notesText.value.trim();
  const colorInput = noteColor.value ;
  //valadition code // 
if(!textInput ) return ;

// create Notes // 
const note = document.createElement("div");
note.classList.add("note");
note.style.background = noteColor.value;


// create text // 
const p = document.createElement("p");
p.textContent = textInput ;

// delete button // 

const delBtn = document.createElement("button");
delBtn.textContent = "Delete";

// Function for delbtn // 
delBtn.addEventListener("click", function(){
  note.remove();
})
// add element to the container //
note.appendChild(p);
note.appendChild(delBtn);

notesContainer.appendChild(note);
notesText.value = "";
});





