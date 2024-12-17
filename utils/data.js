import { MdEditNote } from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { BiBellPlus } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";

export const links = [
  {
    name: "Notes",
    href: "/",
    icon: <MdEditNote />,
  },
  {
    name: "Archive",
    href: "/archive",
    icon: <BiArchiveIn />,
  },
  {
    name: "Reminder",
    href: "/reminder",
    icon: <BiBellPlus />,
  },
  {
    name: "Trash",
    href: "/delete",
    icon: <FaRegTrashAlt />,
  },
];
