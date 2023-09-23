"use client";
import React, { useState } from "react";
import { BsThreeDots, BsPlusLg } from "react-icons/bs";
import Popup from "./popup";
import { useRouter } from "next/navigation";

export default function NoteCards() {
  const router = useRouter();
  const [Task, setaddTask] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const handleAddTask = () => {
    // const newTask = <Popup key={Task.length} />;
    // setaddTask([...Task, newTask]);
    router.push();
  };

  const handlePopup = () => {
    setOpenPopup(!openPopup);
  };
  return (
    <>
      <div className="bg-slate-200 mx-5 rounded-md ">
        <div className="flex justify-between mx-3  items-center my-2 py-2">
          <p className="outline-none">List</p>
          <BsThreeDots />
        </div>
        {openPopup && <Popup />}
        {!openPopup && (
          <div className="flex items-center mx-3 gap-3 py-2">
              <BsPlusLg /> <p onClick={handlePopup}>Add a Card</p>
          </div>
        )}
      </div>
    </>
  );
}
