import {Button, Col, Container, Form, Row} from "react-bootstrap";
import "./login.style.css"
import Api, {GetData, LoginApi} from "../../api/Services"
import {useNavigate} from "react-router-dom";
import useStorage from "../../hooks/storage";
import {useId, useState} from "react";
import axios from "axios";


const Login = ({}) => {

    const navigate = useNavigate();
    const [authInfo, setAuthInfo] = useStorage("auth", {
        userId: "",
        accessToken: "",
        isLogin: false,
    })

    //console.log(authInfo);

    const [state, setState] = useState({
        email: "",
        password: "",
    });

    const manageSubmit = (e) => {
        e.preventDefault();
        LoginApi(state.email , state.password)
            .then(res => {
                if (res.data.isSuccess === true){
                    setAuthInfo({
                        userId: res.data.data.userId,
                        accessToken: res.data.data.token,
                        isLogin: true,
                    });
                    navigate("/");
                }
                else {
                    console.log(res)
                    console.log("ورود با خطا مواجه شد")
                }
            })

    };
    return (
        <Container className={"d-flex justify-content-center align-items-center"}>
            <Row className={"my-auto vh-100"}>
                <Col className={"my-auto w-75 d-flex justify-content-center"}>
                    <div className={"login-box"}>
                        <Form onSubmit={manageSubmit} className={"d-flex flex-column w-auto"}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>{"نام کاربری یا شماره موبایل"}</Form.Label>
                                <Form.Control  onChange={(e) => setState({ ...state, email: e.target.value })}
                                                          value={state.email} type="text" placeholder="نام کاربری"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{"رمز عبور"}</Form.Label>
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