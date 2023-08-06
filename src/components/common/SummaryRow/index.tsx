import { FC } from "react";
import { Category } from "../../../models/Category";
import { useAppSelector } from "../../../redux/hooks/AppSelector";
import { selectActiveNotesByCategory, selectArchivedNotesByCategory } from "../../../redux/reducers/NoteSlice";
import NotesTable from "../NotesTable";
import Icon from "../Icon";
import CategoryIcon from "../CategoryIcon";
import s from "./style.module.css"

interface SummaryRowProps {
    category: Category;
}

const SummaryRow: FC<SummaryRowProps> = ({ category, }) => {
    const activeCount = useAppSelector(selectActiveNotesByCategory(category.id)).length
    const archiveNotes = useAppSelector(selectArchivedNotesByCategory(category.id));
    const archiveCount = archiveNotes.length;
    return (
        <>
            <tr className={s["summary-row"]}>
                <td>
                    {category ? <CategoryIcon category={category} /> : <Icon icon="bug" />}
                </td>
                <td>{category.name}</td>
                <td>{activeCount}</td>
                <td>{archiveCount}</td>
                <td>
                    <i
                        className="bi bi-arrow-down-up action"
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-table-${category.id}`}
                        aria-expanded="false"
                        aria-controls={`collapse-table-${category.id}`}>
                    </i>
                </td>
            </tr>
            <tr className="collapse" id={`collapse-table-${category.id}`}>
                <td colSpan={100}><NotesTable notes={archiveNotes} /></td>
            </tr>

        </>
    );
}

export default SummaryRow;