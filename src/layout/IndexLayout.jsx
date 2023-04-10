import {Col, Container, Row} from "react-bootstrap";
import './layout.style.css'
import {Outlet, useNavigate} from "react-router-dom";
import SideMenu from "../components/SideMenu/SideMenu";
import {useEffect, useState} from "react";
import LoadingPage from "./Login/LoadingPage";
import Storage from "../Service/Storage";

const IndexLayout = () => {

    const [loading , setLoading]= useState(true);
    const storage = Storage();
    const admin = 4;
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        } , 200)
    } , []);




    useEffect(()=>{
        ManageToken()
    } , [storage.kind])


    const ManageToken = ()=>{
        if (storage.kind === undefined){
            navigate("/login")
        }
    }



    const ManageAdminNavigate = ()=>{

        if (storage.userId === undefined) {
            navigate("/login")
        }
        else if (storage.kind !== admin) {
            navigate("/app")
        } else if (storage.kind === admin) {
            navigate("/")
        }
    }



    useEffect(()=>{
        ManageAdminNavigate()
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