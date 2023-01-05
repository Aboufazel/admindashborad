import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import './side.style.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, useNavigate} from "react-router-dom";
import {SideMenuData} from '../../data/Database/SideMenuData'
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";
import useStorage from "../../hooks/storage";
import {useState} from "react";

const SideMenu = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    const [tokenInfo, setTokenInfo] = useStorage("auth", {
        refreshToken: "",
        accessToken: "",
        isLogin: true,
    });

    const manageLogout = () => {
        setTokenInfo({
            accessToken: "",
            refreshToken: "",
            isLogin: false,
        })
        navigate("/login")
    }

    return (
        <Container fluid dir={'rtl'}>
            <Modal style={{fontFamily:'iran-sans'}} show={show} onHide={handleClose}>
                <Modal.Body  class={'d-flex flex-column justify-content-start p-3'}>
                    {"آیا برای خروج از حساب اطمینان دارید؟"}
                     <Row className={"d-flex flex-row justify-content-center"}>
                        <Col className={"d-flex flex-row-reverse gap-3 mt-3 flex-row justify-content-center col-12"}>
                            <Button className={'close_btn'} onClick={()=>manageLogout()}>
                                {"خروج از حساب"}
                            </Button>
                            <Button className={'save_btn'} onClick={handleClose}>
                                {"انصراف"}
                            </Button>
                        </Col>
                     </Row>
                </Modal.Body>
            </Modal>
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
                                <ul onClick={() => handleShow()}>
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