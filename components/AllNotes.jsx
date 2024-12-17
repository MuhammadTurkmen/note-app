import prisma from "@/utils/db";
import SingleNote from "./singleNote";

const AllNotes = async ({ searchedNotes }) => {
  const notes = await prisma.notes.findMany();
  return <SingleNote notes={notes} searchedNotes={searchedNotes} />;
};

export default AllNotes;
