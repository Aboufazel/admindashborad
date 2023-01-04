import {Col, Container, Row} from "react-bootstrap";
import './side.style.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, useNavigate} from "react-router-dom";
import {SideMenuData} from '../../data/Database/SideMenuData'
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";
import useStorage from "../../hooks/storage";

const SideMenu = () => {
    const navigate = useNavigate();
    const [tokenInfo , setTokenInfo]= useStorage("auth", {
        refreshToken: "",
        accessToken: "",
        isLogin: true,
    });
    console.log(tokenInfo)
    const manageLogout = ()=>{
        setTokenInfo({
            accessToken:"",
            refreshToken:"",
            isLogin: false,
        })
        navigate("/login")
    }

    console.log(tokenInfo)
    return (
        <Container fluid dir={'rtl'}>
            <Row>
                <Col xl={12} className={'side_menu'}>
                    <Row className={'side_title'}>
                        <Col>
                            <b>
                                {'کنترل پنل مدیریتی'}
                            </b>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={'p-0'}>
                            <ul>
                                <li className={'menu_stick'}>
                                    {'منو'}
                                </li>
                                {
                                    SideMenuData.map(item => (
                                        <Link to={item.link}>
                                            <li id={item.id}>
                                                {item.name}
                                                <FontAwesomeIcon icon={item.icon}/>
                                            </li>
                                        </Link>
                                    ))
                                }
                                <ul onClick={()=> manageLogout()}>
                                    <li>
                                        {"خروج"}
                                        <FontAwesomeIcon icon={faDoorOpen}/>
                                    </li>
                                </ul>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    )
}

export default SideMenu;