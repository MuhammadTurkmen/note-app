import Image from "next/image";
import { BiArchiveIn, BiBellPlus } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import { TbPinned, TbPinnedFilled } from "react-icons/tb";

import {
  archiveNote,
  deleteNote,
  pinneNote,
  unPinneNote,
} from "@/utils/actions";

const Notes = ({ note }) => {
  const handleDelete = (id) => {
    deleteNote(id);
  };

  return (
    <div
      onDoubleClick={() => {
        next.router.push(`/edit/${note.id}`);
      }}
      className="border border-gray-300 rounded-lg p-4 mt-4 pb-10 group relative block "
      key={note.id}
      href={`/edit/${note.id}`}
    >
      {/* Note Image  */}
      {note.img && (
        <Image
          src={note.img}
          width={50}
          height={50}
          className="w-full h-50 object-cover rounded mb-6"
          alt={note.title}
        />
      )}

      {/* Note Title  */}
      <h1 className="font-bold text-xl mb-5">{note.title}</h1>

      {/* Note Content or the Note */}
      <p>{note.content}</p>

      {/* Delete Archive Pinne functionalites */}
      <span className="hidden group-hover:flex group-hover:gap-3 group-hover:absolute  group-hover:top-4 group-hover:right-4">
        {/* Pinne and unPinne functionality wiht icons */}
        <span
          className="bg-white hover:bg-gray-300 group-hover:p-2 cursor-pointer rounded-full  hover:transition-all hover:ease-in-out hover:duration-500"
          onClick={() =>
            note.isPinned ? unPinneNote(note.id) : pinneNote(note.id)
          }
        >
          {!note.isPinned ? <TbPinned /> : <TbPinnedFilled />}
        </span>

        {/* archiveNote runctionality and icon */}
        <span
          className="bg-white hover:bg-gray-300 group-hover:p-2 cursor-pointer rounded-full  hover:transition-all hover:ease-in-out hover:duration-500"
          onClick={() => archiveNote(note.id)}
        >
          <BiArchiveIn />
        </span>

        {/* Reminder functionality and icon */}
        <span className="bg-white hover:bg-gray-300 group-hover:p-2 cursor-pointer rounded-full  hover:transition-all hover:ease-in-out hover:duration-500">
          <BiBellPlus />
        </span>

        {/* DeletNote functionality and icon */}
        <span
          className="bg-white hover:bg-red-300  group-hover:p-2 cursor-pointer rounded-full  hover:transition-all hover:ease-in-out hover:duration-500"
          onClick={() => handleDelete(note.id)}
        >
          <FaRegTrashAlt />
        </span>
      </span>
    </div>
  );
};

export default Notes;
