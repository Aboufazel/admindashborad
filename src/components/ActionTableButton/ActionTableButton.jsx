import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './btn.style.css'

//btn props : onClick ()=>{} , icon : object bgColor: 'string'
const ActionTableButton = ({onClick, icon, bgColor , color}) => {
    return (
        <div onClick={onClick} className={'btn_block'}
             style={{backgroundColor:`var(${bgColor})`,
                 color:`var(${color})`}}>
            <FontAwesomeIcon icon={icon}/>
        </div>
    )
}

export default ActionTableButton;