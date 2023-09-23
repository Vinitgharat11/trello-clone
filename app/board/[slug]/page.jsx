'use client'

import React, { useState } from "react";
import NoteCards from "@/app/components/Board-layouts/NoteCards";
import BoardNav from "@/app/components/Board-layouts/navbar";
import Navbar from "@/app/components/navbar";

export default function Board() {
  const [noteCardComponents, setNoteCardComponents] = useState([]);

  const addNoteCard = () => {
    const newNoteCard = <NoteCards key={noteCardComponents.length} />;
    setNoteCardComponents([...noteCardComponents, newNoteCard]);
  };

  return (
    <>
      <Navbar />
      <div className="">
        <BoardNav />
      </div>
      {noteCardComponents}
      <NoteCards/>
      <div
        className="p-5  bg-slate-50 mx-5 my-3"
        onClick={addNoteCard}
      >
        <p className="font-light">Add another list</p>
      </div>
    </>
  );
}
