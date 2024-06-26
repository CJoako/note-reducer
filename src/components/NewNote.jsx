import React from "react";

import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer";

import noteService from "../services/notes";
import { createNote } from "../reducers/noteReducer";

const NewNote = (props) => {
  const dispatch = useDispatch();

  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    dispatch(createNote(content));

    const newNote = await noteService.createNew(content);
    dispatch(createNote(newNote));
  };

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  );
};

export default NewNote;
