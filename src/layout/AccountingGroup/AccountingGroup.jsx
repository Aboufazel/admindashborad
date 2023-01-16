import {Alert, Breadcrumb, Button, Col, Container, Modal, Row} from "react-bootstrap";
import FilterBox from "../../components/FilterBox/FilterBox";
import {
    AddAccountGroup,
    DeleteAccountGroup,
    EditAccountGroup,
    EditIsActive,
    GetAllAccountGroup, GetById
} from "../../api/AccountGroup";
import '../../components/CustomTable/table.style.css'
import {useEffect, useState} from "react";
import ActionTableButton from "../../components/ActionTableButton/ActionTableButton";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {BeatLoader} from "react-spinners";
import {useNavigate} from "react-router-dom";
import "../../components/CustomModal/modal.style.css"


const AccountingGroup = () => {
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

    const handleEditClose = () => {
        setEditShow(false);
        emptyInput()
    };
    const handleShow = () => setShow(true);

    const manageChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    }

    const manageEditChange = (e) => {
        setEdit({...edit, [e.target.name]: e.target.value});
    }

    const AccountGroupGetTabel = async () => {
        const data = await GetAllAccountGroup().catch(() => setError(true));
        if (data.data.isSuccess === false) {
            localStorage.clear();
            alert("نیاز به ورود مجدد دارید");
            navigate('/login')
        }
        setAccount(data.data.accountGroups)
    };

    useEffect(() => {
        AccountGroupGetTabel();
    }, []);


    const manageAddAccount = async () => {
        const addResponse = await AddAccountGroup(value.code, value.name);
        if (addResponse.data.isSuccess === true) {
           setMessage(addResponse.data.message);
            setShow(false);
            setSuccessShow(true)
            emptyInput();
            setTimeout(() => {
                setSuccessShow(false)
            }, 2500)
        } else {
            setMessage(addResponse.data.message);
            setShow(false);
            setErrorShow(true);
            setTimeout(() => {
                setErrorShow(false)
            }, 2500)
        }

    }

    const manageEditAccount = async (id) => {
        setEditShow(true);
        setLoading(true)
        const getResponse = await GetById(id);
        getResponse.data.accountGroups.map(item => setEdit({
            id: item.accountGroupId,
            code: item.accountGroupCode, name: item.accountGroupName, active: item.isActive
        }))
        if (getResponse.status === 200) {
            setLoading(false)
        } else {
            setEditShow(false)
        }
    }

    const manageSendEditAccount = async () => {
        const sendEditResponse = await EditAccountGroup(edit.id, edit.code, edit.name, edit.active);
        if (sendEditResponse.data.isSuccess === true) {
            setSuccessShow(true);
            setEditShow(false);
            setMessage(sendEditResponse.data.message);
            setTimeout(() => {
                setSuccessShow(false);
            }, 2500)
        } else {
            setMessage(sendEditResponse.data.message);
            setErrorShow(true);
            setTimeout(() => {
                setErrorShow(false);
            }, 2500)
        }
    }


    const manageRemoveAccount = async (id) => {
        console.log(id)
        const removeResponse = await DeleteAccountGroup(id);
        console.log(removeResponse)
        if (removeResponse.data.isSuccess === false) {
            setMessage(removeResponse.data.message);
            setErrorShow(true);
            setTimeout(() => {
                setErrorShow(false);
                setMessage("");
            }, 2500)
        } else if (removeResponse.data.isSuccess === true) {
            setMessage(removeResponse.data.message);
            setSuccessShow(true);
            setTimeout(() => {
                setSuccessShow(false);
                setMessage("");
            }, 2500)
        }
    }

    const manageActive = async (id, active) => {
        console.log(active)
        const activeResponse = await EditIsActive(id, active);
        console.log(activeResponse)
    }

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
                            {'گروه حساب'}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row className={'main_block'}>
                <Col>
                    <Row>
                        <Col>
                            <p>
                                {'گروه حساب'}
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col className={"position-relative"}>
                            <Alert style={{position:"fixed" , top:0 , left:0}} variant={"danger"}
                                   onClose={() => setErrorShow(false)} dismissible show={errorShow}>
                                {message}
                            </Alert>
                            <Alert  style={{position:"fixed" , top:0 , left:0}} variant={"success"}
                                   onClose={() => setSuccessShow(false)} dismissible show={successShow}>
                                {message}
                            </Alert>
                        </Col>
                    </Row>
                    <Row className={"d-flex my-3 mb-5"}>
                        <Col>
                            <>
                                <Button className={'btn_style'} onClick={handleShow}>
                                    {"افزودن گروه حساب"}
                                </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title className={'modal_title'}>
                                            {"افزودن حساب"}
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body class={'d-flex flex-column justify-content-start p-3'}>
                                        <Row className={"my-3"}>
                                            <Col className={"d-flex align-items-center col-12"}>
                                                <label style={{fontFamily: 'iran-sans'}}
                                                       className={"me-2"}>{"کد گروه:"}</label>
                                                <input name={"code"} onChange={manageChange} value={value.code}
                                                       className={'p-2'}/>
                                            </Col>
                                        </Row>
                                        <Row className={"my-3"}>
                                            <Col className={"d-flex align-items-center col-12"}>
                                                <label style={{fontFamily: 'iran-sans'}}
                                                       className={"me-2"}>{"نام گروه:"}</label>
                                                <input name={"name"} onChange={manageChange} value={value.name}
                                                       className={'p-2'}/>
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button className={'close_btn'} onClick={handleClose}>
                                            {"بستن"}
                                        </Button>
                                        <Button onClick={() => manageAddAccount()} className={'save_btn'}>
                                            {"ایجاد گروه"}
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                <Modal show={editShow} onHide={handleEditClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title className={'modal_title'}>
                                            {"ویرایش حساب"}
                                        </Modal.Title>
                                    </Modal.Header>
                                    {loading === true ?
                                        <div className={"d-flex w-100 justify-content-center"}><BeatLoader
                                            color="#3c8dbc"/>
                                        </div> :
                                        <Modal.Body
                                            class={'d-flex flex-column justify-content-start p-3'}>
                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center col-12"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"شناسه گروه:"}</label>
                                                    <input disabled={true} name={"id"}
                                                           value={edit.id} className={'p-2'}/>
                                                </Col>
                                            </Row>
                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center col-12"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"کد گروه:"}</label>
                                                    <input name={"code"} onChange={manageEditChange}
                                                           value={edit.code} className={'p-2'}/>
                                                </Col>
                                            </Row>
                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center col-12"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"نام گروه:"}</label>
                                                    <input name={"name"} onChange={manageEditChange}
                                                           value={edit.name} className={'p-2'}/>
                                                </Col>
                                            </Row>
                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center col-12"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"وضعیت حساب:"}</label>
                                                    <input name={"active"} onChange={manageEditChange}
                                                           value={edit.active} className={'p-2'}/>
                                                </Col>
                                            </Row>
                                        </Modal.Body>
                                    }
                                    <Modal.Footer>
                                        <Button className={'close_btn'} onClick={handleEditClose}>
                                            {"بستن"}
                                        </Button>
                                        <Button onClick={() => manageSendEditAccount()} className={'save_btn'}>
                                            {"ویرایش گروه"}
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </>
                        </Col>
                    </Row>
                    <Row>
                        <FilterBox/>
                    </Row>
                </Col>
                <Row>
                    <Col className={"d-flex p-5 w-100 col-12"}>
                        <Row style={{height: '80vh'}} className={"overflow-scroll d-flex w-100"}>
                            {account === undefined ?
                                <div className={"d-flex w-100 justify-content-center"}><BeatLoader color="#3c8dbc"/>
                                </div> :
                                <table className={"table_block"}>
                                    <thead>
                                    <tr>
                                        <td className={"p-2"}>
                                            {"کد گروه حساب"}
                                        </td>
                                        <td className={"p-2"}>
                                            {"نام گروه حساب"}
                                        </td>
                                        <td className={"p-2"}>
                                            {"وضعیت حساب"}
                                        </td>
                                        <td className={"p-2"}>
                                            {"حساب های کل"}
                                        </td>
                                        <td className={"p-2"}>
                                            {"زبان"}
                                        </td>
                                        <td className={"p-2"}>
                                            {"عملیات"}
                                        </td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        account.map(item => (
                                            <tr key={item.accountGroupId}>
                                                <td className={"p-2"}>{item.accountGroupCode}</td>
                                                <td className={"p-2"}>{item.accountGroupName}</td>
                                                <td className={"p-2"}>{item.isActive === true ? <Button
                                                    onClick={() => manageActive(item.accountGroupId, !item.isActive)}
                                                    variant={"success"} value={true}>{"فعال"}</Button> : <Button
                                                    onClick={() => manageActive(item.accountGroupId, !item.isActive)}
                                                    variant={"danger"} value={false}>{"غیر فعال"}</Button>}</td>
                                                <td className={"p-2"}><Button variant={"warning"}>{"مشاهده"}</Button>
                                                </td>
                                                <td className={"p-2"}>{item.lang === "fa" ? "فارسی" : "انگلیسی"}</td>
                                                <td className={"d-flex justify-content-center gap-2 p-2"}>
                                                    <ActionTableButton color={"--text-color-white"}
                                                                       bgColor={"--color-warning"}
                                                                       tooltip={"ویرایش"}
                                                                       icon={faEdit}
                                                                       onClick={() => manageEditAccount(item.accountGroupId)}/>

                                                    <ActionTableButton color={"--text-color-white"}
                                                                       bgColor={"--color-danger"}
                                                                       tooltip={"حذف کاربر"}
                                                                       icon={faTrash}
                                                                       onClick={() => manageRemoveAccount(item.accountGroupId)}/>
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

export default AccountingGroup;