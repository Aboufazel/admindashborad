import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";
import "./login.style.css"
import {LoginApi} from "../../api/Services"
import {useNavigate} from "react-router-dom";
import useStorage from "../../hooks/storage";
import {useEffect, useState} from "react";
import LoginVector from "../../assets/pics/loginVector.jpg"


const Login = ({}) => {
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState(false);
    const navigate = useNavigate();
    const [authInfo, setAuthInfo] = useStorage("auth", {
        userId: "",
        accessToken: "",
        isLogin: false,
    })

    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 3500));
    }

        const [isLoading, setLoading] = useState(false);

        useEffect(() => {
            if (isLoading) {
                simulateNetworkRequest().then(() => {
                    setLoading(false);
                });
            }
        }, [isLoading]);

        const handleClick = () => setLoading(true);

        const [state, setState] = useState({
            email: "",
            password: "",
        });

        const manageSubmit = (e) => {
            e.preventDefault();
            LoginApi(state.email, state.password)
                .then(res => {
                    if (res.data.isSuccess === true) {
                        setAuthInfo({
                            userId: res.data.data.userId,
                            accessToken: res.data.data.token,
                            isLogin: true,
                        });
                        navigate("/");
                    } else {
                        setMessage(res.data.message);
                        setShowAlert(true);
                        setTimeout(() => {
                            setShowAlert(false)
                        }, 1000)
                    }
                })

        };
        return (
            <Container className={"d-flex justify-content-center align-items-center"}>
                <Row className={"my-auto vh-100 d-flex align-items-center justify-content-center"}>
                    <div className={"login-block"}>
                        <Alert style={{position: "absolute", top: 25, left: 25, fontFamily: 'iran-sans'}}
                               variant={"danger"}
                               show={showAlert}>
                            {message}
                        </Alert>
                        <Row className={"d-flex justify-content-center align-items-center"}>
                            <Col className={"my-auto d-flex justify-content-center align-items-center"}>
                                <img className={"login-img"} src={LoginVector} alt={"ورود به پنل"}/>
                            </Col>
                            <Col className={"my-auto d-flex justify-content-center"}>
                                <div className={"login-box w-75"}>
                                    <div
                                        className={"login-title d-flex align-items-center justify-content-center w-100"}>
                                        <h3>
                                            پنل مدیریتی
                                        </h3>
                                    </div>
                                    <Form onSubmit={manageSubmit} className={"d-flex flex-column w-auto"}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>{"نام کاربری یا شماره موبایل"}</Form.Label>
                                            <Form.Control className={"w-100 form-input"}
                                                          onChange={(e) => setState({...state, email: e.target.value})}
                                                          value={state.email} type="text" placeholder="نام کاربری"/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label className={"mb-2"}>{"رمز عبور"}</Form.Label>
                                            <Form.Control className={"w-100 form-input"} onChange={(e) => setState({
                                                ...state,
                                                password: e.target.value
                                            })}
                                                          value={state.password} type="password"
                                                          placeholder="رمز عبور"/>
                                        </Form.Group>
                                        <Row className={"d-flex mt-4 justify-content-center "}>

                                            <Button
                                                variant="primary"
                                                type="submit"
                                                className={"w-75 button-primary"}
                                                disabled={isLoading}
                                                onClick={!isLoading ? handleClick : null}
                                            >
                                                {isLoading ? 'در حال ورود...' : 'ورود'}
                                            </Button>
                                        </Row>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        )
    }

    export default Login;