import {Col, Container, Row} from "react-bootstrap";
import './layout.style.css'
import {Outlet} from "react-router-dom";
import SideMenu from "../components/SideMenu/SideMenu";
import {useEffect, useState} from "react";
import LoadingPage from "./Login/LoadingPage";

const IndexLayout = () => {
    const [loading , setLoading]= useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        } , 500)
    } , [])

  return(
      loading === true  ? <LoadingPage/> : <Container fluid>
          <Row>
              <Col className={'p-0'} xl={2}>
                  <SideMenu/>
              </Col>
              <Col xl={10}>
                  <Row>
                      <Col xl={12} className={'outlet_header'}></Col>
                  </Row>
                  <Row>
                      <Col className={'outlet_block'} xl={12}>
                          <Outlet/>
                      </Col>
                  </Row>
              </Col>
          </Row>
      </Container>
  )
}

export default IndexLayout;