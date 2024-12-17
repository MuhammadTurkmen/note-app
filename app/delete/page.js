import DeletedNotes from "@/components/DeletedNotes";
import prisma from "@/utils/db";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export const dynamic = "force-dynamic";

const DeletePage = async () => {
  const notes = await prisma.notes.findMany();

  // checking
  if (notes.length === 0 || notes.every((note) => !note.isDeleted)) {
    return (
      <div className="flex flex-col items-center  mt-36">
        <span className="text-6xl text-gray-300">
          <FaRegTrashAlt />
        </span>
        <h1 className="text-2xl text-gray-300 mt-4">
          Deleted notes will appear here{" "}
        </h1>
      </div>
    );
  }

  return <DeletedNotes notes={notes} />;
};

export default DeletePage;
