import './statuscard.style.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const StatusCard = ({bgColor , title}) => {
    return (
        <div style={{backgroundColor: `var(${bgColor})`}} className={'status_card_block'}>
            <p>
                {title}
            </p>
            <div className={'status_card_bottom'}>
                {'مشاهده گزارش'}
                <FontAwesomeIcon className={'ms-2'} icon={faArrowLeft}/>
            </div>
        </div>
    )
}

export default StatusCard;