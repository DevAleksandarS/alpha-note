import React from "react";

function DisplayNotes({ notes, deleteNote }) {
  if (notes.length === 0) {
    return (
      <div className="display-container flex border">
        <p className="nonotes-message">There is no notes...</p>
      </div>
    );
  }

  return (
    <div className="display-container flex border">
      {notes.map((note) => (
        <div className={`note ${note.color}-note`}>
          <button className="close-btn" onClick={() => deleteNote(note.id)}>
            X
          </button>
          <p className="title">{note.title}</p>
          <div className="note-display">
            <p className="text">{note.text}</p>
          </div>
          <div className="note-created-date-container">
            <p className="note-created-date">
              {new Date(note.date).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayNotes;
