import { FC } from "react";
import { Note } from "../../../models/Note";
import { useAppSelector } from "../../../redux/hooks/AppSelector";
import { selectCategoryById } from "../../../redux/reducers/CategorySlice";
import ActionIcon from "../ActionIcon";
import { useAppDispatch } from "../../../redux/hooks/AppDispatch";
import { changeNoteStatus, deleteNote } from "../../../redux/reducers/NoteSlice";
import { openModal } from "../../../redux/reducers/ModalSlice";
import Icon from "../Icon";
import CategoryIcon from "../CategoryIcon";


interface NoteRowProps {
    note: Note;
}

const NoteRow: FC<NoteRowProps> = ({ note }) => {
    const category = useAppSelector(selectCategoryById(note.category));
    const dispatch = useAppDispatch();

    return (
        <tr>
            <td>{category ? <CategoryIcon category={category} /> : <Icon icon="bug" />}</td>
            <td>{note.name}</td>
            <td>{note.createdAt}</td>
            <td>{category?.name}</td>
            <td>{note.content}</td>
            <td>{note.dates.join(', ')}</td>
            <td>
                {note.isActive ?
                    <>
                        <i
                            role="button"
                            className="bi bi-pencil-fill"
                            style={{ color: "#696969" }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => { dispatch(openModal({ mode: "edit", noteId: note.id })); }}>
                        </i>
                        <ActionIcon icon="archive-fill" action={() => { dispatch(changeNoteStatus(note.id)) }} />
                        <ActionIcon icon="trash-fill" action={() => { dispatch(deleteNote(note.id)) }} />
                    </>
                    :
                    <>
                        <ActionIcon icon="arrow-counterclockwise" action={() => { dispatch(changeNoteStatus(note.id)) }} />
                    </>}
            </td>
        </tr>)
        ;
}

export default NoteRow;