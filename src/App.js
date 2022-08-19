import React, { useState } from "react";
import uuid from "react-uuid";
import "./css/style.css";
import InputNotes from "./component/InputNotes";
import DisplayNotes from "./component/DisplayNotes";

function App() {
  const [notes, setNotes] = useState([]);

  const createNote = (state) => {
    const note = {
      id: uuid(),
      title: state.title,
      text: state.text,
      color: state.color,
      date: Date.now(),
    };
    setNotes([note, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="container">
      <InputNotes createNote={createNote} />
      <DisplayNotes notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
