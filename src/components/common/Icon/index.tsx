import { FC } from "react";
import s from './style.module.css'
interface IconProps {
    icon: string;
}

const Icon: FC<IconProps> = ({ icon }) => {

    return (<i className={`bi bi-${icon} ${s.icon}`}></i>);
}

export default Icon;