import {Col, Container, Row} from "react-bootstrap";
import '../main.style.css'
import StatusCard from "../../components/StatusCard/StatusCard";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


const Main = () => {

    const storageData = JSON.parse(localStorage.getItem('auth'));
    const navigate = useNavigate();

    const manageValidation = ()=>{
        if(storageData.userId === ""){
            alert("if-test")
            localStorage.clear();
            navigate('/login')
        }
    }

    useEffect(() =>{
        manageValidation()
    } , [])

    return(
      <Container>
          <Row className={'main_block'}>
              <Col>
                  <p>
                      {'داشبور نرم افزار حسابداری'}
                  </p>
                  <Row>
                      <Col>
                          <StatusCard bgColor={'--color-danger'} title={'گزارش حسابداری'}/>
                      </Col>
                      <Col>
                          <StatusCard bgColor={'--color-success'} title={'گزارش کلی کاربران'}/>
                      </Col>
                      <Col>
                          <StatusCard bgColor={'--color-warning'} title={'گزارش فروش'}/>
                      </Col>
                  </Row>
              </Col>
          </Row>
      </Container>
  )
}

export default Main;