"use client";

import Navbar from "../components/navbar";
import { GoLock, GoPencil } from "react-icons/go";
import { useRouter } from "next/navigation";

const templets = [
  {
    id:1,
    name: "Project Management",
    background: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
  },
  {
    id:2,
    name: "kanban Template",
    background:
      "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
  },
  {
    id:3,
    name: "Simple Project Board",
    background:
      "bg-gradient-to-r from-orange-500 from-10% via-slate-500 via-30% to-yellow-500 to-90%",
  },
  {
    id:4,
    name: "Remote Team Hub",
    background:
      "bg-gradient-to-r from-pink-500 from-10% via-pink-500 via-30% to-blue-500 to-90%",
  },
];

export default function Workspace() {
  const router = useRouter()
  return (
    <>
      <Navbar />
      <div className=" grid grid-cols-1 items-center mx-5 my-3 border-b-2 py-2 ">
        <div className="flex items-center">
          <div className="workspaces-logo bg-green-600 text-white p-2 w-10  text-center rounded-md">
            <p className="text-lg font-bold">T</p>
          </div>
          <div className="mx-2 ">
            <h3 className="text-sm font-medium flex items-center gap-1">
              Trello Workspace
              <GoPencil />
            </h3>
            <h6 className="text-xs flex gap-1 items-center">
              <GoLock />
              <p>Private</p>
            </h6>
          </div>
        </div>
        <button className="bg-blue-500 px-2 py-1 text-white rounded-sm border-blue-800 text-xs mt-2">
          Invite Workspace members
        </button>
      </div>
      {/* boards templets */}
        <p className="font-bold mx-5">Boards</p>
      <div className="templets-container mx-5 md:grid md:grid-cols-4 gap-3">
        {templets.map((items) => (
          <div className="" key={items.id}>
            <div className="boards-templets relative my-3 ">
              <div
                className={`board-container ${items.background} rounded-md  py-10 `}
              >
                <p className="bg-slate-100 rounded-sm p-1 w-20 text-xs text-center absolute top-1 left-1 ">
                  Template
                </p>
                <p className="text-white font-bold mx-1 ">{items.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Create New Board */}
      <div className="Create-Board">
        <span className="text-xs font-light mx-5 ">Search</span>
        <div className="search-Board border-slate-400 border p-1 mx-5 my-3 w-30 rounded-sm">
          <input
            type="text"
            className="outline-none mx-3 "
            placeholder="search boards"
          />
        </div>
        <div className="p-10 bg-slate-100 mx-5">
          <p onClick={()=>router.push('/board/s')}>Create new Board</p>
        </div>
      </div>
    </>
  );
}
