import Navbar from "./components/navbar";
import { FaTrello } from "react-icons/fa";
import { BsPerson, BsGrid } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

const Tabs = [
  {
    icon: <FaTrello />,
    name: "Boards",
  },
  {
    icon: <BsGrid />,
    name: "views",
  },
  {
    icon: <BsPerson />,
    name: "Members",
  },
  {
    icon: <FiSettings />,
    name: "Settings",
  },
];
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="title">
        <p className="uppercase font-bold text-slate-500 pt-10 mx-3 py-2">
          your workspaces
        </p>
      </div>
      <div className="workspaces px-3 flex items-center">
        <div className="workspaces-logo bg-green-600 text-white p-1 w-9 text-center rounded-md">
          <p className="text-lg font-bold">T</p>
        </div>
        <p className="mx-3 font-bold">Trello Workspace</p>
      </div>
      <div className="grid grid-cols-2 m-3">
        {Tabs.map((i) => (
          <div className="bg-slate-100 flex items-center m-1 py-2 gap-1 text-[15px]  px-3 rounded-md">
            {i.icon}
            <p className="text-sm font-bold ">{i.name}</p>
          </div>
        ))}
      </div>
      <div className="bords">
        <div className="bg-slate-200 p-10 mx-10 rounded-sm text-center">
          <p className="font-light">Create new Board</p>
        </div>
      </div>
      <div className="mx-3 my-5">
        <div className="bg-slate-100 m-1 py-2 text-[15px] px-3 rounded-md w-9/12">
          <p className="text-sm font-bold ">view all closed boards</p>
        </div>
      </div>
    </>
  );
}
