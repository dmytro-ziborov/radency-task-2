import { FC } from "react";
import { useAppDispatch } from "../redux/hooks/AppDispatch";
import { openModal } from "../redux/reducers/ModalSlice";
import NoteModal from "../components/NoteModal";
import Notes from "../components/Notes";
import SummaryTable from "../components/SummaryTable";

const Main: FC = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="container mx-auto">
            <Notes />
            <div className="container d-flex flex-row-reverse">
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { dispatch(openModal({ mode: "create", noteId: "" })) }}>
                    Create Note
                </button>
            </div>

            <SummaryTable />
            <NoteModal />
        </div>);
}

export default Main;