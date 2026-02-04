const noteText = document.getElementById("noteText");
const noteColor = document.getElementById("noteColor");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Add note on button click
addBtn.addEventListener("click", addNote);

// Add note on Enter key
noteText.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    addNote();
  }
});

function addNote() {
  const text = noteText.value.trim();
  const color = noteColor.value;

  if (!text) return;

  // ✅ Small validation update
  if (text.length > 200) {
    alert("Note is too long (max 200 characters)");
    return;
  }

  const note = {
    id: Date.now(),
    text,
    color
  };

  notes.push(note);
  saveAndRender();
  noteText.value = "";
}

function renderNotes() {
  notesContainer.innerHTML = "";

  notes.forEach(note => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.style.background = note.color;

    const p = document.createElement("p");
    p.textContent = note.text;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";
    editBtn.onclick = () => editNote(note.id);

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => deleteNote(note.id);

    noteDiv.appendChild(p);
    noteDiv.appendChild(editBtn);
    noteDiv.appendChild(delBtn);

    notesContainer.appendChild(noteDiv);
  });
}

function deleteNote(id) {
  notes = notes.filter(note => note.id !== id);
  saveAndRender();
}

function editNote(id) {
  const note = notes.find(note => note.id === id);
  const newText = prompt("Edit note:", note.text);

  if (newText === null || newText.trim() === "") return;

  note.text = newText.trim();
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}

renderNotes();
