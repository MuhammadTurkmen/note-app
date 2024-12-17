import AllNotes from "@/components/AllNotes";
import { searchNote } from "@/utils/actions";
export const dynamic = "force-dynamic";

export default async function Home({ searchParams: searchparamsPromis }) {
  const searchparams = await searchparamsPromis;
  const search = searchparams?.search || "";
  let note = null;

  if (search) {
    note = await searchNote(search);
  }

  return (
    <div className="">
      <AllNotes searchedNotes={note} />
    </div>
  );
}
