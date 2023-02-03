import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";
import "./login.style.css"
import {LoginApi} from "../../api/Services"
import {useNavigate} from "react-router-dom";
import useStorage from "../../hooks/storage";
import {useState} from "react";
import LoginVector from "../../assets/pics/loginVector.png"


const Login = ({}) => {
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState(false);
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
            <Alert style={{position: "absolute", top: 25, left: 25, fontFamily: 'iran-sans'}} variant={"danger"}
                   show={showAlert}>
                {message}
            </Alert>
            <Row className={"my-auto vh-100 d-flex align-items-center justify-content-center"}>
                <div className={"login-block"}>
                    <Row className={"d-flex justify-content-center align-items-center"}>
                        <Col className={"my-auto w-75 d-flex justify-content-center"}>
                            <img src={LoginVector} alt={"ورود به پنل"}/>
                        </Col>
                        <Col className={"my-auto w-75 d-flex justify-content-center"}>
                            <div className={"login-box"}>
                                <Form onSubmit={manageSubmit} className={"d-flex flex-column w-auto"}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>{"نام کاربری یا شماره موبایل"}</Form.Label>
                                        <Form.Control onChange={(e) => setState({...state, email: e.target.value})}
                                                      value={state.email} type="text" placeholder="نام کاربری"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>{"رمز عبور"}</Form.Label>
                                        <Form.Control onChange={(e) => setState({...state, password: e.target.value})}
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
                </div>
            </Row>
        </Container>
    )
}


export default Login;