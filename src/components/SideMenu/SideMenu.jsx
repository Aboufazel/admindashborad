import {Col, Container, Row} from "react-bootstrap";
import './side.style.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {SideMenuData} from '../../data/Database/SideMenuData'

const SideMenu = () => {
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
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    )
}

export default SideMenu;