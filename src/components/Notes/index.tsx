import { FC } from "react";
import NotesTable from "../common/NotesTable";
import { useAppSelector } from "../../redux/hooks/AppSelector";
import { selectActiveNotes } from "../../redux/reducers/NoteSlice";

const Notes: FC = () => {
    const notes = useAppSelector(selectActiveNotes)
    return (<NotesTable notes={notes} />);
}

export default Notes;