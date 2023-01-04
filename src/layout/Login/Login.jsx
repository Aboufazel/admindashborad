import {Button, Col, Container, Form, Row} from "react-bootstrap";
import "./login.style.css"
import Api from "../../api/Services"
import {useNavigate} from "react-router-dom";
import useStorage from "../../hooks/storage";
import {useState} from "react";


const Login = ({}) => {
    const navigate = useNavigate();
    const [authInfo, setAuthInfo] = useStorage("auth", {
        refreshToken: "",
        accessToken: "",
        isLogin: false,
    })

    console.log(authInfo);

    const [state, setState] = useState({
        email: "",
        password: "",
    });


    const manageSubmit = (e) => {
        e.preventDefault();
        Api
            .post("/auth/login/", state)
            .then((res) => {
                setAuthInfo({
                    accessToken: res.data.access,
                    refreshToken: res.data.refresh,
                    isLogin: true,
                });
                navigate("/");
            })
            .catch((e) => {
                console.log(e);
            });
    };
    return (
        <Container className={"d-flex justify-content-center align-items-center"}>
            <Row className={"my-auto vh-100"}>
                <Col className={"my-auto w-75 d-flex justify-content-center"}>
                    <div className={"login-box"}>
                        <Form onSubmit={manageSubmit} className={"d-flex flex-column w-auto"}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>نام کاربری یا شماره موبایل</Form.Label>
                                <Form.Control  onChange={(e) => setState({ ...state, email: e.target.value })}
                                                          value={state.email} type="email" placeholder="نام کاربری"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>رمز عبور</Form.Label>
                                <Form.Control onChange={(e) => setState({ ...state, password: e.target.value })}
                                                         value={state.password} type="password" placeholder="رمز عبور"/>
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