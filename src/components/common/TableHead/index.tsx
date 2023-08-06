import { FC } from "react";
import s from './style.module.css'

interface TableHeadProps {
    columns: string[];
}

const TableHead: FC<TableHeadProps> = ({ columns }) => {
    return (<thead >
        <tr >
            {columns.map(
                (column, index) =>
                    <th className={s.head} key={index}>
                        {column}
                    </th>)}
        </tr>
    </thead>);
}

export default TableHead;
