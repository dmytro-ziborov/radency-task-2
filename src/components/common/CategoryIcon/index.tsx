import { FC } from "react";
import { Category } from "../../../models/Category";
import s from "./style.module.css"

interface CategoryIconProps {
    category: Category;
}

const CategoryIcon: FC<CategoryIconProps> = ({ category }) => {
    return (<i className={`bi bi-${category.symbol} ${s["category-icon"]}`}></i>);
}

export default CategoryIcon;