import { FC, ReactElement } from "react";
import TableHead from "../TableHead";
import s from './style.module.css'

interface TableProps {
    columns: string[];
    rows: ReactElement[];
}

const Table: FC<TableProps> = ({ columns, rows: data }) => {
    return (<table className={`table ${s["table-data"]}`}>
        <TableHead columns={columns} />
        <tbody className={s.tableBody}>{data}</tbody>
    </table>);
}

export default Table;