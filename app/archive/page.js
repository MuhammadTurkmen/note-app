import ArchivedNotes from "@/components/ArchivedNotes";
import prisma from "@/utils/db";
import { BiArchiveIn } from "react-icons/bi";

const ArchivePage = async () => {
  const notes = await prisma.notes.findMany();

  if (notes.length === 0 || notes.every((note) => !note.isArchived)) {
    return (
      <div className="flex flex-col items-center  mt-36">
        <span className="text-6xl text-gray-300">
          <BiArchiveIn />
        </span>
        <h1 className="text-2xl text-gray-300 mt-4">
          Your archived notes appear here{" "}
        </h1>
      </div>
    );
  }

  return <ArchivedNotes notes={notes} />;
};

export default ArchivePage;
