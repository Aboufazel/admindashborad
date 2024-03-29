import {Col, Container, Row} from "react-bootstrap";
import {HashLoader} from "react-spinners";


const LoadingPage = () => {
  return(
      <Container className={"d-flex justify-content-center align-items-center"}>
          <Row className={"my-auto vh-100"}>
              <Col className={"my-auto w-75 d-flex flex-column align-items-center justify-content-center"}>
                  <HashLoader color="#0D6DFD" size={110}/>
                  <h1 className={"mt-4"} style={{fontFamily:'iran-sans'}}>
                      {"در حال دریافت اطلاعات هستیم"}
                  </h1>
              </Col>
          </Row>
      </Container>
  )
}


export default LoadingPage;