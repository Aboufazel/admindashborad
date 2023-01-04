import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {HashLoader} from "react-spinners";


const LoadingPage = () => {
  return(
      <Container className={"d-flex justify-content-center align-items-center"}>
          <Row className={"my-auto vh-100"}>
              <Col className={"my-auto w-75 d-flex flex-column align-items-center justify-content-center"}>
                  <HashLoader color="#3c8dbc" size={110}/>
                  <h1 className={"mt-4"} style={{fontFamily:'iran-sans'}}>
                      {"به پنل کاربری خوش آمدید"}
                  </h1>
              </Col>
          </Row>
      </Container>
  )
}


export default LoadingPage;