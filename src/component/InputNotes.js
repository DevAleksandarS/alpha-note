import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TITLE":
      return {
        title: action.payload.title,
        text: state.text,
        color: state.color,
      };
    case "ADD_TEXT":
      return {
        title: state.title,
        text: action.payload.text,
        color: state.color,
      };
    case "ADD_COLOR":
      return {
        title: state.title,
        text: state.text,
        color: action.payload.color,
      };
    case "RESET":
      return {
        title: "",
        text: "",
        color: "",
      };
    default:
      return state;
  }
};

const checkInput = (state) => {
  let num = 0;

  for (const key in state) {
    if (state[key] === "") {
      alert("Check if you have filled in all the fields!");
      return false;
    }
  }

  return true;
};

function InputNotes({ createNote }) {
  const [state, dispatch] = useReducer(reducer, {
    title: "",
    text: "",
    color: "",
  });

  const textSign = null;

  return (
    <div className="input-container">
      <div className="flex">
        <input
          type="text"
          className="input border"
          placeholder="Title..."
          onChange={(e) => {
            dispatch({ type: "ADD_TITLE", payload: { title: e.target.value } });
          }}
          value={state.title}
        ></input>
        <select
          className="input border"
          onChange={(e) => {
            dispatch({ type: "ADD_COLOR", payload: { color: e.target.value } });
          }}
          value={state.color}
        >
          <option value="" disabled selected hidden>
            Pick color...
          </option>
          <option value="yellow">Yellow</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        <button
          className="btn-add"
          onClick={(e) => {
            e.preventDefault();
            if (checkInput(state)) {
              createNote(state);
              dispatch({ type: "RESET" });
            }
          }}
        >
          Add
        </button>
      </div>
      <textarea
        className="text-input border"
        placeholder="Place your notes here..."
        onChange={(e) => {
          dispatch({ type: "ADD_TEXT", payload: { text: e.target.value } });
        }}
        value={state.text}
      ></textarea>
    </div>
  );
}

export default InputNotes;
