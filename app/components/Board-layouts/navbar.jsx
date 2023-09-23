"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { AiOutlineStar, AiOutlineUserAdd } from "react-icons/ai";
import { BsPeople, BsArrowRightCircle } from "react-icons/bs";
import { FaTrello } from "react-icons/fa";
import { FaTableList } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GrSchedule } from "react-icons/gr";

const Tabs = [
  {
    icon: <FaTrello />,
    name: "Boards",
  },
  {
    icon: <BsPerson />,
    name: "Members",
  },
  {
    icon: <FiSettings />,
    name: "Workspace Settings",
  },
];

export default function BoardNav() {
  const params = useParams();
  const [toggelSidebar, setToggelSidebar] = useState(false);

  const sidebarTogger = () => {
    setToggelSidebar(!toggelSidebar);
  };
  return (
    <>
      <nav className="border-b-2  ">
        <div className="nav-container flex items-center justify-around my-3">
          <div className="left-side flex items-center gap-5">
            <div className="sidebar-arrow">
              <BsArrowRightCircle onClick={sidebarTogger} />
            </div>
            <h1 className="font-bold capitalize">{params.slug}</h1>
            <AiOutlineStar />
            <BsPeople />
          </div>
          <div className="right-side flex items-center gap-5">
            <div className="profile">QO</div>
            <button className="py-2 px-4 items-center gap-1 flex bg-transparent border rounded-md">
              <AiOutlineUserAdd />
              Share
            </button>
          </div>
        </div>
        {/* mobile  */}
        {toggelSidebar && (
          <>
            <div className="sidebar flex items-center p-3 border-b-2 my-2 ">
              <div className="workspaces-logo bg-green-600 text-white p-2 w-10  text-center rounded-md">
                <p className="text-lg font-bold">T</p>
              </div>
              <div className="mx-4">
                <p className="text-sm">Trello Workspace</p>
                <p className="text-xs">Free</p>
              </div>
            </div>

            <div className="mx-4 my-5 ">
              {Tabs.map((items) => (
                <div className="flex gap-2 my-2 items-center">
                  {items.icon}
                  <h1>{items.name}</h1>
                </div>
              ))}
              <div className="my-6">
                <p className="font-bold">Workspace Views</p>
                <span className="flex items-center gap-3 my-3">
                  <FaTableList /> <p>Table</p>
                </span>
                <span className="flex items-center gap-3">
                  <GrSchedule /> <p>Calender</p>
                </span>
              </div>
            </div>
            <div className="mx-4">
              <p>Your Boards</p>
              <div className="flex items-center my-2">
                <div className="w-10 h-10 bg-red-300"></div>
                <p className="mx-3">{params.slug}</p>
              </div>
            </div>
            <div className="mx-4 py-12">
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded flex items-center gap-2">
              <FaTrello className="text-white"/>   <p className="text-white">Try Premium Free</p>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
