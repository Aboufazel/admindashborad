import {Col, Container, Row} from "react-bootstrap";
import './layout.style.css'
import {Outlet} from "react-router-dom";
import SideMenu from "../components/SideMenu/SideMenu";

const IndexLayout = () => {
  return(
      <Container fluid>
          <Row>
              <Col className={'p-0'} xl={2}>
                  <SideMenu/>
              </Col>
              <Col xl={10}>
                  <Row>
                      <Col xl={12} className={'outlet_header'}></Col>
                  </Row>
                  <Row>
                      <Col xl={12}>
                          <Outlet/>
                      </Col>
                  </Row>
              </Col>
          </Row>
      </Container>
  )
}

export default IndexLayout;