import {Breadcrumb, Button, Col, Container, Modal, Row} from "react-bootstrap";
import FilterBox from "../../components/FilterBox/FilterBox";
import {GetAllAccountMain} from "../../api/AccountMain";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {BeatLoader} from "react-spinners";
import ActionTableButton from "../../components/ActionTableButton/ActionTableButton";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import "./accountMain.style.css"

const AccountingMain = () => {
    const [account, setAccount] = useState(undefined);
    const [error, setError] = useState(false);
    const [value, setValue] = useState({code: "", name: ""});
    const [edit, setEdit] = useState({id: "", code: "", name: "", active: ""});
    const [show, setShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [errorShow, setErrorShow] = useState(false);
    const [successShow, setSuccessShow] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleClose = () => {
        setShow(false);
        emptyInput()
    };

    const handleShow = () => setShow(true);

    const manageChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    }


    const AccountMainGetTabel = async () => {
        const data = await GetAllAccountMain().catch(() => setError(true));
        console.log(data.data.accountMains)
        if (data.data.isSuccess === false) {
            localStorage.clear();
            alert("نیاز به ورود مجدد دارید");
            navigate('/login')
        }
        setAccount(data.data.accountMains)
    };


    useEffect(() => {
        AccountMainGetTabel();
    }, []);


    const emptyInput = () => {
        setValue({code: "", name: ""});
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item href={'/'} className={'beard_crumb'}>
                            {'داشبورد'}
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            {'حساب کل'}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row className={'main_block'}>
                <Col>
                    <Row>
                        <Col>
                            <p>
                                {'حساب کل'}
                            </p>
                        </Col>
                    </Row>
                    <Row className={"d-flex my-3 mb-5"}>
                        <Col>
                            <>
                                <Button className={'btn_style'} onClick={handleShow}>
                                    {"افزودن حساب کل به حساب گروه"}
                                </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title className={'modal_title'}>
                                            {"افزودن حساب کل"}
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body class={'d-flex flex-column justify-content-start p-3'}>
                                        <Row className={"my-3"}>
                                            <Col className={"d-flex align-items-center col-12"}>
                                                <label style={{fontFamily: 'iran-sans'}}
                                                       className={"me-2"}>{"کد حساب کل:"}</label>
                                                <input name={"code"} onChange={manageChange} value={value.code}
                                                       className={'p-2'}/>
                                            </Col>
                                        </Row>
                                        <Row className={"my-3"}>
                                            <Col className={"d-flex align-items-center col-12"}>
                                                <label style={{fontFamily: 'iran-sans'}}
                                                       className={"me-2"}>{"نام حساب کل:"}</label>
                                                <input name={"name"} onChange={manageChange} value={value.name}
                                                       className={'p-2'}/>
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button className={'close_btn'} onClick={handleClose}>
                                            {"بستن"}
                                        </Button>
                                        <Button className={'save_btn'}>
                                            {"ایجاد گروه"}
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </>
                        </Col>
                    </Row>
                    <Row>
                        <FilterBox/>
                    </Row>
                    <Row>
                        <Col>
                        </Col>
                    </Row>
                </Col>
                <Row>
                    <Col className={"d-flex p-5 w-100 col-12"}>
                        <Row className={"overflow-scroll d-flex w-100"}>
                            {account === undefined ?
                                <div className={"d-flex w-100 justify-content-center"}><BeatLoader color="#3c8dbc"/>
                                </div> :
                                <table className={"table_block"}>
                                    <thead>
                                    <tr>
                                        <td className={"p-2"}>
                                            {"کد حساب کل"}
                                        </td>
                                        <td className={"p-2"}>
                                            {"نام حساب کل"}
                                        </td>
                                        <td className={"p-2"}>
                                            {"حساب های معین"}
                                        </td>
                                        <td className={"p-2"}>
                                            {"وضعیت حساب"}
                                        </td>
                                        <td className={"p-2"}>
                                            {"عملیات"}
                                        </td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        account.map(item => (
                                            <tr key={item.accountMainId}>
                                                <td className={"p-2"}>{item.accountMainCode}</td>
                                                <td className={"p-2"}>{item.accountMainName}</td>
                                                <td className={"p-2"}>
                                                    <Button variant={"warning"}>
                                                        <Link className={"link"} to={"/accountTotal"}>
                                                            {"مشاهده"}
                                                        </Link>
                                                    </Button>
                                                </td>
                                                <td className={"p-2"}>{item.isActive === true ? <Button
                                                    variant={"success"} value={true}>{"فعال"}</Button> : <Button
                                                    variant={"danger"} value={false}>{"غیر فعال"}</Button>}</td>
                                                <td className={"d-flex justify-content-center gap-2 p-2"}>
                                                    <ActionTableButton color={"--text-color-white"}
                                                                       bgColor={"--color-warning"}
                                                                       tooltip={"ویرایش"}
                                                                       icon={faEdit}
                                                    />

                                                    <ActionTableButton color={"--text-color-white"}
                                                                       bgColor={"--color-danger"}
                                                                       tooltip={"حذف کاربر"}
                                                                       icon={faTrash}
                                                    />
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            }
                        </Row>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default AccountingMain;