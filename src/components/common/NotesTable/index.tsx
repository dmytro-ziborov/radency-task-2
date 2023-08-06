import { FC } from "react";
import { Note } from "../../../models/Note";
import Table from "../Table";
import NoteRow from "../NoteRow";

interface NotesTableProps {
    notes: Note[]
}

const NotesTable: FC<NotesTableProps> = ({ notes }) => {
    const columns = ["", "Name", "Created", "Category", "Content", "Dates", "Actions"];
    return (<Table columns={columns} rows={notes.length > 0 ? notes.map(note => <NoteRow key={note.id} note={note} />) : [<tr key={"empty"}><td colSpan={100}>Empty</td></tr>]} />);
}

export default NotesTable;