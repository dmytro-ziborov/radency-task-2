import { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks/AppDispatch";
import { closeModal, getModalState } from "../../redux/reducers/ModalSlice";
import { useAppSelector } from "../../redux/hooks/AppSelector";
import { selectCategories } from "../../redux/reducers/CategorySlice";
import { addNote, selectNoteById, updateNote } from "../../redux/reducers/NoteSlice";


const NoteModal: FC = () => {
    const dispatch = useAppDispatch();

    const { mode, noteId } = useAppSelector(getModalState);
    const categories = useAppSelector(selectCategories);
    const note = useAppSelector(selectNoteById(noteId))

    const [name, setName] = useState<string>("");
    const [category, setCategory] = useState<number>(1)
    const [content, setContent] = useState<string>("")


    useEffect(() => {
        setName(mode === "edit" && note ? note.name : "");
        setCategory(mode === "edit" && note ? note.category : 1)
        setContent(mode === "edit" && note ? note.content : "");
    }, [mode, note])

    const closeForm = () => {
        dispatch(closeModal);
        setName("");
        setCategory(1)
        setContent("");
    }

    const createNote = () => {
        dispatch(addNote({ name, category, content }))
        closeForm();
    }

    const editNote = () => {
        dispatch(updateNote({ id: noteId, name, category, content }))
        closeForm();
    }



    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <div className="was-validated">
                                <label htmlFor="name-input" className="form-label">Name</label>
                                <input
                                    required={true}
                                    type="text"
                                    className="form-control"
                                    id="name-input"
                                    placeholder="Enter name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)
                                    }
                                />
                                <div className="invalid-feedback">
                                    Please enter Note's name
                                </div>
                            </div>
                            <div>
                                <label htmlFor="category-input" className="form-label">Category</label>
                                <select
                                    className="form-select"
                                    id="category-input"
                                    aria-label="Default select example"
                                    form="note-form"
                                    value={category}
                                    onChange={(e) => setCategory(Number(e.target.value))}
                                >
                                    {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="content-input" className="form-label">Content</label>
                                <textarea
                                    className="form-control"
                                    id="content-input"
                                    placeholder="Enter content"
                                    rows={5}
                                    cols={20}
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal" disabled={name.length === 0} onClick={mode === "create" ? createNote : editNote} >
                            {mode === "create" ? "Create" : "Edit"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NoteModal;