import {Button, Col, Container, Form, Row} from "react-bootstrap";
import "./login.style.css"

const Login = () => {

    return (
        <Container className={"d-flex justify-content-center align-items-center"}>
            <Row className={"my-auto vh-100"}>
                <Col className={"my-auto w-75 d-flex justify-content-center"}>
                    <div className={"login-box"}>
                        <Form className={"d-flex flex-column w-auto"}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>نام کاربری یا شماره موبایل</Form.Label>
                                <Form.Control type="email" placeholder="نام کاربری"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>رمز عبور</Form.Label>
                                <Form.Control type="password" placeholder="رمز عبور"/>
                            </Form.Group>
                            <Row className={"d-flex mt-4 justify-content-center "}>
                                <Button className={"w-50 button-primary"} variant="primary" type="submit">
                                    {"ورود"}
                                </Button>
                            </Row>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default Login;