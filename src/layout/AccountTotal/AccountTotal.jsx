import {Alert, Breadcrumb, Button, Col, Container, Modal, Row} from "react-bootstrap";
import FilterBox from "../../components/FilterBox/FilterBox";
import Form from 'react-bootstrap/Form';
import {useContext, useEffect, useState} from "react";
import {GiveIdContext} from "../../Context/GiveId";
import {
    AccountSpecGetById,
    AddAccountSpec, DeleteAccountSpec,
    EditAccountSpec,
    GetAllAccountSpec,
    SpecEditIsActive
} from "../../api/AccountSpec";
import {Link, useNavigate} from "react-router-dom";
import ActionTableButton from "../../components/ActionTableButton/ActionTableButton";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import Loader from "../../Loader/Loader";
import {AccountTotalTable} from "../../data/Database/AccountTotalTable";


const AccountTotal = () => {
    const [account, setAccount] = useState(undefined);
    const [error, setError] = useState(false);
    const [value, setValue] = useState({code: "", name: ""});
    const [instinct, setInstinct] = useState("");
    const [always, setAlways] = useState("");
    const [edit, setEdit] = useState({id: "", code: "", name: "", active: "", instinct: "", always: ""});
    const [show, setShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [errorShow, setErrorShow] = useState(false);
    const [successShow, setSuccessShow] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState(false);
    const [waiting, setWaiting] = useState(false);
    const [deleteModal, setDeleteModal] = useState(undefined);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [bread, setBread] = useState(undefined);


    const MainId = useContext(GiveIdContext);
    console.log(MainId)
    const navigate = useNavigate();


    const handleClose = () => {
        setShow(false);
        setDeleteModalShow(false)
        emptyInput()
    };

    const handleShow = () => setShow(true);


    const AccountSpecGetTabel = async () => {
        const data = await GetAllAccountSpec().catch(() => setError(true));

        if (data.data.isSuccess === false) {
            localStorage.clear();
            alert("نیاز به ورود مجدد دارید");
            navigate('/login')
        }

        setAccount(data.data.accountSpecs);

        if(account !== undefined){
            const GetBread = account.filter(item => item.accountMainId === MainId.authData)[0];
            setBread(GetBread);
        }

        if(bread === undefined){
            setReload(!reload)
        }
    };



    const manageChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    }

    const manageAddAccount = async () => {
        setWaiting(true);
        const addResponse = await AddAccountSpec(value.code, value.name, MainId.authData, instinct, always);
        if (addResponse.data.isSuccess === true) {
            setMessage(addResponse.data.message);
            setShow(false);
            setWaiting(false);
            setSuccessShow(true);
            emptyInput();
            setReload(!reload);
            setTimeout(() => {
                setSuccessShow(false)
            }, 2500)
        } else {
            setMessage(addResponse.data.message);
            setShow(false);
            setWaiting(false);
            setErrorShow(true);
            setTimeout(() => {
                setErrorShow(false)
            }, 2500)
        }

    }

    useEffect(() => {
        AccountSpecGetTabel();
        manageMainCode();
    }, [reload])


    const emptyInput = () => {
        setValue({code: "", name: ""});
    }


    const manageEditAccount = async (id) => {
        setEditShow(true);
        setLoading(true)
        const getResponse = await AccountSpecGetById(id);
        getResponse.data.accountSpecs.map(item => setEdit({
            id: item.accountSpecId,
            code: item.accountSpecCode, name: item.accountSpecName, active: item.isActive,
            instinct: item.instinct, always: item.type
        }))
        if (getResponse.status === 200) {
            setLoading(false)
        } else {
            setEditShow(false)
        }
    }

    const handleEditClose = () => {
        setEditShow(false);
        emptyInput()
    };

    const manageEditChange = (e) => {
        setEdit({...edit, [e.target.name]: e.target.value});
    }

    const manageSendEditAccount = async () => {
        setWaiting(true);
        const sendEditResponse = await EditAccountSpec(edit.id, MainId.authData, edit.code, edit.name, instinct, always);
        if (sendEditResponse.data.isSuccess === true) {
            setSuccessShow(true);
            setEditShow(false);
            setWaiting(false);
            setReload(!reload)
            setMessage(sendEditResponse.data.message);
            setTimeout(() => {
                setSuccessShow(false);
            }, 2500)
        } else {
            setMessage(sendEditResponse.data.message);
            setErrorShow(true);
            setWaiting(false);
            setTimeout(() => {
                setErrorShow(false);
            }, 2500)
        }
    }


    const manageRemoveAccount = async (id) => {
        setWaiting(true);
        setDeleteModalShow(false);
        const removeResponse = await DeleteAccountSpec(id);
        if (removeResponse.data.isSuccess === false) {
            setMessage(removeResponse.data.message);
            setErrorShow(true);
            setWaiting(false);
            setTimeout(() => {
                setErrorShow(false);
                setMessage("");
            }, 1000)
        } else if (removeResponse.data.isSuccess === true) {
            setMessage(removeResponse.data.message);
            setWaiting(false);
            setSuccessShow(true);
            setReload(!reload);
            setTimeout(() => {
                setSuccessShow(false);
                setMessage("");
            }, 1000)
        }
    }


    const manageMainCode = () => {
        if (MainId.authData === undefined) {
            navigate("/accountingGroup");
        }
    }

    const handleDeleteClose = () => {
        setDeleteModalShow(false);
    }

    const manageActive = async (id, active) => {
        setWaiting(true);
        const activeResponse = await SpecEditIsActive(id, active)
            .catch(() => {
                setMessage(activeResponse.data.message);
                setErrorShow(true);
                setWaiting(false);
                setTimeout(() => {
                    setErrorShow(false)
                }, 2500)
            })
        setReload(!reload);
        setWaiting(false);
    }

    const manageDeleteModal = (id) => {
        setDeleteModalShow(true);
        setDeleteModal(id);
    }


    const manageInstictSelectChange = (e) => {
        console.log(e.target.value)
        setInstinct(e.target.value)
    }


    const manageAlwaysSelectChange = (e) => {
        console.log(e.target.value)
        setAlways(e.target.value)
    }


    return (
        <Container>
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item className={'beard_crumb'}>
                            <Link to={'/'}>
                                {'داشبورد'}
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item className={'beard_crumb'}>
                            <Link to={'/accountingMain'}>
                                {
                                    bread === undefined ? "حساب کل" : ` حساب کل ${bread.accountMainName}`
                                }
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            {'حساب معین'}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row className={'main_block'}>
                <Col>
                    <Row className={'mb-3'}>
                        <Col lg={5}>
                            <p>
                                حساب های معین
                            </p>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                    <Row className={"d-flex my-3 mb-5"}>
                        <Col>
                            <>
                                <Button className={'btn_style'} onClick={handleShow}>
                                    {"افزودن حساب معین"}
                                </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title className={'modal_title'}>
                                            {"افزودن حساب معین"}
                                        </Modal.Title>
                                        {
                                            waiting === true ?
                                                <Loader/> : <div></div>
                                        }
                                    </Modal.Header>
                                    <Modal.Body class={'d-flex flex-column justify-content-start p-3'}>

                                        <Row className={"my-3"}>
                                            <Col className={"d-flex align-items-center col-3"}>
                                                <label style={{fontFamily: 'iran-sans'}}
                                                       className={"me-2"}>{"ماهیت حساب:"}</label>
                                            </Col>
                                            <Col className={"d-flex align-items-center col-9"}>
                                                <Form.Select
                                                    value={instinct}
                                                    onChange={manageInstictSelectChange}>
                                                    <option selected={true}>
                                                        {""}
                                                    </option>
                                                    <option value={0}>
                                                        {"بدون ماهیت"}
                                                    </option>
                                                    <option value={1}>
                                                        {"بدهکار"}
                                                    </option>
                                                    <option value={2}>
                                                        {"بستانکار"}
                                                    </option>
                                                </Form.Select>
                                            </Col>
                                        </Row>

                                        <Row className={"my-3"}>
                                            <Col className={"d-flex align-items-center col-3"}>
                                                <label style={{fontFamily: 'iran-sans'}}
                                                       className={"me-2"}>{"نوع حساب:"}</label>
                                            </Col>
                                            <Col className={"d-flex align-items-center col-9"}>
                                                <Form.Select
                                                    value={always}
                                                    onChange={manageAlwaysSelectChange}>
                                                    <option selected={true}>
                                                        {""}
                                                    </option>
                                                    <option value={0}>
                                                        {"موقت"}
                                                    </option>
                                                    <option value={1}>
                                                        {"دائم"}
                                                    </option>
                                                </Form.Select>
                                            </Col>
                                        </Row>

                                        <Row className={"my-3"}>
                                            <Col className={"d-flex align-items-center col-12"}>
                                                <label style={{fontFamily: 'iran-sans'}}
                                                       className={"me-2"}>{"کد حساب:"}</label>
                                                <input name={"code"} onChange={manageChange} value={value.code}
                                                       className={'p-2'}/>
                                            </Col>
                                        </Row>

                                        <Row className={"my-3"}>
                                            <Col className={"d-flex align-items-center col-12"}>
                                                <label style={{fontFamily: 'iran-sans'}}
                                                       className={"me-2"}>{"نام حساب:"}</label>
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
                                            {"ذخیره"}
                                        </Button>
                                    </Modal.Footer>
                                </Modal>


                                <Modal show={editShow} onHide={handleEditClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title className={'modal_title'}>
                                            {"ویرایش حساب"}
                                        </Modal.Title>
                                        {
                                            waiting === true ?
                                                <Loader/> : <div></div>
                                        }
                                    </Modal.Header>
                                    {loading === true ?
                                        <div className={"d-flex w-100 justify-content-center"}><Loader/></div> :
                                        <Modal.Body
                                            class={'d-flex flex-column justify-content-start p-3'}>

                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"ماهیت حساب فعلی:"}</label>
                                                    <input
                                                        value={edit.instinct === 0 ? "ماهیت ندارد" : edit.instinct === 1 ? "بدهکار" : "بستانکار"}
                                                        className={"bg-body"} disabled/>
                                                </Col>
                                            </Row>

                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"وضعیت حساب فعلی:"}</label>
                                                    <input value={edit.always === 0 ? "موقت" : "دائم"}
                                                           className={"bg-body"} disabled/>
                                                </Col>
                                            </Row>


                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center col-3"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"ماهیت حساب:"}</label>
                                                </Col>
                                                <Col className={"d-flex align-items-center col-9"}>
                                                    <Form.Select
                                                        value={instinct}
                                                        onChange={manageInstictSelectChange}>
                                                        <option selected={true}>
                                                            {""}
                                                        </option>
                                                        <option value={0}>
                                                            {"بدون ماهیت"}
                                                        </option>
                                                        <option value={1}>
                                                            {"بدهکار"}
                                                        </option>
                                                        <option value={2}>
                                                            {"بستانکار"}
                                                        </option>
                                                    </Form.Select>
                                                </Col>
                                            </Row>

                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center col-3"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"نوع حساب:"}</label>
                                                </Col>
                                                <Col className={"d-flex align-items-center col-9"}>
                                                    <Form.Select
                                                        value={always}
                                                        onChange={manageAlwaysSelectChange}>
                                                        <option selected={true}>
                                                            {""}
                                                        </option>
                                                        <option value={0}>
                                                            {"موقت"}
                                                        </option>
                                                        <option value={1}>
                                                            {"دائم"}
                                                        </option>
                                                    </Form.Select>
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

                                        </Modal.Body>
                                    }
                                    <Modal.Footer>
                                        <Button onClick={() => manageSendEditAccount()} className={'save_btn'}>
                                            {"ویرایش"}
                                        </Button>
                                        <Button className={'close_btn'} onClick={handleEditClose}>
                                            {"بستن"}
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                <Modal style={{fontFamily: 'iran-sans'}} show={deleteModalShow} onHide={handleClose}>
                                    <Modal.Body class={'d-flex flex-column justify-content-start p-3'}>
                                        {"آیا از حذف حساب اطمینان دارید؟"}
                                        <Row className={"d-flex flex-row justify-content-center"}>
                                            <Col
                                                className={"d-flex flex-row-reverse gap-3 mt-3 flex-row justify-content-center col-12"}>
                                                <Button className={'save_btn'} onClick={handleDeleteClose}>
                                                    {"انصراف"}
                                                </Button>
                                                <Button className={'close_btn'}
                                                        onClick={() => manageRemoveAccount(deleteModal)}>
                                                    {"حذف"}
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                </Modal>
                            </>
                        </Col>
                    </Row>
                    <Row>
                        <FilterBox/>
                    </Row>
                    <Row>
                        <Col className={"position-relative"}>
                            <Alert style={{position: "fixed", top: 0, left: 0}} variant={"danger"}
                                   onClose={() => setErrorShow(false)} dismissible show={errorShow}>
                                {message}
                            </Alert>
                            <Alert style={{position: "fixed", top: 0, left: 0}} variant={"success"}
                                   onClose={() => setSuccessShow(false)} dismissible show={successShow}>
                                {message}
                            </Alert>
                        </Col>
                    </Row>
                </Col>
                <Row>
                    <Col className={"d-flex p-5 w-100 col-12"}>
                        <Row className={"overflow-scroll d-flex w-100"}>
                            {account === undefined ?
                                <div className={"d-flex w-100 justify-content-center"}><Loader/></div> :
                                <table className={"table_block"}>
                                    <thead>
                                    <tr>
                                        {
                                            AccountTotalTable.map(item => (
                                                <td key={`account-total-td-${item.id}`} className={"p-2"}>
                                                    {item.name}
                                                </td>
                                            ))
                                        }
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        account.filter(item => item.accountMainId === MainId.authData).map(
                                            item => <tr key={item.accountSpecId}>
                                                <td className={"p-2"}>{item.accountSpecCode}</td>
                                                <td className={"p-2"}>{item.accountSpecName}</td>
                                                <td className={"p-2"}>
                                                    {item.instinct === 0 ? "ماهیت ندارد" : item.instinct === 1 ? "بدهکار" : "بستانکار"}
                                                    /
                                                    {item.type === 0 ? "موقت" : "دائم"}
                                                </td>
                                                <td className={"p-2"}>{item.isActive === true ? <Button
                                                    variant={"success"}
                                                    value={true}
                                                    onClick={() => manageActive(item.accountSpecId, !item.isActive)}
                                                >{"فعال"}</Button> : <Button
                                                    variant={"secondary"}
                                                    value={false}
                                                    onClick={() => manageActive(item.accountSpecId, !item.isActive)}
                                                >{"غیر فعال"}</Button>}</td>
                                                <td className={"d-flex justify-content-center gap-2 p-2"}>
                                                    <ActionTableButton color={"--text-color-white"}
                                                                       bgColor={"--color-warning"}
                                                                       tooltip={"ویرایش"}
                                                                       icon={faEdit}
                                                                       onClick={() => manageEditAccount(item.accountSpecCode)}
                                                    />

                                                    <ActionTableButton color={"--text-color-white"}
                                                                       bgColor={"--color-danger"}
                                                                       tooltip={"حذف کاربر"}
                                                                       icon={faTrash}
                                                                       onClick={() => manageDeleteModal(item.accountSpecId)}/>

                                                </td>
                                            </tr>
                                        )
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

export default AccountTotal;