import { FC } from "react";
import Table from "../common/Table";
import { useAppSelector } from "../../redux/hooks/AppSelector";
import { selectCategories } from "../../redux/reducers/CategorySlice";
import SummaryRow from "../common/SummaryRow";


const SummaryTable: FC = () => {
    const categories = useAppSelector(selectCategories)
    const columns = ["", "Note Category", "Active", "Archived", ""]
    return (
        <Table
            columns={columns}
            rows={categories.map(category =>
                <SummaryRow key={category.id} category={category} />
            )}
        />);
}

export default SummaryTable;