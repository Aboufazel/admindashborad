import {Col, Container, Row} from "react-bootstrap";
import './main.style.css'
import StatusCard from "../../components/StatusCard/StatusCard";

const Main = () => {
  return(
      <Container>
          <Row className={'dashboard_block'}>
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