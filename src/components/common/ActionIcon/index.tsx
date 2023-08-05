import { FC } from "react";
import s from './style.module.css'

interface ActionIconProps {
    icon: string;
    action: () => void
}

const ActionIcon: FC<ActionIconProps> = ({ icon, action }) => {
    return (<i className={`bi bi-${icon} ${s.action}`} onClick={action}></i>);
}

export default ActionIcon;